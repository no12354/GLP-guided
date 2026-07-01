import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// --- Simple in-memory rate limit (per serverless instance) ---
// 5 requests per IP per minute. Best-effort: resets on cold start,
// but enough to stop casual spam/scripted abuse of the endpoint.
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  // Prevent unbounded growth
  if (hits.size > 5000) {
    for (const [k, v] of hits) {
      if (v.every((t) => now - t >= WINDOW_MS)) hits.delete(k);
    }
  }
  return false;
}

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ ok: false, error: "too many requests" }, { status: 429 });
  }

  let email = "";
  try {
    const data = await req.json();
    email = typeof data?.email === "string" ? data.email.trim() : "";
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  if (!email || !email.includes("@") || email.length > 254) {
    return NextResponse.json({ ok: false, error: "invalid email" }, { status: 400 });
  }

  const key = process.env.MAILERLITE_API_KEY;
  if (!key) return NextResponse.json({ ok: true, stored: false });

  const groupId = process.env.MAILERLITE_GROUP_ID;
  const payload: Record<string, unknown> = { email };
  if (groupId) payload.groups = [groupId];

  try {
    const r = await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });
    return NextResponse.json({ ok: r.ok, stored: r.ok });
  } catch {
    // Never block the user's handoff to the provider on an email error.
    return NextResponse.json({ ok: true, stored: false });
  }
}

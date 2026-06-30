import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  let email = "";
  try {
    const data = await req.json();
    email = typeof data?.email === "string" ? data.email.trim() : "";
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  if (!email || !email.includes("@")) {
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

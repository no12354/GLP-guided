"use client";

import { useState, type FormEvent } from "react";

function track(event: string, params: Record<string, unknown> = {}) {
  if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
    (window as any).gtag("event", event, params);
  }
}

export default function GuideCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    const value = email.trim();
    if (!value || !value.includes("@") || status === "sending") return;
    setStatus("sending");
    track("guide_email_submit", {});
    try {
      const r = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: value }),
      });
      setStatus(r.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="section--tight" id="guide">
      <div className="container">
        <div className="guide-band">
          <div className="guide-band__copy">
            <span className="eyebrow">Free download</span>
            <h2>The 2026 GLP-1 Cost Guide</h2>
            <p>
              Not ready to check eligibility? See what GLP-1 medications really
              cost in 2026 — brand vs. compounded, insurance vs. self-pay — and
              the red flags to avoid. 7 pages, free.
            </p>
          </div>
          <div className="guide-band__form">
            {status === "done" ? (
              <div className="guide-band__done">
                <p><strong>You&apos;re in.</strong> Grab your copy:</p>
                <a className="btn btn-primary" href="/glp1-cost-guide.pdf" target="_blank" rel="noopener">
                  Download the guide →
                </a>
              </div>
            ) : (
              <form onSubmit={submit} noValidate>
                <input
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  placeholder="Your email address"
                  aria-label="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
                  {status === "sending" ? "Sending…" : "Get the free guide"}
                </button>
                {status === "error" && (
                  <p className="guide-band__err">Something went wrong — please try again.</p>
                )}
                <p className="guide-band__fine">
                  We&apos;ll email you the guide plus occasional GLP-1 cost updates.
                  Unsubscribe anytime. No spam.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

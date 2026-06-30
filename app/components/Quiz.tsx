"use client";

import { useCallback, useEffect, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GA_MEASUREMENT_ID, FORM_ENDPOINT, QUIZ_SPLIT } from "../lib/site-config";

type Variant = "quiz" | "direct";

const QUESTIONS = [
  { id: "goal", q: "What's your main goal?", options: ["Lose 10–20 lbs", "Lose 20–50 lbs", "Lose 50+ lbs"] },
  { id: "tried", q: "Tried other weight-loss methods before?", options: ["Yes, several", "One or two", "Not really"] },
  { id: "timeline", q: "How soon would you like to start?", options: ["As soon as possible", "Within a month", "Just exploring"] },
] as const;

function track(event: string, params: Record<string, unknown> = {}) {
  if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
    (window as any).gtag("event", event, params);
  }
}

export default function Quiz({ ctaUrl }: { ctaUrl: string }) {
  const [variant, setVariant] = useState<Variant | null>(null);
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [email, setEmail] = useState("");

  // Sticky A/B assignment.
  useEffect(() => {
    let v = localStorage.getItem("glp_variant") as Variant | null;
    if (v !== "quiz" && v !== "direct") {
      v = Math.random() < QUIZ_SPLIT ? "quiz" : "direct";
      localStorage.setItem("glp_variant", v);
    }
    setVariant(v);
    track("experiment_view", { variant: v });
  }, []);

  const outboundUrl = useCallback(() => {
    if (!ctaUrl || ctaUrl === "#") return ctaUrl;
    const sep = ctaUrl.includes("?") ? "&" : "?";
    return `${ctaUrl}${sep}glp_variant=${variant ?? "quiz"}`;
  }, [ctaUrl, variant]);

  const openQuiz = useCallback(() => {
    setStep(0);
    setAnswers({});
    setEmail("");
    setOpen(true);
    track("quiz_open", {});
    if (typeof document !== "undefined") document.body.style.overflow = "hidden";
  }, []);

  const closeQuiz = useCallback(() => {
    setOpen(false);
    if (typeof document !== "undefined") document.body.style.overflow = "";
  }, []);

  // Intercept clicks on any CTA tagged data-quiz-cta.
  useEffect(() => {
    if (!variant) return;
    const handler = (e: MouseEvent) => {
      const el = (e.target as HTMLElement)?.closest?.("[data-quiz-cta]");
      if (!el) return;
      track("cta_click", { variant });
      if (variant === "quiz") {
        e.preventDefault();
        openQuiz();
      } else {
        const url = outboundUrl();
        if (url && url !== "#") {
          e.preventDefault();
          window.location.href = url;
        }
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [variant, openQuiz, outboundUrl]);

  // Esc to close.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeQuiz(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, closeQuiz]);

  const choose = (qid: string, value: string) => {
    track("quiz_answer", { question: qid, value });
    setAnswers((a) => ({ ...a, [qid]: value }));
    setStep((s) => s + 1);
  };

  const goReadyRx = (withEmail: boolean) => {
    track("quiz_complete", { ...answers, email_captured: withEmail });
    const url = outboundUrl();
    if (url && url !== "#") {
      window.location.href = url;
    } else {
      closeQuiz();
      alert("Thanks! Your eligibility check opens here once the provider link is live.");
    }
  };

  const submitEmail = async (e: FormEvent) => {
    e.preventDefault();
    track("quiz_email_submit", {});
    if (FORM_ENDPOINT) {
      try {
        await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ email, ...answers, source: "glpguideline-quiz" }),
        });
      } catch { /* never block the handoff */ }
    }
    goReadyRx(true);
  };

  const isResult = step >= QUESTIONS.length;
  const progress = Math.min(step, QUESTIONS.length) / QUESTIONS.length;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="quiz-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeQuiz}
        >
          <motion.div
            className="quiz-modal"
            initial={{ y: 24, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 24, opacity: 0, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 320, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="quiz-close" aria-label="Close" onClick={closeQuiz}>×</button>

            <div className="quiz-progress">
              <div className="quiz-progress__bar" style={{ width: `${(isResult ? 1 : progress) * 100}%` }} />
            </div>

            {!isResult ? (
              <div className="quiz-step" key={step}>
                <div className="quiz-kicker">Step {step + 1} of {QUESTIONS.length}</div>
                <h3 className="quiz-q">{QUESTIONS[step].q}</h3>
                <div className="quiz-options">
                  {QUESTIONS[step].options.map((opt) => (
                    <button key={opt} className="quiz-option" onClick={() => choose(QUESTIONS[step].id, opt)}>
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="quiz-step">
                <div className="quiz-kicker">You're all set</div>
                <h3 className="quiz-q">Good news — you may be a good fit.</h3>
                <p className="quiz-sub">
                  A licensed clinician makes the final call. Want our free GLP-1
                  cost-comparison guide emailed over? (Optional.)
                </p>
                <form className="quiz-email" onSubmit={submitEmail}>
                  <input type="email" required placeholder="you@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                  <button type="submit" className="btn btn-primary quiz-go">Send the guide &amp; continue →</button>
                </form>
                <button className="quiz-skip" onClick={() => goReadyRx(false)}>
                  No thanks — take me to the eligibility check →
                </button>
                <p className="quiz-disclaimer">
                  GLP Guideline is an independent affiliate, not a medical provider.
                  Continuing takes you to our licensed telehealth partner; we may earn
                  a commission at no extra cost to you.
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

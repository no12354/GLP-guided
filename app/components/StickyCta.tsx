"use client";

import { useEffect, useState } from "react";

export default function StickyCta({ ctaUrl }: { ctaUrl: string }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`sticky-cta${show ? " sticky-cta--show" : ""}`} aria-hidden={!show}>
      <a className="btn btn-primary" href={ctaUrl} data-quiz-cta tabIndex={show ? 0 : -1}>
        Check Eligibility →
      </a>
    </div>
  );
}

// ============================================================
//  GLP Guideline — Landing Page
//  ▸ To go live: paste your ReadyRx affiliate link below.
//    Every "Check Eligibility" / "Get Started" button uses it.
// ============================================================

const CTA_URL = "#"; // ← replace "#" with your ReadyRx affiliate link

export default function Home() {
  return (
    <>
      {/* Announcement bar */}
      <div className="announce">
        🎉 GLP-1 plans from <strong>$88/mo</strong> through a licensed U.S.
        telehealth provider — see if you qualify in minutes.
      </div>

      {/* Header */}
      <header className="header">
        <div className="container header__inner">
          <a className="brand" href="/">
            <span className="brand__mark">G</span>
            GLP&nbsp;Guideline
          </a>
          <nav className="nav">
            <span className="nav__links" style={{ display: "flex", gap: 28 }}>
              <a href="#how">How it works</a>
              <a href="#pricing">Pricing</a>
              <a href="#why">Why GLP-1</a>
              <a href="#faq">FAQ</a>
            </span>
            <a className="btn btn-primary" href={CTA_URL}>
              Check Eligibility
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__copy">
            <div className="rating">
              <span className="stars">★★★★★</span>
              <small>Trusted guidance for GLP-1 weight-loss care</small>
            </div>
            <h1>See if you qualify for GLP-1 weight-loss medication</h1>
            <p className="hero__sub">
              GLP Guideline helps you understand your options and connect with a
              licensed U.S. telehealth provider for compounded semaglutide and
              tirzepatide — fully online, no insurance required.
            </p>
            <div className="hero__cta">
              <a className="btn btn-primary btn-lg" href={CTA_URL}>
                Check Eligibility →
              </a>
              <a className="btn btn-ghost btn-lg" href="#how">
                How it works
              </a>
            </div>
            <div className="hero__meta">
              <span>
                <span className="tickline">✓</span> Takes about 3 minutes
              </span>
              <span>
                <span className="tickline">✓</span> No commitment
              </span>
              <span>
                <span className="tickline">✓</span> Clinician review required
              </span>
            </div>
          </div>

          {/* Visual card */}
          <div className="hero__visual">
            <div className="hero__card-top">
              <span className="pill">Semaglutide · Tirzepatide</span>
              <span className="pill">100% online</span>
            </div>
            <div className="hero__price">
              <div className="from">Plans starting at</div>
              <div className="amt">
                $88<span>/mo</span>
              </div>
              <div className="note">
                through a licensed telehealth provider · no hidden fees
              </div>
            </div>
            <ul className="hero__checklist">
              <li>
                <span className="ck">✓</span> Reviewed by U.S.-licensed clinicians
              </li>
              <li>
                <span className="ck">✓</span> Sourced from licensed U.S. pharmacies
              </li>
              <li>
                <span className="ck">✓</span> Discreet shipping to your door
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="trust">
        <div className="container trust__grid">
          <div className="trust__item">
            <span className="trust__ic">🛡️</span> LegitScript-certified partner
          </div>
          <div className="trust__item">
            <span className="trust__ic">👩‍⚕️</span> Board-certified U.S. clinicians
          </div>
          <div className="trust__item">
            <span className="trust__ic">💊</span> Licensed U.S. pharmacies
          </div>
          <div className="trust__item">
            <span className="trust__ic">🔒</span> HIPAA-compliant platform
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section" id="how">
        <div className="container center">
          <span className="eyebrow">What happens next</span>
          <h2 className="section-title">Get started in 4 simple steps</h2>
          <p className="section-sub">
            A modern, fully online process — no waiting rooms, no pharmacy lines.
          </p>
        </div>
        <div className="container">
          <div className="steps">
            <div className="step">
              <div className="step__num">1</div>
              <h3>Complete a quick assessment</h3>
              <p>
                Answer a few health questions online. Takes about 15 minutes,
                with same-day slots often available.
              </p>
            </div>
            <div className="step">
              <div className="step__num">2</div>
              <h3>A clinician reviews your intake</h3>
              <p>
                A licensed U.S. clinician evaluates your information and, if
                appropriate, builds a personalized treatment plan.
              </p>
            </div>
            <div className="step">
              <div className="step__num">3</div>
              <h3>Medication ships to your door</h3>
              <p>
                If prescribed, your medication is sent discreetly from a licensed
                U.S. pharmacy — no pharmacy visits required.
              </p>
            </div>
            <div className="step">
              <div className="step__num">4</div>
              <h3>Ongoing refills &amp; support</h3>
              <p>
                Refills arrive before you run out, with provider messaging for
                dosing and questions along the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section bg-cream" id="pricing">
        <div className="container center">
          <span className="eyebrow">Transparent pricing</span>
          <h2 className="section-title">Choose your GLP-1 plan</h2>
          <p className="section-sub">
            Straightforward monthly pricing through a licensed telehealth
            provider. Cancel or change anytime.
          </p>
        </div>
        <div className="container">
          <div className="pricing">
            <div className="plan plan--featured">
              <span className="plan__tag">Most popular</span>
              <div className="plan__name">Tirzepatide</div>
              <p className="plan__desc">
                Strong appetite control for effective weight management.
              </p>
              <div className="plan__price">
                from <b>$158</b>/month
              </div>
              <ul className="plan__list">
                <li>
                  <span className="ck">✓</span> Shipped every 4 weeks
                </li>
                <li>
                  <span className="ck">✓</span> Dosing adjusted as your body responds
                </li>
                <li>
                  <span className="ck">✓</span> Same price regardless of dosage
                </li>
                <li>
                  <span className="ck">✓</span> Cancel or change anytime
                </li>
              </ul>
              <a className="btn btn-primary" href={CTA_URL}>
                Check Eligibility
              </a>
            </div>

            <div className="plan">
              <div className="plan__name">Semaglutide</div>
              <p className="plan__desc">
                Proven, steady appetite control and consistent results.
              </p>
              <div className="plan__price">
                from <b>$88</b>/month
              </div>
              <ul className="plan__list">
                <li>
                  <span className="ck">✓</span> Provider reviews your intake
                </li>
                <li>
                  <span className="ck">✓</span> Shipped every 4 weeks
                </li>
                <li>
                  <span className="ck">✓</span> Dosing adjusted as your body responds
                </li>
                <li>
                  <span className="ck">✓</span> Cancel or change anytime
                </li>
              </ul>
              <a className="btn btn-ghost" href={CTA_URL}>
                Check Eligibility
              </a>
            </div>
          </div>
          <p className="price-disclaimer">
            Pricing shown reflects starting rates advertised by the telehealth
            provider and may vary based on the clinician&apos;s evaluation,
            dosage, and plan length. GLP Guideline does not set prices or provide
            medical services. All treatment requires clinician approval.
          </p>
        </div>
      </section>

      {/* Why GLP-1 / features */}
      <section className="section" id="why">
        <div className="container center">
          <span className="eyebrow">Why GLP-1 care</span>
          <h2 className="section-title">Modern weight-loss care, built for real life</h2>
          <p className="section-sub">
            GLP-1 medications are among the most studied options for sustainable
            weight management — paired here with ongoing clinical support.
          </p>
        </div>
        <div className="container">
          <div className="features">
            <div className="feature">
              <div className="feature__ic">📈</div>
              <h3>Evidence-based treatments</h3>
              <p>
                Semaglutide and tirzepatide have been studied extensively for
                appetite regulation and weight management.
              </p>
            </div>
            <div className="feature">
              <div className="feature__ic">💬</div>
              <h3>Ongoing clinician support</h3>
              <p>
                Message licensed clinicians about dosing, tolerance, and progress
                throughout your plan.
              </p>
            </div>
            <div className="feature">
              <div className="feature__ic">🚚</div>
              <h3>Free &amp; discreet shipping</h3>
              <p>
                Medication, if prescribed, is delivered to your door from a
                licensed U.S. pharmacy — no lines, no hassle.
              </p>
            </div>
            <div className="feature">
              <div className="feature__ic">💳</div>
              <h3>No insurance required</h3>
              <p>
                Transparent monthly pricing with no hidden fees. Cancel or change
                your plan anytime.
              </p>
            </div>
            <div className="feature">
              <div className="feature__ic">📱</div>
              <h3>100% online process</h3>
              <p>
                From assessment to refills, everything happens online — no
                in-person visits needed.
              </p>
            </div>
            <div className="feature">
              <div className="feature__ic">🔁</div>
              <h3>On-time refills</h3>
              <p>
                Refills are shipped before you run out, so you can stay
                consistent with your plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="section--tight">
        <div className="container">
          <div className="ctaband">
            <h2>Start your weight-loss journey today</h2>
            <p>
              Find out in minutes whether GLP-1 treatment through a licensed
              telehealth provider is right for you. No commitment to check.
            </p>
            <a className="btn btn-primary btn-lg" href={CTA_URL}>
              Check Eligibility →
            </a>
            <div style={{ marginTop: 18, fontSize: 13, opacity: 0.85 }}>
              Advertising disclosure: GLP Guideline is an independent affiliate
              and may earn a commission if you sign up through our links.
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-cream" id="faq">
        <div className="container center">
          <span className="eyebrow">Good to know</span>
          <h2 className="section-title">Frequently asked questions</h2>
        </div>
        <div className="container">
          <div className="faq">
            <details>
              <summary>What is GLP Guideline?</summary>
              <p>
                GLP Guideline is an independent education and referral site. We
                help you understand GLP-1 weight-loss options and connect you with
                a licensed telehealth provider. We are not a pharmacy or medical
                provider, and we don&apos;t provide medical advice.
              </p>
            </details>
            <details>
              <summary>Do I qualify?</summary>
              <p>
                Eligibility is determined by a licensed clinician based on your
                health history and assessment responses. You can complete a quick
                online assessment to find out whether treatment may be
                appropriate for you.
              </p>
            </details>
            <details>
              <summary>How much does it cost?</summary>
              <p>
                Plans through the telehealth provider start around $88/month for
                semaglutide and $158/month for tirzepatide. Final pricing depends
                on the clinician&apos;s evaluation and the plan you choose.
              </p>
            </details>
            <details>
              <summary>How does dosing work?</summary>
              <p>
                Dosing is personalized by the prescribing clinician based on your
                progress and tolerance. You can message the provider&apos;s care
                team with questions throughout your plan.
              </p>
            </details>
            <details>
              <summary>Is this legitimate?</summary>
              <p>
                The telehealth partner works only with U.S.-licensed clinicians
                and accredited U.S. pharmacies, and operates on a HIPAA-compliant
                platform. Eligibility and prescriptions are at the sole discretion
                of the licensed provider.
              </p>
            </details>
            <details>
              <summary>How fast does it ship?</summary>
              <p>
                If you&apos;re prescribed treatment, medication is shipped
                discreetly from a licensed U.S. pharmacy, and refills are sent
                before you run out.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Safety + disclosure */}
      <section className="section--tight">
        <div className="container">
          <div className="disclosure">
            <p>
              <strong>Required safety notice.</strong> Compounded GLP-1
              medications are prepared by licensed U.S. pharmacies and regulated
              by state Boards of Pharmacy, but are not evaluated or approved by
              the FDA for safety or efficacy. GLP-1 medications may carry risks,
              including thyroid C-cell tumors. Seek immediate care for symptoms
              such as neck swelling, hoarseness, trouble swallowing, or shortness
              of breath. Individual results vary and are not guaranteed.
            </p>
            <p style={{ marginTop: 10 }}>
              <strong>Affiliate disclosure.</strong> GLP Guideline is an
              independent affiliate, not a healthcare provider or pharmacy. We may
              earn a commission when you sign up through links on this site, at no
              extra cost to you. This page is for informational purposes only and
              is not medical advice. Always consult a licensed clinician.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer__top">
            <div className="footer__brand">
              <div className="brand">
                <span className="brand__mark">G</span> GLP Guideline
              </div>
              <p>
                Independent education and referral for GLP-1 weight-loss care.
                We help you understand your options and connect with a licensed
                telehealth provider.
              </p>
            </div>
            <div>
              <h4>Explore</h4>
              <a href="#how">How it works</a>
              <a href="#pricing">Pricing</a>
              <a href="#why">Why GLP-1</a>
              <a href="#faq">FAQ</a>
            </div>
            <div>
              <h4>Contact</h4>
              <a href="mailto:hello@glpguideline.com">hello@glpguideline.com</a>
              <a href={CTA_URL}>Check eligibility</a>
            </div>
          </div>
          <div className="footer__legal">
            <p>
              The assessment available through our telehealth partner does not
              create a doctor–patient relationship. Clinical services are
              provided by independent networks of U.S.-licensed clinicians who
              determine eligibility based on medical history and assessment
              responses. Providers retain full discretion to prescribe or decline
              treatment. Compounded medications are produced in licensed U.S.
              pharmacies but are not FDA-approved and have not been evaluated by
              the FDA for safety, efficacy, or quality. Results may vary.
            </p>
            <p>
              GLP Guideline is a marketing affiliate and is not affiliated with,
              endorsed by, or sponsored by any medication manufacturer. All
              trademarks are the property of their respective owners.
            </p>
            <div className="footer__copy">
              © {new Date().getFullYear()} GLP Guideline · hello@glpguideline.com
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

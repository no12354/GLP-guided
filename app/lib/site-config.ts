// ============================================================
//  Plug-in values for the funnel. All safe to leave blank —
//  the site works without them; features light up once set.
// ============================================================

// Your GA4 Measurement ID, e.g. "G-XXXXXXXXXX". Leave "" to disable analytics.
export const GA_MEASUREMENT_ID = "";

// Endpoint that receives quiz emails (e.g. a Formspree URL or your ESP form action).
// Leave "" to skip email storage — the quiz still works and hands off to the provider.
export const FORM_ENDPOINT = "";

// A/B test: share of visitors who get the quiz; the rest go straight to the
// provider link. 0.5 = 50/50. Set to 1 for everyone, 0 to turn the quiz off.
export const QUIZ_SPLIT = 0.5;

// ============================================================
//  Plug-in values for the funnel.
// ============================================================

// Your GA4 Measurement ID, e.g. "G-XXXXXXXXXX". Leave "" to disable analytics.
export const GA_MEASUREMENT_ID = "G-WT23ZRF618";

// A/B test: share of visitors who get the quiz; the rest go straight to the
// provider link. 0.5 = 50/50. Set to 1 for everyone, 0 to turn the quiz off.
export const QUIZ_SPLIT = 0.5;

// Quiz emails go to MailerLite via the server route /api/subscribe, which reads
// MAILERLITE_API_KEY + MAILERLITE_GROUP_ID from Vercel environment variables
// (kept out of this repo). Manage those in the Vercel project settings.

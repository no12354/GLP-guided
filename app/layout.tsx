import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { GA_MEASUREMENT_ID } from "./lib/site-config";

const SITE = "https://glpguideline.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "GLP Guideline | See If You Qualify for GLP-1 Weight-Loss Medication",
  description:
    "Compare GLP-1 weight-loss options — compounded semaglutide from $88/mo and tirzepatide from $158/mo — and connect with a licensed U.S. telehealth provider. 100% online, no insurance required. Check eligibility in minutes.",
  keywords: [
    "GLP-1", "semaglutide", "tirzepatide", "weight loss", "telehealth",
    "compounded semaglutide", "online weight loss", "GLP-1 cost", "weight loss medication",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE,
    siteName: "GLP Guideline",
    title: "See If You Qualify for GLP-1 Weight-Loss Medication",
    description:
      "Compounded semaglutide from $88/mo & tirzepatide from $158/mo through a licensed U.S. telehealth provider. 100% online. Check eligibility in minutes.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "GLP Guideline — GLP-1 weight-loss care" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "See If You Qualify for GLP-1 Weight-Loss Medication",
    description:
      "Compounded semaglutide from $88/mo & tirzepatide from $158/mo. 100% online. Check eligibility in minutes.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        {GA_MEASUREMENT_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');`}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}

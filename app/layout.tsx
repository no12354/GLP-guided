import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { GA_MEASUREMENT_ID } from "./lib/site-config";

export const metadata: Metadata = {
  title: "GLP Guideline | See If You Qualify for GLP-1 Weight-Loss Treatment",
  description:
    "GLP Guideline helps you understand GLP-1 weight-loss options and connect with a licensed telehealth provider. Check your eligibility in minutes.",
  openGraph: {
    title: "GLP Guideline | See If You Qualify for GLP-1 Weight-Loss Treatment",
    description:
      "Understand your GLP-1 options and connect with a licensed telehealth provider. Check eligibility in minutes.",
    type: "website",
  },
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

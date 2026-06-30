import type { Metadata } from "next";
import "./globals.css";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

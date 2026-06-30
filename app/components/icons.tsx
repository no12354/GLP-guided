import React from "react";

/** Lightweight inline SVG icon set (Lucide-style strokes) — replaces emoji
 *  across the page for a clean, professional, badge-driven look. */
const paths: Record<string, React.ReactNode> = {
  shield: (<><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></>),
  lock: (<><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></>),
  clinician: (<><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="m15 10 2 2 4-4" /></>),
  pharmacy: (<><path d="M3 21h18" /><path d="M5 21V7l7-4 7 4v14" /><path d="M10 9h.01M14 9h.01M10 13h.01M14 13h.01M10 17h4" /></>),
  chart: (<><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" /></>),
  chat: (<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />),
  truck: (<><path d="M14 18V6a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h1" /><path d="M14 9h4l4 4v4a1 1 0 0 1-1 1h-1" /><circle cx="7.5" cy="18.5" r="1.5" /><circle cx="17.5" cy="18.5" r="1.5" /></>),
  card: (<><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" /></>),
  device: (<><rect x="5" y="2" width="14" height="20" rx="2" /><path d="M11 18h2" /></>),
  refresh: (<><path d="M3 12a9 9 0 0 1 15-6.7L21 8" /><path d="M21 3v5h-5" /><path d="M21 12a9 9 0 0 1-15 6.7L3 16" /><path d="M3 21v-5h5" /></>),
};

export default function Icon({
  name,
  size = 22,
  className,
}: {
  name: keyof typeof paths | string;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

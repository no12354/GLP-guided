"use client";

import React from "react";
import { motion } from "framer-motion";

type AnimatedButtonProps = {
  children?: React.ReactNode;
  href?: string;
  className?: string;
} & React.HTMLAttributes<HTMLElement>;

/**
 * AnimatedButton — ported from a shadcn/framer-motion registry component to this
 * project's plain-CSS stack. Reuses the existing `.btn` classes for shape/brand
 * color, and layers on a shimmering text mask + sweeping border-shine, plus a
 * spring hover/tap scale. No Tailwind / no `cn` dependency.
 */
export default function AnimatedButton({
  children = "Check Eligibility",
  href,
  className = "btn btn-primary btn-lg",
  ...rest
}: AnimatedButtonProps) {
  const isLink = typeof href === "string";
  const Comp: any = isLink ? motion.a : motion.button;

  return (
    <Comp
      {...(isLink ? { href } : {})}
      className={className}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 500, damping: 30, mass: 0.5 }}
      style={{
        position: "relative",
        overflow: "hidden",
        ["--shine" as any]: "rgba(255,255,255,0.9)",
      }}
      {...rest}
    >
      {/* Shimmering label */}
      <motion.span
        style={{
          position: "relative",
          zIndex: 1,
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          WebkitMaskImage:
            "linear-gradient(-75deg, #000 calc(var(--mask-x) + 20%), rgba(0,0,0,0.4) calc(var(--mask-x) + 30%), #000 calc(var(--mask-x) + 100%))",
          maskImage:
            "linear-gradient(-75deg, #000 calc(var(--mask-x) + 20%), rgba(0,0,0,0.4) calc(var(--mask-x) + 30%), #000 calc(var(--mask-x) + 100%))",
        }}
        initial={{ ["--mask-x" as any]: "100%" } as any}
        animate={{ ["--mask-x" as any]: "-100%" } as any}
        transition={{ repeat: Infinity, duration: 1.4, ease: "linear", repeatDelay: 1.6 }}
      >
        {children}
      </motion.span>

      {/* Sweeping border shine */}
      <motion.span
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          padding: 1.5,
          background:
            "linear-gradient(-75deg, transparent 30%, var(--shine) 50%, transparent 70%)",
          backgroundSize: "200% 100%",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          pointerEvents: "none",
        }}
        initial={{ backgroundPosition: "100% 0", opacity: 0 }}
        animate={{ backgroundPosition: ["100% 0", "0% 0"], opacity: [0, 1, 0] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "linear", repeatDelay: 1.6 }}
      />
    </Comp>
  );
}

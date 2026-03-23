"use client";

import { useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 60,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const axis = direction === "up" || direction === "down" ? "y" : "x";
    const sign =
      direction === "up" || direction === "left" ? distance : -distance;

    const anim = gsap.fromTo(
      el,
      { opacity: 0, [axis]: sign },
      {
        opacity: 1,
        [axis]: 0,
        duration: 0.9,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          // play when entering, reset when leaving so it can replay on navigation
          toggleActions: "play none none reset",
        },
      }
    );

    return () => {
      // Kill only this element's triggers and animation
      if (anim && anim.scrollTrigger) {
        try {
          anim.scrollTrigger.kill();
        } catch (e) {}
      }
      try {
        anim.kill();
      } catch (e) {}
      // reset inline styles to avoid stuck state
      el.style.opacity = "";
      el.style.transform = "";
    };
  }, [delay, direction, distance]);

  // Ensure ScrollTrigger recalculates when the route changes (client navigation)
  useEffect(() => {
    ScrollTrigger.refresh();
  }, [pathname]);

  return (
    <div ref={ref} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}

"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  tag?: "h1" | "h2" | "h3" | "p" | "span";
}

export default function TextReveal({
  text,
  className = "",
  delay = 0,
  tag: Tag = "h1",
}: TextRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const words = el.querySelectorAll(".word");
    gsap.fromTo(
      words,
      { opacity: 0, y: 40, rotateX: -40 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.8,
        delay,
        stagger: 0.05,
        ease: "power3.out",
      }
    );
  }, [delay]);

  const wordsMarkup = text.split(" ").map((word, i) => (
    <span
      key={i}
      className="word inline-block"
      style={{ opacity: 0, perspective: "400px" }}
    >
      {word}&nbsp;
    </span>
  ));

  return (
    // @ts-expect-error dynamic tag
    <Tag ref={ref} className={className}>
      {wordsMarkup}
    </Tag>
  );
}

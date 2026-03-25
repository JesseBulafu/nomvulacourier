"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export default function Counter({
  end,
  suffix = "",
  prefix = "",
  duration = 2,
  className = "",
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const counting = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    ScrollTrigger.create({
      trigger: el,
      start: "top 80%",
      onEnter: () => {
        if (counting.current) return;
        counting.current = true;
        const obj = { val: 0 };
        gsap.to(obj, {
          val: end,
          duration,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = `${prefix}${Math.floor(obj.val).toLocaleString()}${suffix}`;
          },
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, [end, suffix, prefix, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}

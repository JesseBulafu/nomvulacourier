"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

// Retry helper for dynamic imports (handles transient ChunkLoadError)
function loadWithRetry(fn: () => Promise<any>, retries = 3, delay = 800): Promise<any> {
  return new Promise((resolve, reject) => {
    fn()
      .then(resolve)
      .catch((err) => {
        if (retries <= 0) return reject(err);
        setTimeout(() => {
          loadWithRetry(fn, retries - 1, delay).then(resolve).catch(reject);
        }, delay);
      });
  });
}

// Dynamically import the GlobeModel (client-side only) with retry
const GlobeModel = dynamic(() => loadWithRetry(() => import("./GlobeModel"), 2, 800), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="h-10 w-10 rounded-full border-2 border-orange-500 border-t-transparent animate-spin" aria-hidden="true" />
    </div>
  ),
});

export default function LazyGlobe({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [tried, setTried] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    const el = ref.current;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      {
        root: null,
        rootMargin: "200px",
        threshold: 0.01,
      }
    );

    io.observe(el);

    return () => io.disconnect();
  }, []);

  // lightweight retry: if loading fails, allow re-trying by remounting
  // (GlobeModel should handle its own errors, but this adds resilience)
  const handleRetry = () => {
    setTried((t) => t + 1);
    setVisible(false);
    setTimeout(() => setVisible(true), 200);
  };

  return (
    <div ref={ref} className={className}>
      {visible ? (
        // key on `tried` forces remount for retry
        <div key={tried} className="w-full h-full">
          <GlobeModel />
        </div>
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <div className="h-10 w-10 rounded-full border-2 border-orange-500 border-t-transparent animate-spin" aria-hidden="true" />
        </div>
      )}
      {!visible && (
        <button
          onClick={handleRetry}
          className="sr-only"
          aria-hidden
        />
      )}
    </div>
  );
}

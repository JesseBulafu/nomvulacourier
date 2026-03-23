"use client";

import { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import TextReveal from "@/components/animations/TextReveal";

const GlobeModel = dynamic(() => import("@/components/GlobeModel"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full flex items-center justify-center">
      <div className="h-12 w-12 rounded-full border-2 border-orange-500 border-t-transparent animate-spin" />
    </div>
  ),
});

const contactInfo = [
  {
    Icon: MapPin,
    label: "Address",
    value: (
      <>
        Nomvula Courier & Procurement
        <br />
        70G, Commissioner Street
        <br />
        Kempton Park
        <br />
        Johannesburg
        <br />
        South Africa
        <br />
        1619
      </>
    ),
  },
  {
    Icon: Phone,
    label: "Kena Violet",
    value: "+27 71 910 8037",
  },
  {
    Icon: Phone,
    label: "Kgaogelo Sambo Loire",
    value: "+27 63 310 9127",
  },
  {
    Icon: Mail,
    label: "Email",
    value: "info@nomvulacourier.co.za",
  },
  {
    Icon: Clock,
    label: "Hours",
    value: "Mon – Fri: 7am – 6pm | Sat: 8am – 1pm",
  },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  // Refs and RAF for tilt/tilt animation
  const cardContainerRef = useRef<HTMLDivElement | null>(null);
  const cardInnerRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handleCardMouseMove = (e: React.MouseEvent) => {
    const container = cardContainerRef.current;
    const inner = cardInnerRef.current;
    if (!container || !inner) return;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const maxTilt = 4; // degrees (reduced)
    const ry = ((x - cx) / cx) * maxTilt; // rotateY
    const rx = -((y - cy) / cy) * maxTilt; // rotateX

    rafRef.current = requestAnimationFrame(() => {
      inner.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(4px)`;
    });
  };

  const handleCardMouseLeave = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    const inner = cardInnerRef.current;
    if (!inner) return;
    inner.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up to an API route / email service
    setSubmitted(true);
  };

  return (
    <>
      {/* ── Hero banner ─────────────────────────────── */}
        <section className="relative bg-gradient-to-br from-[#0a0f1e] via-[#0f172a] to-[#1a1040] pt-32 pb-20 overflow-hidden">
          {/* Full-bleed wave gradient background covering the whole section */}
          <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none">
            <svg
              className="w-full h-full"
              viewBox="0 0 1440 600"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <defs>
                <linearGradient id="waveGradFull" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#FFD8B3" />
                  <stop offset="60%" stopColor="#FFEFD8" />
                  <stop offset="100%" stopColor="#FFF9F0" />
                </linearGradient>

                <pattern id="waveDotsFull" width="24" height="24" patternUnits="userSpaceOnUse">
                  <circle cx="4" cy="4" r="2" fill="#F97316" />
                </pattern>

                <mask id="waveMaskFull">
                  <rect x="0" y="0" width="1440" height="600" fill="black" />
                  <path d="M0,420 C240,360 360,480 600,440 C840,400 1080,480 1440,420 L1440,600 L0,600 Z" fill="white" />
                  <path d="M0,360 C240,300 480,420 720,380 C960,340 1200,420 1440,360 L1440,600 L0,600 Z" fill="white" />
                </mask>
              </defs>

              <rect x="0" y="0" width="1440" height="600" fill="url(#waveGradFull)" />
              <path d="M0,420 C240,360 360,480 600,440 C840,400 1080,480 1440,420 L1440,600 L0,600 Z" fill="url(#waveGradFull)" opacity="0.95" />
              <path d="M0,360 C240,300 480,420 720,380 C960,340 1200,420 1440,360 L1440,600 L0,600 Z" fill="url(#waveGradFull)" opacity="0.9" />

              <rect x="0" y="0" width="1440" height="600" fill="url(#waveDotsFull)" opacity="0.12" mask="url(#waveMaskFull)" />
            </svg>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-orange-500/[0.06] blur-[120px]" />

          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
          <ScrollReveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-orange-400">
              Get In Touch
            </span>
          </ScrollReveal>
          <TextReveal
            tag="h1"
            text="Contact Us"
            className="mt-3 text-4xl font-bold text-white sm:text-5xl lg:text-6xl"
            delay={0.2}
          />
          <ScrollReveal delay={0.4}>
            <p className="mt-4 text-lg text-gray-400 max-w-xl mx-auto">
              Have a question or need a custom logistics solution? Our team is
              ready to help you move forward.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Globe + Form ────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          {/* Wave gradient background with orange dots behind globe + form */}
          <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
            <svg
              className="w-full h-full"
              viewBox="0 0 1440 600"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <defs>
                <linearGradient id="waveGradContact" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#FFD8B3" />
                  <stop offset="60%" stopColor="#FFEFD8" />
                  <stop offset="100%" stopColor="#FFF9F0" />
                </linearGradient>

                <pattern id="waveDots" width="24" height="24" patternUnits="userSpaceOnUse">
                  <circle cx="4" cy="4" r="2" fill="#F97316" />
                </pattern>

                <mask id="waveMaskContact">
                  <rect x="0" y="0" width="1440" height="600" fill="black" />
                  <path d="M0,420 C240,360 360,480 600,440 C840,400 1080,480 1440,420 L1440,600 L0,600 Z" fill="white" />
                  <path d="M0,360 C240,300 480,420 720,380 C960,340 1200,420 1440,360 L1440,600 L0,600 Z" fill="white" />
                </mask>
              </defs>

              <rect x="0" y="0" width="1440" height="600" fill="url(#waveGradContact)" />
              <path d="M0,420 C240,360 360,480 600,440 C840,400 1080,480 1440,420 L1440,600 L0,600 Z" fill="url(#waveGradContact)" opacity="0.95" />
              <path d="M0,360 C240,300 480,420 720,380 C960,340 1200,420 1440,360 L1440,600 L0,600 Z" fill="url(#waveGradContact)" opacity="0.9" />

              <rect x="0" y="0" width="1440" height="600" fill="url(#waveDots)" opacity="0.12" mask="url(#waveMaskContact)" />
            </svg>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left — 3D Globe */}
            <ScrollReveal direction="left">
              <div className="relative">
                <GlobeModel className="aspect-square w-full max-w-xl mx-auto" />
                {/* Glow ring behind globe */}
                <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
                  <div className="w-3/4 h-3/4 rounded-full bg-orange-500/[0.06] blur-[80px]" />
                </div>
              </div>
            </ScrollReveal>

            {/* Right — Contact Form */}
            <ScrollReveal direction="right">
              <div
                className="card-perspective"
                ref={cardContainerRef}
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                  <div ref={cardInnerRef} className="relative frosted-3d rounded-2xl border border-transparent p-8 sm:p-10">
                <h2 className="text-2xl font-bold text-gray-900">
                  Send Us a Message
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  Fill in the form below and we&apos;ll get back to you within
                  24 hours.
                </p>

                {submitted ? (
                  <div className="mt-8 flex flex-col items-center gap-4 py-12 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                      <Send className="h-7 w-7 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Message Sent!
                    </h3>
                    <p className="text-sm text-gray-500 max-w-xs">
                      Thank you, {formState.fullName.split(" ")[0]}. A member of
                      our team will be in touch shortly.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormState({ fullName: "", email: "", message: "" });
                      }}
                      className="mt-2 text-sm font-medium text-orange-500 hover:text-orange-600"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Full Name
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        value={formState.fullName}
                        onChange={(e) =>
                          setFormState((s) => ({
                            ...s,
                            fullName: e.target.value,
                          }))
                        }
                        placeholder="e.g. Thabo Mokoena"
                        className="mt-1.5 block w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none transition"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) =>
                          setFormState((s) => ({
                            ...s,
                            email: e.target.value,
                          }))
                        }
                        placeholder="you@company.co.za"
                        className="mt-1.5 block w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none transition"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={formState.message}
                        onChange={(e) =>
                          setFormState((s) => ({
                            ...s,
                            message: e.target.value,
                          }))
                        }
                        placeholder="Tell us about your shipment needs, preferred routes, volume, timeline…"
                        className="mt-1.5 block w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none transition resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/25 active:scale-[0.98]"
                    >
                      <Send className="h-4 w-4" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Contact Info Cards ──────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 0.1}>
                <div className="flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-sm border border-gray-100 transition-shadow hover:shadow-md">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10">
                    <item.Icon className="h-6 w-6 text-orange-500" />
                  </div>
                  <h3 className="mt-4 text-sm font-semibold text-gray-900">
                    {item.label}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{item.value}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Map removed per request */}
    </>
  );
}

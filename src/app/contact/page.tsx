"use client";

import { useState } from "react";
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
    Icon: Phone,
    label: "Kaija Patrick Jonathan",
    value: "+27 78 989 6677",
  },
  {
    Icon: Phone,
    label: "Promise Emmanuel Okereafor",
    value: "+27 62 257 6761",
  },
  {
    Icon: Mail,
    label: "Email",
    value: "Nomvulacourierp@gmail.com",
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
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Something went wrong.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to send message.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      {/* ── Animated wave background (fixed behind all sections) ── */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-gradient-to-br from-[#0a0f1e] via-[#0f172a] to-[#1a1040]">
        <svg
          className="absolute bottom-0 left-0 w-[200%] h-[30%] animate-[wave_12s_ease-in-out_infinite]"
          viewBox="0 0 2880 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            d="M0,160 C240,100 480,220 720,160 C960,100 1200,220 1440,160 C1680,100 1920,220 2160,160 C2400,100 2640,220 2880,160 L2880,320 L0,320 Z"
            fill="rgba(249,115,22,0.07)"
          />
        </svg>
        <svg
          className="absolute bottom-0 left-0 w-[200%] h-[35%] animate-[wave_16s_ease-in-out_infinite_reverse]"
          viewBox="0 0 2880 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            d="M0,200 C360,140 720,260 1080,200 C1440,140 1800,260 2160,200 C2520,140 2880,260 2880,200 L2880,320 L0,320 Z"
            fill="rgba(249,115,22,0.04)"
          />
        </svg>
        <svg
          className="absolute bottom-0 left-0 w-[200%] h-[40%] animate-[wave_20s_ease-in-out_infinite]"
          viewBox="0 0 2880 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            d="M0,240 C480,180 960,300 1440,240 C1920,180 2400,300 2880,240 L2880,320 L0,320 Z"
            fill="rgba(96,165,250,0.03)"
          />
        </svg>
        {/* Ambient glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] sm:w-[600px] sm:h-[600px] rounded-full bg-orange-500/[0.06] blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] rounded-full bg-blue-500/[0.04] blur-[100px]" />
      </div>

      {/* ── Hero banner ─────────────────────────────── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center lg:px-8">
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
      <section className="relative py-12 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12">
            {/* Left — 3D Globe */}
            <ScrollReveal direction="left">
              <div className="relative">
                <GlobeModel className="aspect-square w-full max-w-xl mx-auto" />
                <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
                  <div className="w-3/4 h-3/4 rounded-full bg-orange-500/[0.06] blur-[80px]" />
                </div>
              </div>
            </ScrollReveal>

            {/* Right — Contact Form */}
            <ScrollReveal direction="right">
              <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-white">
                  Send Us a Message
                </h2>
                <p className="mt-2 text-sm text-gray-400">
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
                        className="block text-sm font-medium text-gray-300"
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
                        className="mt-1.5 block w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none transition"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-300"
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
                        className="mt-1.5 block w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none transition"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-300"
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
                        className="mt-1.5 block w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none transition resize-none"
                      />
                    </div>

                    {error && (
                      <p className="text-sm text-red-400 text-center">{error}</p>
                    )}

                    <button
                      type="submit"
                      disabled={sending}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/25 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {sending ? (
                        <>
                          <div className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Contact Info Cards ──────────────────────── */}
      <section className="relative py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 0.1}>
                <div className="flex flex-col items-center rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 text-center transition-all hover:bg-white/10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/20">
                    <item.Icon className="h-6 w-6 text-orange-400" />
                  </div>
                  <h3 className="mt-4 text-sm font-semibold text-white">
                    {item.label}
                  </h3>
                  <p className="mt-1 text-sm text-gray-400">{item.value}</p>
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

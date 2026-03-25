"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import {
  Truck,
  Plane,
  Ship,
  Package,
  Clock,
  Shield,
  Globe,
  ArrowRight,
  CheckCircle,
  ChevronRight,
  PawPrint,
} from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import TextReveal from "@/components/animations/TextReveal";
import Counter from "@/components/animations/Counter";
import Magnetic from "@/components/animations/Magnetic";
import Parallax from "@/components/animations/Parallax";
import HeroBackground from "@/components/HeroBackground";

const PlaneModel = dynamic(() => import("@/components/PlaneModel"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full flex items-center justify-center">
      <div className="h-12 w-12 rounded-full border-2 border-orange-500 border-t-transparent animate-spin" />
    </div>
  ),
});



/* ─── Data ─────────────────────────────────────────── */

const stats = [
  { value: 2500, suffix: "+", label: "Deliveries Monthly" },
  { value: 42, suffix: "", label: "African Countries" },
  { value: 99, suffix: "%", label: "On-Time Rate" },
  { value: 24, suffix: "/7", label: "Customer Support" },
];

const services = [
  {
    Icon: Truck,
    title: "Express Delivery",
    desc: "Same-day and next-day delivery across all major South African cities with real-time tracking.",
    color: "bg-orange-500/10 text-orange-500",
  },
  {
    Icon: Plane,
    title: "Air Freight",
    desc: "Time-critical cargo via our airline partnerships, ensuring your goods arrive on schedule worldwide.",
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    Icon: Ship,
    title: "Sea Freight",
    desc: "Cost-effective ocean cargo for large shipments, with full container and groupage options.",
    color: "bg-cyan-500/10 text-cyan-500",
  },
  {
    Icon: Package,
    title: "Warehousing",
    desc: "State-of-the-art storage facilities with inventory management and order fulfillment services.",
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    Icon: Globe,
    title: "International Shipping",
    desc: "Door-to-door international logistics, customs clearance, and documentation handling.",
    color: "bg-emerald-500/10 text-emerald-500",
  },
  {
    Icon: Clock,
    title: "Last Mile Delivery",
    desc: "Reliable last-mile solutions with proof of delivery and customer notification systems.",
    color: "bg-rose-500/10 text-rose-500",
  },
  {
    Icon: PawPrint,
    title: "Animal Logistics",
    desc: "Expert animal transport across international borders — worldwide air freight, customs clearance, import/export regulation guidance, and standard or customised transport containers for pets and large animals.",
    color: "bg-amber-500/10 text-amber-500",
  },
];

const features = [
  "Real-time GPS tracking on every shipment",
  "Dedicated account manager for business clients",
  "Insurance coverage up to R5 million per shipment",
  "Temperature-controlled transport for sensitive goods",
  "Customs brokerage and trade compliance",
  "SARS accredited customs clearance agent",
  "Eco-friendly fleet with carbon offset program",
];

const partners = [
  "Maersk",
  "South African Airlines",
  "Ignazio Messina & C",
  "CONTRA Consolidations",
];

/* ─── Page ─────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────── */}
      <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden">
        <HeroBackground />

        {/* 3D Plane — centered right below navbar */}
        <div className="relative z-[5] w-full h-[36vh] xs:h-[44vh] sm:h-[50vh] lg:h-[60vh] mt-20">
          <PlaneModel className="w-full h-full" />
        </div>

        {/* Text content below the plane */}
        <div className="relative z-10 mx-auto max-w-4xl px-4 pb-20 text-center sm:px-6 sm:pb-32 lg:px-8">
          <ScrollReveal delay={0.2}>
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-500/20 px-4 py-1.5 text-sm font-medium text-orange-300 backdrop-blur-sm border border-orange-500/20">
              <span className="h-2 w-2 rounded-full bg-orange-400 animate-pulse" />
              Africa&apos;s Leading Courier Service
            </span>
          </ScrollReveal>

          <TextReveal
            text="Delivering Beyond Borders, Exceeding Expectations"
            className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]"
            delay={0.4}
          />

          <ScrollReveal delay={0.8}>
            <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-gray-300">
              From Kempton Park to the world — Nomvula Courier & Procurement provides
              premium freight and logistics services built on speed,
              reliability, and African excellence.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <div className="mt-8 flex flex-col xs:flex-row flex-wrap justify-center gap-3 sm:gap-4 sm:mt-10 max-w-md mx-auto w-full">
              <Magnetic>
                <Link
                  href="/contact"
                  className="w-full xs:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/30 sm:px-6"
                >
                  Get in Touch
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Magnetic>
              <Magnetic>
                <Link
                  href="/contact"
                  className="w-full xs:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 sm:px-6"
                >
                  Track Shipment
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Magnetic>
            </div>
          </ScrollReveal>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="flex flex-col items-center gap-2 text-white/50">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="h-12 w-px bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
          </div>
        </div>
      </section>

      {/* ── Stats Bar ───────────────────────────────── */}
      <section className="relative -mt-16 z-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-px rounded-2xl bg-white shadow-2xl shadow-gray-200/50 md:grid-cols-4 overflow-hidden">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <div className="flex flex-col items-center justify-center py-6 px-3 text-center sm:py-8 sm:px-4">
                  <div className="text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ────────────────────────────────── */}
      <section id="services" className="py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <ScrollReveal>
              <span className="text-sm font-semibold uppercase tracking-widest text-orange-500">
                Our Services
              </span>
            </ScrollReveal>
            <TextReveal
              tag="h2"
              text="Comprehensive Logistics Solutions"
              className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl"
              delay={0.2}
            />
            <ScrollReveal delay={0.3}>
              <p className="mt-4 text-lg text-gray-600">
                End-to-end freight and courier services tailored to your
                business needs.
              </p>
            </ScrollReveal>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 sm:mt-16 sm:gap-8 lg:grid-cols-3">
            {services.map((svc, i) => (
              <ScrollReveal key={svc.title} delay={i * 0.1}>
                <div className="group relative rounded-2xl border border-gray-100 bg-white p-6 sm:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-gray-100 hover:-translate-y-1">
                  <div
                    className={`inline-flex h-14 w-14 items-center justify-center rounded-xl ${svc.color} transition-transform group-hover:scale-110`}
                  >
                    <svc.Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-gray-900">
                    {svc.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    {svc.desc}
                  </p>
                  <Link
                    href="/#services"
                    className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-orange-500 group-hover:text-orange-600"
                  >
                    Learn more
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Video / About Section ───────────────────── */}
      <section id="about" className="py-16 bg-gray-50 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 sm:gap-16 lg:grid-cols-2">
            {/* Video placeholder — swap with your video later */}
            <ScrollReveal direction="left">
              <div className="video-placeholder aspect-video w-full flex items-center justify-center overflow-hidden">
                  <video
                    className="w-full h-full object-cover"
                    src="/videos/nomvula.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    aria-label="Hero video"
                  />
                  <div className="relative z-10 flex flex-col items-center gap-4 pointer-events-none">
                    <span className="sr-only">Watch Our Story</span>
                  </div>
                </div>
            </ScrollReveal>

            <div>
              <ScrollReveal direction="right">
                <span className="text-sm font-semibold uppercase tracking-widest text-orange-500">
                  Why Nomvula?
                </span>
              </ScrollReveal>
              <TextReveal
                tag="h2"
                text="Built for Africa, Ready for the World"
                className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl"
                delay={0.2}
              />
              <ScrollReveal delay={0.3}>
                <p className="mt-5 text-gray-600 leading-relaxed">
                  Founded by Kena Violet and Kgaogelo Sambo Loire in Kempton
                  Park, Nomvula Courier & Procurement has been connecting businesses across the
                  continent with world-class logistics. Our deep understanding of
                  African trade routes, combined with global partnerships, makes
                  us uniquely positioned to deliver.
                </p>
              </ScrollReveal>
              <div className="mt-8 space-y-3">
                {features.map((feat, i) => (
                  <ScrollReveal key={feat} delay={0.3 + i * 0.08}>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-orange-500 shrink-0" />
                      <span className="text-sm text-gray-700">{feat}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
              <ScrollReveal delay={0.8}>
                <Link
                  href="/about"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-orange-500 hover:text-orange-600"
                >
                  Learn more about us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Global Network Section ─────────────────── */}
      <section id="network" className="py-20 sm:py-32 lg:py-40 bg-[#0f172a] text-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Orbiting text + content */}
          <div className="flex flex-col items-center text-center">
            {/* Orbiting "Global Network" around invisible globe */}
            <ScrollReveal>
              <div className="relative w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] mx-auto">
                {/* Ambient glow */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-3/4 h-3/4 rounded-full bg-orange-500/[0.06] blur-[80px]" />
                </div>
                {/* Faint orbit ring */}
                <div className="absolute inset-[10%] rounded-full border border-white/[0.06]" />
                <div className="absolute inset-[25%] rounded-full border border-white/[0.04]" />
                {/* Rotating text */}
                <svg
                  className="absolute inset-0 w-full h-full animate-[spin_20s_linear_infinite]"
                  viewBox="0 0 500 500"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <path
                      id="orbitPath"
                      d="M 250,250 m -180,0 a 180,180 0 1,1 360,0 a 180,180 0 1,1 -360,0"
                      fill="none"
                    />
                  </defs>
                  <text className="fill-orange-400 text-[28px] font-bold uppercase tracking-[0.35em]">
                    <textPath href="#orbitPath" startOffset="0%">
                      Global Network &bull; Global Network &bull; Global Network &bull;
                    </textPath>
                  </text>
                </svg>
                {/* Centre icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-orange-500/10 backdrop-blur-sm border border-orange-500/20">
                    <Globe className="h-8 w-8 sm:h-10 sm:w-10 text-orange-400" />
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Text content below */}
            <div className="mt-10 sm:mt-14 max-w-2xl">
              <TextReveal
                tag="h2"
                text="Connected Across Continents"
                className="text-3xl font-bold sm:text-4xl lg:text-5xl"
                delay={0.2}
              />
              <ScrollReveal delay={0.3}>
                <p className="mt-5 text-gray-400 leading-relaxed">
                  Our network spans 42 African countries and extends to
                  major global trade hubs. Real-time route optimization,
                  predictive ETAs, and seamless handoffs ensure your
                  cargo moves with precision.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.5}>
                <Link
                  href="/#services"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-orange-600"
                >
                  Explore Routes
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── How it Works ────────────────────────────── */}
      <section id="how-it-works" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <ScrollReveal>
              <span className="text-sm font-semibold uppercase tracking-widest text-orange-500">
                How It Works
              </span>
            </ScrollReveal>
            <TextReveal
              tag="h2"
              text="Simple Steps, Seamless Delivery"
              className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl"
              delay={0.2}
            />
          </div>

          <div className="mt-10 grid gap-10 sm:mt-16 sm:gap-8 md:grid-cols-4 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-orange-200 via-orange-400 to-orange-200" />

            {[
              {
                step: "01",
                title: "Get in Touch",
                desc: "Tell us about your shipment — origin, destination, size, and timeline.",
              },
              {
                step: "02",
                title: "We Collect",
                desc: "Our team picks up your package from your doorstep or warehouse.",
              },
              {
                step: "03",
                title: "Track in Real-Time",
                desc: "Monitor your shipment live with GPS tracking and notifications.",
              },
              {
                step: "04",
                title: "Delivered",
                desc: "Safe, on-time delivery with proof of delivery and photo confirmation.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 0.15}>
                <div className="relative flex flex-col items-center text-center">
                  <div className="flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-orange-500 text-white text-xl sm:text-2xl font-bold shadow-lg shadow-orange-500/20 relative z-10">
                    {item.step}
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Air Freight CTA with plane parallax ─────── */}
      <section className="relative py-20 sm:py-32 overflow-hidden bg-gradient-to-br from-[#0a0f1e] via-[#0f172a] to-[#1a1040]">
        <Parallax speed={0.3}>
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,#f97316_0%,transparent_70%)]" />
        </Parallax>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-orange-400">
              Air Freight
            </span>
          </ScrollReveal>
          <TextReveal
            tag="h2"
            text="Your Cargo Takes Flight"
            className="mt-3 text-2xl font-bold text-white sm:text-3xl lg:text-5xl"
            delay={0.2}
          />
          <ScrollReveal delay={0.4}>
            <p className="mt-4 text-base text-gray-400 max-w-2xl mx-auto sm:mt-6 sm:text-lg">
              Our dedicated air freight network connects Africa&apos;s major
              hubs to the rest of the world. Fast, secure, and reliable cargo
              transport for time-sensitive shipments.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.6}>
            <Link
              href="/#services"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange-500 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/30"
            >
              Learn About Air Freight
              <Plane className="h-4 w-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Partners ────────────────────────────────── */}
      <section className="py-12 border-y border-gray-100 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-center text-sm font-medium uppercase tracking-widest text-gray-400">
              Trusted Partners
            </p>
          </ScrollReveal>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:mt-10 sm:gap-x-16 sm:gap-y-8">
            {partners.map((name, i) => (
              <ScrollReveal key={name} delay={i * 0.1}>
                <span className="text-xl font-bold text-gray-300 transition-colors hover:text-gray-500">
                  {name}
                </span>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────── */}
      <section id="contact" className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <TextReveal
            tag="h2"
            text="Ready to Ship? Let’s Talk."
            className="text-2xl font-bold sm:text-3xl lg:text-5xl"
          />
          <ScrollReveal delay={0.3}>
            <p className="mt-6 text-lg text-orange-100 max-w-2xl mx-auto">
              Get a customised logistics solution that saves you time and money.
              Our team is ready to help you move your business forward.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.5}>
            <div className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:mt-10 sm:gap-4">
              <Magnetic>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-orange-600 transition-all hover:bg-gray-100 hover:shadow-xl sm:px-8 sm:py-4"
                >
                  Get in Touch
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Magnetic>
              <Magnetic>
                <a
                  href="tel:+27719108037"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10 sm:px-8 sm:py-4"
                >
                  <Shield className="h-4 w-4" />
                  Call +27 71 910 8037
                </a>
              </Magnetic>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

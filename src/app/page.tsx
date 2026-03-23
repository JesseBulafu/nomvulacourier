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
  Star,
  CheckCircle,
  ChevronRight,
  Play,
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

import LazyGlobe from "@/components/LazyGlobe";

/* ─── Data ─────────────────────────────────────────── */

const stats = [
  { value: 15000, suffix: "+", label: "Deliveries Monthly" },
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
];

const features = [
  "Real-time GPS tracking on every shipment",
  "Dedicated account manager for business clients",
  "Insurance coverage up to R5 million per shipment",
  "Temperature-controlled transport for sensitive goods",
  "Customs brokerage and trade compliance",
  "Eco-friendly fleet with carbon offset program",
];

const testimonials = [
  {
    name: "Thabo Mokoena",
    role: "CEO, TechFlow Solutions",
    text: "Nomvula Courier transformed our supply chain. Their express delivery service cut our transit times by 40%. An absolute game-changer for our business.",
    rating: 5,
  },
  {
    name: "Sarah van der Merwe",
    role: "Operations Director, FreshHarvest",
    text: "The temperature-controlled fleet is impeccable. Our perishable goods arrive in perfect condition every single time. Best logistics partner we've had.",
    rating: 5,
  },
  {
    name: "Kwame Asante",
    role: "Founder, Pan-African Traders",
    text: "Their international shipping expertise across Africa is unmatched. Customs clearance that used to take weeks now takes days. Outstanding service.",
    rating: 5,
  },
];

const partners = [
  "DHL",
  "FedEx",
  "Maersk",
  "SAA Cargo",
  "Transnet",
  "Imperial Logistics",
];

/* ─── Page ─────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────── */}
      <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden">
        <HeroBackground />

        {/* 3D Plane — centered right below navbar */}
        <div className="relative z-[5] w-full h-[50vh] sm:h-[55vh] lg:h-[60vh] mt-20">
          <PlaneModel className="w-full h-full" />
        </div>

        {/* Text content below the plane */}
        <div className="relative z-10 mx-auto max-w-4xl px-6 pb-32 text-center lg:px-8">
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
              From Kempton Park to the world — Nomvula Courier provides
              premium freight and logistics services built on speed,
              reliability, and African excellence.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Magnetic>
                <Link
                  href="/contact"
                  className="w-full sm:inline-flex sm:w-auto items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/30 text-center"
                >
                  Get a Free Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Magnetic>
              <Magnetic>
                <Link
                  href="/tracking"
                  className="w-full sm:inline-flex sm:w-auto items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 text-center"
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
                <div className="flex flex-col items-center justify-center py-8 px-4 text-center">
                  <div className="text-3xl font-bold text-gray-900 lg:text-4xl">
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
      <section id="services" className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
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

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((svc, i) => (
              <ScrollReveal key={svc.title} delay={i * 0.1}>
                <div className="group relative rounded-2xl border border-gray-100 bg-white p-8 transition-all duration-300 hover:shadow-xl hover:shadow-gray-100 hover:-translate-y-1">
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
                    href="/services"
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
      <section id="about" className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Video placeholder — swap with your video later */}
            <ScrollReveal direction="left">
              <div className="video-placeholder aspect-video w-full flex items-center justify-center">
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <button
                    className="flex h-20 w-20 items-center justify-center rounded-full bg-orange-500 text-white transition-transform hover:scale-110 shadow-xl shadow-orange-500/30"
                    aria-label="Play video"
                  >
                    <Play className="h-8 w-8 ml-1" />
                  </button>
                  <span className="text-sm text-gray-400">
                    Watch Our Story
                  </span>
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
                  Park, Nomvula Courier has been connecting businesses across the
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

      {/* ── Globe Section placeholder ───────────────── */}
      <section id="network" className="py-24 bg-[#0f172a] text-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <ScrollReveal>
                <span className="text-sm font-semibold uppercase tracking-widest text-orange-400">
                  Global Network
                </span>
              </ScrollReveal>
              <TextReveal
                tag="h2"
                text="Connected Across Continents"
                className="mt-3 text-3xl font-bold sm:text-4xl"
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
                  href="/services"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-orange-600"
                >
                  Explore Routes
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </ScrollReveal>
            </div>

            {/* 3D Globe */}
            <ScrollReveal direction="right">
              <div className="aspect-square w-full max-w-lg mx-auto">
                  <LazyGlobe className="w-full h-full" />
                </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── How it Works ────────────────────────────── */}
      <section id="how-it-works" className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
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

          <div className="mt-16 grid gap-8 md:grid-cols-4 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-orange-200 via-orange-400 to-orange-200" />

            {[
              {
                step: "01",
                title: "Request a Quote",
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
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-orange-500 text-white text-2xl font-bold shadow-lg shadow-orange-500/20 relative z-10">
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
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-[#0a0f1e] via-[#0f172a] to-[#1a1040]">
        <Parallax speed={0.3}>
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,#f97316_0%,transparent_70%)]" />
        </Parallax>
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
          <ScrollReveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-orange-400">
              Air Freight
            </span>
          </ScrollReveal>
          <TextReveal
            tag="h2"
            text="Your Cargo Takes Flight"
            className="mt-3 text-3xl font-bold text-white sm:text-5xl"
            delay={0.2}
          />
          <ScrollReveal delay={0.4}>
            <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
              Our dedicated air freight network connects Africa&apos;s major
              hubs to the rest of the world. Fast, secure, and reliable cargo
              transport for time-sensitive shipments.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.6}>
            <Link
              href="/services"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange-500 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/30"
            >
              Learn About Air Freight
              <Plane className="h-4 w-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Testimonials ────────────────────────────── */}
      <section id="testimonials" className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <ScrollReveal>
              <span className="text-sm font-semibold uppercase tracking-widest text-orange-500">
                Testimonials
              </span>
            </ScrollReveal>
            <TextReveal
              tag="h2"
              text="Trusted by Industry Leaders"
              className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl"
              delay={0.2}
            />
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.15}>
                <div className="rounded-2xl bg-white p-8 shadow-sm border border-gray-100 transition-shadow hover:shadow-lg">
                  <div className="flex gap-1">
                    {Array.from({ length: t.rating }).map((_, s) => (
                      <Star
                        key={s}
                        className="h-5 w-5 fill-orange-400 text-orange-400"
                      />
                    ))}
                  </div>
                  <p className="mt-4 text-gray-600 leading-relaxed italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-sm">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        {t.name}
                      </p>
                      <p className="text-xs text-gray-500">{t.role}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Partners ────────────────────────────────── */}
      <section className="py-16 border-y border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-center text-sm font-medium uppercase tracking-widest text-gray-400">
              Trusted Partners
            </p>
          </ScrollReveal>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
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
      <section id="contact" className="py-24 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <TextReveal
            tag="h2"
            text="Ready to Ship? Let's Talk."
            className="text-3xl font-bold sm:text-5xl"
          />
          <ScrollReveal delay={0.3}>
            <p className="mt-6 text-lg text-orange-100 max-w-2xl mx-auto">
              Get a customised logistics solution that saves you time and money.
              Our team is ready to help you move your business forward.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.5}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Magnetic>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-orange-600 transition-all hover:bg-gray-100 hover:shadow-xl"
                >
                  Get a Free Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Magnetic>
              <Magnetic>
                <a
                  href="tel:+27719108037"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-white/10"
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

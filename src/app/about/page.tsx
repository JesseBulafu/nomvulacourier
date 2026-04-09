"use client";

import Link from "next/link";
import {
  Plane,
  Ship,
  Truck,
  Train,
  Package,
  Globe,
  Users,
  Target,
  Heart,
  ArrowRight,
  Shield,
  Clock,
  MapPin,
  Award,
  PawPrint,
} from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import TextReveal from "@/components/animations/TextReveal";
import Counter from "@/components/animations/Counter";

/* ─── Data ─────────────────────────────────────────── */

const timeline = [
  { year: "2010", title: "Founded in Kempton Park", desc: "Started by Kena Violet and Kgaogelo Sambo Loire with a bold vision to connect Africa." },
  { year: "2014", title: "Expanded to 5 Countries", desc: "Opened hubs in Botswana, Namibia, Mozambique, and Zimbabwe." },
  { year: "2017", title: "Launched Air Freight", desc: "Partnered with SAA Cargo and Ethiopian Airlines for time-critical shipments." },
  { year: "2020", title: "Sea Freight Division", desc: "Added ocean freight with full-container and groupage services." },
  { year: "2023", title: "42 Countries & Counting", desc: "Pan-African network with global reach through strategic partnerships." },
];

const values = [
  { Icon: Shield, title: "Reliability", desc: "99% on-time delivery rate — your cargo is in safe hands." },
  { Icon: Heart, title: "Ubuntu", desc: "We believe in community. Our success is your success." },
  { Icon: Target, title: "Precision", desc: "Every shipment tracked, every route optimised, every detail covered." },
  { Icon: Globe, title: "Pan-African Vision", desc: "Built for the continent, ready for the world." },
];

const team = [
  { name: "Kena Violet", role: "Co-Founder & Director", initials: "KV" },
  { name: "Kgaogelo Sambo Loire", role: "Co-Founder & Director", initials: "KL" },
  { name: "Kaija Patrick Jonathan", role: "International Sales Representative", initials: "KJ" },
  { name: "Promise Emmanuel Okereafor", role: "Operational/Cargo Drawer", initials: "PO" },
];

/* ─── Page ─────────────────────────────────────────── */

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-[#0a0f1e] via-[#0f172a] to-[#1a1040] pt-32 pb-20 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full bg-orange-500/[0.05] blur-[120px]" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center lg:px-8">
          <ScrollReveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-orange-400">
              About Nomvula Courier & Procurement
            </span>
          </ScrollReveal>
          <TextReveal
            tag="h1"
            text="Delivering Africa's Future, One Shipment at a Time"
            className="mt-3 text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-[1.1]"
            delay={0.2}
          />
          <ScrollReveal delay={0.5}>
            <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
              From a small courier service in Johannesburg to Africa&apos;s most
              trusted logistics company — this is our story.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Bento Grid — Transport Modes ────────────── */}
      <section id="how-we-deliver" className="py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <ScrollReveal>
              <span className="text-sm font-semibold uppercase tracking-widest text-orange-500">
                How We Deliver
              </span>
            </ScrollReveal>
            <TextReveal
              tag="h2"
              text="Multi-Modal Logistics Network"
              className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl"
              delay={0.2}
            />
            <ScrollReveal delay={0.3}>
              <p className="mt-4 text-lg text-gray-600">
                We move your cargo via air, sea, road, and rail — choosing the
                best route for speed, cost, and reliability.
              </p>
            </ScrollReveal>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 auto-rows-auto md:auto-rows-[180px]">
            {/* ── Air Freight — large hero card (spans 8 cols, 2 rows) */}
            <ScrollReveal className="md:col-span-6 lg:col-span-8 row-span-2">
              <div className="group relative h-full w-full rounded-3xl bg-gradient-to-br from-blue-600 to-blue-800 p-6 sm:p-8 overflow-hidden transition-transform duration-300 hover:scale-[1.01]">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.05) 35px, rgba(255,255,255,0.05) 70px)`,
                    }}
                  />
                </div>
                {/* Floating plane icon */}
                <div className="absolute top-6 right-6 opacity-[0.15] group-hover:opacity-[0.25] transition-opacity">
                  <Plane className="h-24 w-24 sm:h-40 sm:w-40 text-white" />
                </div>
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div>
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                      <Plane className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="mt-5 text-2xl font-bold text-white lg:text-3xl">
                      Air Freight
                    </h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-blue-100">
                      Time-critical shipments via our airline partnerships with
                      SAA Cargo, Ethiopian Airlines, and Kenya Airways. From
                      documents to heavy cargo — delivered in hours, not days.
                    </p>
                  </div>
                  <div className="flex items-center gap-6 text-sm text-blue-200">
                    <span className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      24hr delivery
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      120+ destinations
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* ── Quick stats card (spans 4 cols, 1 row) */}
            <ScrollReveal delay={0.1} className="md:col-span-3 lg:col-span-4">
              <div className="h-full rounded-3xl bg-gradient-to-br from-orange-500 to-orange-600 p-6 flex flex-col justify-center text-center text-white">
                <div className="text-3xl sm:text-4xl font-bold">
                  <Counter end={2500} suffix="+" />
                </div>
                <p className="mt-1 text-sm text-orange-100">
                  Deliveries per month across Africa
                </p>
              </div>
            </ScrollReveal>

            {/* ── Warehousing small card (spans 4 cols, 1 row) */}
            <ScrollReveal delay={0.15} className="md:col-span-3 lg:col-span-4">
              <div className="group h-full rounded-3xl bg-gradient-to-br from-purple-600 to-purple-800 p-6 overflow-hidden relative transition-transform duration-300 hover:scale-[1.01]">
                <div className="absolute bottom-3 right-3 opacity-[0.12] group-hover:opacity-[0.2] transition-opacity">
                  <Package className="h-24 w-24 text-white" />
                </div>
                <div className="relative z-10">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm">
                    <Package className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-white">
                    Warehousing
                  </h3>
                  <p className="mt-1 text-xs text-purple-200 leading-relaxed">
                    50,000 m² across 8 strategic hubs with climate-controlled storage.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* ── Sea Freight — medium card (spans 6 cols, 2 rows) */}
            <ScrollReveal delay={0.1} className="md:col-span-3 lg:col-span-6 row-span-2">
              <div className="group relative h-full w-full rounded-3xl bg-gradient-to-br from-cyan-600 to-teal-800 p-6 sm:p-8 overflow-hidden transition-transform duration-300 hover:scale-[1.01]">
                <div className="absolute inset-0 opacity-10">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 25px, rgba(255,255,255,0.04) 25px, rgba(255,255,255,0.04) 50px)`,
                    }}
                  />
                </div>
                <div className="absolute bottom-4 right-4 opacity-[0.12] group-hover:opacity-[0.2] transition-opacity">
                  <Ship className="h-20 w-20 sm:h-32 sm:w-32 text-white" />
                </div>
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div>
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                      <Ship className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="mt-5 text-2xl font-bold text-white">
                      Sea Freight
                    </h3>
                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-cyan-100">
                      Full container loads (FCL) and less-than-container (LCL)
                      shipping through Africa&apos;s major ports — Durban, Cape
                      Town, Mombasa, Lagos, and Dar es Salaam.
                    </p>
                  </div>
                  <div className="flex items-center gap-6 text-sm text-cyan-200">
                    <span className="flex items-center gap-2">
                      <Globe className="h-4 w-4" />
                      5 major ports
                    </span>
                    <span className="flex items-center gap-2">
                      <Package className="h-4 w-4" />
                      FCL & LCL
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* ── Road Freight — medium card (spans 6 cols, 2 rows) */}
            <ScrollReveal delay={0.2} className="md:col-span-3 lg:col-span-6 row-span-2">
              <div className="group relative h-full w-full rounded-3xl bg-gradient-to-br from-emerald-600 to-emerald-800 p-6 sm:p-8 overflow-hidden transition-transform duration-300 hover:scale-[1.01]">
                <div className="absolute inset-0 opacity-10">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `repeating-linear-gradient(135deg, transparent, transparent 30px, rgba(255,255,255,0.04) 30px, rgba(255,255,255,0.04) 60px)`,
                    }}
                  />
                </div>
                <div className="absolute bottom-4 right-4 opacity-[0.12] group-hover:opacity-[0.2] transition-opacity">
                  <Truck className="h-20 w-20 sm:h-32 sm:w-32 text-white" />
                </div>
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div>
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                      <Truck className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="mt-5 text-2xl font-bold text-white">
                      Road Freight
                    </h3>
                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-emerald-100">
                      Fleet of 30+ vehicles from same-day couriers to 8-ton
                      trucks. Cross-border road freight connecting Southern
                      Africa&apos;s trade corridors with GPS-tracked,
                      temperature-controlled options.
                    </p>
                  </div>
                  <div className="flex items-center gap-6 text-sm text-emerald-200">
                    <span className="flex items-center gap-2">
                      <Truck className="h-4 w-4" />
                      30+ vehicles
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      15 countries
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* ── Rail Freight — small card (spans 4 cols, 1 row) */}
            <ScrollReveal delay={0.25} className="md:col-span-3 lg:col-span-4">
              <div className="group h-full rounded-3xl bg-gradient-to-br from-amber-500 to-amber-700 p-6 overflow-hidden relative transition-transform duration-300 hover:scale-[1.01]">
                <div className="absolute bottom-3 right-3 opacity-[0.12] group-hover:opacity-[0.2] transition-opacity">
                  <Train className="h-24 w-24 text-white" />
                </div>
                <div className="relative z-10">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm">
                    <Train className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-white">
                    Rail Freight
                  </h3>
                  <p className="mt-1 text-xs text-amber-100 leading-relaxed">
                    Bulk cargo via Transnet partnerships. Mine-to-port and
                    cross-border rail solutions.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* ── Human Remains Repatriation — small card (spans 4 cols, 1 row) */}
            <ScrollReveal delay={0.3} className="md:col-span-3 lg:col-span-4">
              <div className="group h-full rounded-3xl bg-gradient-to-br from-rose-500 to-rose-700 p-6 overflow-hidden relative transition-transform duration-300 hover:scale-[1.01]">
                <div className="absolute bottom-3 right-3 opacity-[0.12] group-hover:opacity-[0.2] transition-opacity">
                  <Heart className="h-24 w-24 text-white" />
                </div>
                <div className="relative z-10">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm">
                    <Heart className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-white">
                    Remains Repatriation
                  </h3>
                  <p className="mt-1 text-xs text-rose-100 leading-relaxed">
                    Compassionate transport of human remains worldwide with full documentation and customs handling.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* ── On-time stat card (spans 4 cols, 1 row) */}
            <ScrollReveal delay={0.35} className="md:col-span-6 lg:col-span-4">
              <div className="h-full rounded-3xl bg-gray-900 p-6 flex flex-col justify-center text-center text-white">
                <div className="text-3xl sm:text-4xl font-bold">
                  <Counter end={99} suffix="%" />
                </div>
                <p className="mt-1 text-sm text-gray-400">
                  On-time delivery rate
                </p>
              </div>
            </ScrollReveal>

            {/* ── Animal Logistics — large feature card (spans 12 cols, 2 rows) */}
            <ScrollReveal delay={0.4} className="md:col-span-6 lg:col-span-12 row-span-2">
              <div className="group relative h-full w-full rounded-3xl bg-gradient-to-br from-amber-500 to-amber-700 p-6 sm:p-8 overflow-hidden transition-transform duration-300 hover:scale-[1.01]">
                <div className="absolute inset-0 opacity-10">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `repeating-linear-gradient(60deg, transparent, transparent 30px, rgba(255,255,255,0.05) 30px, rgba(255,255,255,0.05) 60px)`,
                    }}
                  />
                </div>
                <div className="absolute top-6 right-6 opacity-[0.15] group-hover:opacity-[0.25] transition-opacity">
                  <PawPrint className="h-24 w-24 sm:h-40 sm:w-40 text-white" />
                </div>
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div>
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                      <PawPrint className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="mt-5 text-2xl font-bold text-white lg:text-3xl">
                      Animal Logistics
                    </h3>
                    <p className="mt-3 max-w-xl sm:max-w-3xl text-sm leading-relaxed text-amber-100">
                      We are experts in animal logistics with meticulous care for every pet and animal
                      we transport. Our specialists handle safe, stress-free transportation across
                      international borders where regulations vary significantly between countries.
                      We provide comprehensive services including worldwide air freight for live
                      animals, full customs clearance, expert advice on import/export regulations
                      for each destination, IATA-compliant transport containers, and fully customised
                      enclosures for large or exotic animals.
                    </p>
                  </div>
                  <div className="mt-4 flex flex-wrap items-center gap-6 text-sm text-amber-200">
                    <span className="flex items-center gap-2">
                      <Plane className="h-4 w-4" />
                      Worldwide air freight
                    </span>
                    <span className="flex items-center gap-2">
                      <Shield className="h-4 w-4" />
                      Customs clearance
                    </span>
                    <span className="flex items-center gap-2">
                      <Globe className="h-4 w-4" />
                      Import/export guidance
                    </span>
                    <span className="flex items-center gap-2">
                      <Package className="h-4 w-4" />
                      Custom containers
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Our Story Timeline ──────────────────────── */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <ScrollReveal>
              <span className="text-sm font-semibold uppercase tracking-widest text-orange-500">
                Our Journey
              </span>
            </ScrollReveal>
            <TextReveal
              tag="h2"
              text="From Kempton Park to the World"
              className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl"
              delay={0.2}
            />
          </div>

          <div className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-orange-300 via-orange-400 to-orange-300 hidden lg:block" />

            <div className="space-y-12 lg:space-y-0">
              {timeline.map((item, i) => (
                <ScrollReveal
                  key={item.year}
                  delay={i * 0.1}
                  direction={i % 2 === 0 ? "left" : "right"}
                >
                  <div
                    className={`relative lg:flex lg:items-center ${
                      i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    } lg:py-8`}
                  >
                    {/* Content */}
                    <div
                      className={`lg:w-1/2 ${
                        i % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:pl-16"
                      }`}
                    >
                      <span className="text-sm font-bold text-orange-500">
                        {item.year}
                      </span>
                      <h3 className="mt-1 text-lg font-semibold text-gray-900">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-600">{item.desc}</p>
                    </div>

                    {/* Dot */}
                    <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 h-4 w-4 items-center justify-center">
                      <div className="h-4 w-4 rounded-full border-4 border-orange-400 bg-white" />
                    </div>

                    {/* Spacer */}
                    <div className="hidden lg:block lg:w-1/2" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Values ──────────────────────────────── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <ScrollReveal>
              <span className="text-sm font-semibold uppercase tracking-widest text-orange-500">
                Our Values
              </span>
            </ScrollReveal>
            <TextReveal
              tag="h2"
              text="What Drives Us Forward"
              className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl"
              delay={0.2}
            />
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((val, i) => (
              <ScrollReveal key={val.title} delay={i * 0.1}>
                <div className="group text-center p-6 rounded-2xl border border-gray-100 bg-white transition-all hover:shadow-lg hover:-translate-y-1">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-orange-500/10 transition-transform group-hover:scale-110">
                    <val.Icon className="h-7 w-7 text-orange-500" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">
                    {val.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">{val.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      {/* ── SARS Customs Accreditation ───────────── */}
      <section className="relative py-16 sm:py-24 bg-gray-50 overflow-hidden">
        {/* Animated waves */}
        <div className="absolute inset-0 -z-0 pointer-events-none overflow-hidden">
          <svg
            className="absolute bottom-0 left-0 w-[200%] h-[35%] animate-[wave_14s_ease-in-out_infinite]"
            viewBox="0 0 2880 320"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path
              d="M0,200 C360,140 720,260 1080,200 C1440,140 1800,260 2160,200 C2520,140 2880,260 2880,200 L2880,320 L0,320 Z"
              fill="rgba(249,115,22,0.06)"
            />
          </svg>
          <svg
            className="absolute bottom-0 left-0 w-[200%] h-[25%] animate-[wave_18s_ease-in-out_infinite_reverse]"
            viewBox="0 0 2880 320"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path
              d="M0,240 C480,180 960,300 1440,240 C1920,180 2400,300 2880,240 L2880,320 L0,320 Z"
              fill="rgba(251,191,36,0.05)"
            />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <ScrollReveal>
              <span className="text-sm font-semibold uppercase tracking-widest text-orange-500">
                Accreditation
              </span>
            </ScrollReveal>
            <TextReveal
              tag="h2"
              text="SARS Accredited Customs Agent"
              className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl"
              delay={0.2}
            />
            <ScrollReveal delay={0.3}>
              <p className="mt-4 text-lg text-gray-600">
                Nomvula Courier & Procurement is a fully accredited SARS customs clearance agent,
                ensuring compliant, efficient, and hassle-free import and export
                processing for all your shipments.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Shield, title: "Licensed Agent", desc: "Registered and licensed by SARS for customs brokerage across all South African ports of entry." },
              { icon: Award, title: "Full Compliance", desc: "We maintain strict adherence to all SARS regulations, tariff classifications, and trade agreements." },
              { icon: Globe, title: "Import & Export", desc: "End-to-end customs clearance for both imports and exports, including documentation and duty calculations." },
              { icon: Clock, title: "Fast Processing", desc: "Our accredited status means priority processing and faster clearance times at all border posts." },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="group text-center p-6 rounded-2xl border border-gray-100 bg-white transition-all hover:shadow-lg hover:-translate-y-1">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-orange-500/10 transition-transform group-hover:scale-110">
                    <item.icon className="h-7 w-7 text-orange-500" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      {/* ── Leadership Team ─────────────────────────── */}
      <section id="team" className="relative py-16 sm:py-24 bg-white overflow-hidden">
        {/* Animated waves */}
        <div className="absolute inset-0 -z-0 pointer-events-none overflow-hidden">
          <svg
            className="absolute top-0 left-0 w-[200%] h-[30%] animate-[wave_16s_ease-in-out_infinite]"
            viewBox="0 0 2880 320"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path
              d="M0,120 C360,60 720,180 1080,120 C1440,60 1800,180 2160,120 C2520,60 2880,180 2880,120 L2880,0 L0,0 Z"
              fill="rgba(255,237,213,0.6)"
            />
          </svg>
          <svg
            className="absolute bottom-0 left-0 w-[200%] h-[30%] animate-[wave_20s_ease-in-out_infinite_reverse]"
            viewBox="0 0 2880 320"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path
              d="M0,200 C480,140 960,260 1440,200 C1920,140 2400,260 2880,200 L2880,320 L0,320 Z"
              fill="rgba(254,215,170,0.3)"
            />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <ScrollReveal>
              <span className="text-sm font-semibold uppercase tracking-widest text-orange-500">
                Leadership
              </span>
            </ScrollReveal>
            <TextReveal
              tag="h2"
              text="The Team Behind the Movement"
              className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl"
              delay={0.2}
            />
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.1}>
                <div className="group flex flex-col items-center rounded-2xl bg-white p-6 sm:p-8 text-center shadow-sm border border-gray-100 transition-all hover:shadow-lg">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-white text-2xl font-bold transition-transform group-hover:scale-110">
                    {member.initials}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{member.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats Band ──────────────────────────────── */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4 text-center">
            {[
              { end: 42, suffix: "", label: "African Countries" },
              { end: 30, suffix: "+", label: "Vehicles in Fleet" },
              { end: 50, suffix: "+", label: "Team Members" },
              { end: 16, suffix: " yrs", label: "In Business" },
            ].map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold lg:text-4xl">
                    <Counter end={stat.end} suffix={stat.suffix} />
                  </div>
                  <p className="mt-1 text-sm text-orange-100">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center lg:px-8">
          <TextReveal
            tag="h2"
            text="Ready to Partner with Us?"
            className="text-3xl font-bold text-gray-900 sm:text-4xl"
          />
          <ScrollReveal delay={0.3}>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
              Join thousands of businesses across Africa who trust Nomvula
              Courier for their logistics needs.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.5}>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3.5 sm:px-8 sm:py-4 text-sm font-semibold text-white transition-all hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/25"
              >
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/#services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 px-6 py-3.5 sm:px-8 sm:py-4 text-sm font-semibold text-gray-700 transition-all hover:border-gray-300 hover:bg-gray-50"
              >
                View Our Services
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import {
  Truck,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const footerLinks = {
  services: [
    { label: "Express Delivery", href: "/services#express" },
    { label: "Freight Shipping", href: "/services#freight" },
    { label: "Warehousing", href: "/services#warehousing" },
    { label: "Last Mile Delivery", href: "/services#lastmile" },
    { label: "International Shipping", href: "/services#international" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/about#team" },
    { label: "Careers", href: "/about#careers" },
    { label: "News & Updates", href: "/about#news" },
  ],
  support: [
    { label: "Track Shipment", href: "/tracking" },
    { label: "Contact Us", href: "/contact" },
    { label: "FAQ", href: "/contact#faq" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
};

const socials = [
  { Icon: Facebook, href: "#", label: "Facebook" },
  { Icon: Twitter, href: "#", label: "Twitter" },
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
  { Icon: Instagram, href: "#", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500">
                <Truck className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white leading-tight">
                  Nomvula
                </span>
                <span className="text-xs font-medium uppercase tracking-widest text-orange-400">
                  Courier
                </span>
              </div>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-gray-400">
              Delivering excellence across Africa and beyond. Your trusted
              partner in freight, logistics, and courier services based in
              Kempton Park, Gauteng.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-orange-400 shrink-0 mt-1" />
                <address className="not-italic">
                  <div>Nomvula Courier & Procurement</div>
                  <div>70G, Commissioner Street</div>
                  <div>Kempton Park</div>
                  <div>Johannesburg</div>
                  <div>South Africa</div>
                  <div>1619</div>
                </address>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-orange-400 shrink-0" />
                <span>Kena: +27 71 910 8037</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-orange-400 shrink-0" />
                <span>Kgaogelo: +27 63 310 9127</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-orange-400 shrink-0" />
                <span>info@nomvulacourier.co.za</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-orange-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-orange-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Support
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-orange-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 md:flex-row">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Nomvula Courier. All rights
            reserved.
          </p>
          <div className="flex gap-4">
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-all hover:bg-orange-500 hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

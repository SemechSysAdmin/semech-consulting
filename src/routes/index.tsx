import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Clapperboard,
  Cpu,
  Database,
  Fuel,
  GraduationCap,
  LineChart,
  MapPinned,
  Settings2,
  ShieldCheck,
  Target,
  Calendar,
} from "lucide-react";
import heroImg from "@/assets/hero-skyscraper.jpg";
import aboutImg from "@/assets/about-leadership.jpg";
import { CtaSection } from "@/components/site/CtaSection";
import { buildHead, absoluteUrl } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    buildHead({
      title: "Semech Consult Strategy, Technology & Energy Advisory",
      description:
        "Premium consulting firm in Ghana and Nigeria. Strategy, digital transformation, energy advisory, GIS intelligence and data solutions for the modern enterprise.",
      ogTitle: "Semech Consult Strategy & Technology Advisory",
      ogDescription:
        "Driving business growth through strategic consulting and innovation across West Africa.",
      path: "/",
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Semech Consult",
        url: absoluteUrl("/"),
        logo: absoluteUrl("/logo.jpg"),
        description: "Premium consulting firm in Ghana and Nigeria...",
      },
    }),
  component: HomePage,
});

const services = [
  {
    n: "01",
    icon: Target,
    title: "Strategy & Transformation",
    desc: "Long-horizon corporate strategy and operating-model redesign for boards navigating market shifts.",
  },
  {
    n: "02",
    icon: Cpu,
    title: "Digital Transformation",
    desc: "Modernise legacy estates with cloud, AI and integrated platforms tuned for measurable ROI.",
  },
  {
    n: "03",
    icon: Fuel,
    title: "Energy & Oil & Gas Advisory",
    desc: "Technical and commercial advisory across upstream, midstream and renewable transition portfolios.",
  },
  {
    n: "04",
    icon: MapPinned,
    title: "GIS & Intelligence",
    desc: "Geospatial intelligence that converts spatial data into infrastructure, security and asset decisions.",
  },
  {
    n: "05",
    icon: Database,
    title: "Data & Analytics",
    desc: "Data architecture, governance and analytics products that surface decision-grade insight at scale.",
  },
  {
    n: "06",
    icon: Briefcase,
    title: "Project Management",
    desc: "Disciplined PMO frameworks delivering capital programmes on time, on budget, and on intent.",
  },
  {
    n: "07",
    icon: Settings2,
    title: "Engineering Advisory",
    desc: "Independent technical assurance, due diligence and engineering review for complex assets.",
  },
  {
    n: "08",
    icon: LineChart,
    title: "Operations Improvement",
    desc: "Process redesign, lean execution and performance management to lift bottom-line efficiency.",
  },
  {
    n: "09",
    icon: GraduationCap,
    title: "Training & Capacity",
    desc: "Executive learning programmes that build internal capability and sustain transformation.",
  },
  {
    n: "10",
    icon: Clapperboard,
    title: "Media",
    desc: "Media strategy, content operations and digital monetisation for publishers and platforms.",
  },
];

const industries = [
  "Energy & Oil & Gas",
  "Government & Public Sector",
  "Financial Services",
  "Construction & Infrastructure",
  "Telecommunications",
  "Manufacturing",
  "Real Estate",
  "Education",
  "Agriculture",
];

const testimonials = [
  {
    quote:
      "Semech reframed our digital roadmap and delivered a 30% lift in field productivity within two quarters.",
    name: "Adebayo Okonkwo",
    role: "COO, Energy Operator, Lagos",
  },
  {
    quote:
      "An advisory team that pairs technical rigour with genuine commercial instinct. Truly executive-grade.",
    name: "Ama Boateng",
    role: "CFO, Infrastructure Group, Accra",
  },
  {
    quote:
      "Their geospatial intelligence work is a category leader across the West African market.",
    name: "Ibrahim Sule",
    role: "Director, Public Infrastructure Authority",
  },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy text-paper">
        <img
          src={heroImg}
          alt="Modern corporate skyscrapers at dusk"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
          width={1280}
          height={1600}
        />
        <div className="absolute inset-0 bg-linear-to-r from-navy via-navy/90 to-navy/40" />
        <div className="container-x relative pt-24 pb-32 lg:pt-32 lg:pb-40">
          <div className="max-w-3xl animate-fade-up">
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="h-px w-8 bg-gold" />
              <span className="text-gold text-[11px] font-semibold tracking-[0.3em] uppercase">
                Strategy · Technology · Energy
              </span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight text-balance">
              Driving Business Growth Through Strategic{" "}
              <span className="italic text-gold">Consulting</span> & Innovation
            </h1>
            <p className="mt-7 text-lg md:text-xl text-paper/70 max-w-2xl text-pretty leading-relaxed">
              We help organizations across Ghana and Nigeria solve complex challenges, improve
              operations, and unlock sustainable growth through expert advisory and
              technology-driven solutions.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gold text-paper py-3 pr-5 pl-4 rounded-sm text-sm font-medium ring-1 ring-gold hover:bg-gold-soft hover:text-navy transition-all"
              >
                <Calendar className="size-4" /> Schedule Consultation
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 border border-paper/20 text-paper py-3 px-5 rounded-sm text-sm font-medium hover:bg-paper/5 transition-colors"
              >
                Explore Services
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-paper/80 py-3 px-2 text-sm font-medium hover:text-gold transition-colors"
              >
                Speak With Our Team <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b border-line bg-stone">
        <div className="container-x py-10">
          <p className="text-center text-[11px] font-semibold text-charcoal/50 uppercase tracking-[0.25em] mb-6">
            Trusted by leading enterprises across West Africa
          </p>
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-70">
            {["GlobalEnergy", "NIGER-TECH", "CivicArch", "GHANA-RE", "ApexBank", "Sahel Group"].map(
              (b) => (
                <span key={b} className="font-serif italic text-xl text-navy/60">
                  {b}
                </span>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="bg-paper">
        <div className="container-x py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
          {[
            ["150+", "Engagements Delivered"],
            ["12", "Industry Sectors"],
            ["$500M+", "Capital Advised"],
            ["98%", "Client Retention"],
          ].map(([k, v]) => (
            <div key={v} className="border-l border-gold pl-5">
              <div className="text-3xl md:text-4xl font-serif text-navy">{k}</div>
              <div className="mt-2 text-[11px] uppercase tracking-widest text-charcoal/60">{v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-stone py-24">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-8">
            <div className="max-w-2xl">
              <span className="eyebrow">Our Capabilities</span>
              <h2 className="mt-4 text-3xl md:text-5xl font-serif text-navy text-balance">
                Comprehensive solutions for the modern enterprise.
              </h2>
            </div>
            <Link
              to="/services"
              className="text-sm font-semibold text-navy border-b-2 border-gold pb-1 self-start hover:text-gold transition-colors"
            >
              View all services →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
            {services.map((s) => (
              <article
                key={s.title}
                className="bg-paper p-8 group hover:bg-stone transition-colors"
              >
                <div className="flex items-start justify-between mb-8">
                  <s.icon className="size-7 text-gold" />
                  <span className="text-xs font-mono text-charcoal/40">{s.n}</span>
                </div>
                <h3 className="text-lg font-semibold text-navy mb-3">{s.title}</h3>
                <p className="text-sm text-charcoal/70 leading-relaxed mb-6">{s.desc}</p>
                <Link
                  to="/services"
                  className="text-gold text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-1"
                >
                  View expertise <ArrowUpRight className="size-3" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-paper py-24">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src={aboutImg}
              alt="Executive leadership team in boardroom"
              className="w-full aspect-square object-cover"
              width={1280}
              height={1280}
              loading="lazy"
            />
            <div className="absolute -bottom-6 -right-6 hidden md:block bg-navy text-paper p-8 max-w-xs">
              <div className="font-serif italic text-2xl text-gold mb-2">Vision</div>
              <p className="text-sm text-paper/70 leading-relaxed">
                Building the bridge between technical precision and business profitability across
                West Africa.
              </p>
            </div>
          </div>
          <div>
            <span className="eyebrow">Who We Are</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-serif text-navy text-balance">
              Rooted in Africa. Operating at global standards.
            </h2>
            <p className="mt-6 text-charcoal/80 leading-relaxed">
              Semech Consult is a technology-driven consulting and business solutions company
              delivering innovative services across Ghana and Nigeria. Our expertise spans IT,
              Energy, Data Management, Digital Transformation, and Geospatial Intelligence.
            </p>
            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              {[
                {
                  icon: ShieldCheck,
                  t: "Rigour",
                  d: "Disciplined methodology and engineering-grade analysis on every engagement.",
                },
                {
                  icon: Target,
                  t: "Outcome-Driven",
                  d: "Every recommendation tied to a measurable commercial or operational result.",
                },
                {
                  icon: Cpu,
                  t: "Technology First",
                  d: "Software, data, and AI woven into every advisory deliverable.",
                },
                {
                  icon: ShieldCheck,
                  t: "Trusted Counsel",
                  d: "A reputation built on confidentiality, integrity, and execution.",
                },
              ].map((x) => (
                <div key={x.t} className="flex gap-3">
                  <x.icon className="size-5 text-gold shrink-0 mt-1" />
                  <div>
                    <h5 className="font-semibold text-navy text-sm">{x.t}</h5>
                    <p className="text-xs text-charcoal/60 mt-1 leading-relaxed">{x.d}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link
              to="/about"
              className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-navy group"
            >
              Read our full story{" "}
              <span className="block w-8 h-px bg-gold group-hover:w-16 transition-all" />
            </Link>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-paper py-24">
        <div className="container-x">
          <div className="max-w-2xl mb-12">
            <span className="eyebrow">Industries Served</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-serif text-navy text-balance">
              Sector depth across the West African economy.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-line border border-line">
            {industries.map((i) => (
              <div
                key={i}
                className="bg-paper px-6 py-8 text-navy font-medium hover:bg-stone hover:text-gold transition-colors cursor-default"
              >
                {i}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-stone py-24">
        <div className="container-x">
          <div className="max-w-2xl mb-14">
            <span className="eyebrow">Client Voice</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-serif text-navy text-balance">
              What enterprise leaders say.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-line border border-line">
            {testimonials.map((t) => (
              <figure key={t.name} className="bg-paper p-10">
                <div className="text-gold font-serif text-4xl leading-none mb-4">"</div>
                <blockquote className="text-charcoal text-base leading-relaxed">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-8 pt-6 border-t border-line">
                  <div className="font-semibold text-navy text-sm">{t.name}</div>
                  <div className="text-xs text-charcoal/60 mt-1">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}

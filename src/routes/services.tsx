import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Brain,
  Briefcase,
  Clapperboard,
  Cpu,
  Database,
  Fuel,
  GraduationCap,
  LineChart,
  MapPinned,
  Settings2,
  Target,
  Truck,
  Workflow,
} from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaSection } from "@/components/site/CtaSection";
import { Helmet } from "react-helmet-async";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
});

const services = [
  {
    icon: Target,
    title: "Business Strategy",
    overview:
      "Corporate strategy, market entry and growth planning for boards and executive teams.",
    deliverables: ["Strategy diagnostic", "Market entry roadmap", "Operating model design"],
    benefits: "Clarity of direction and a defensible commercial plan.",
  },
  {
    icon: Briefcase,
    title: "Project Management",
    overview: "PMO design, capital project oversight and assurance for complex programmes.",
    deliverables: ["PMO setup", "Programme governance", "Risk and assurance"],
    benefits: "Predictable delivery, on time and on budget.",
  },
  {
    icon: Cpu,
    title: "Technology Solutions",
    overview: "Bespoke software, integrations and platform engineering for the enterprise.",
    deliverables: ["Solution architecture", "Custom builds", "Systems integration"],
    benefits: "Technology that compounds operational leverage.",
  },
  {
    icon: Settings2,
    title: "Engineering Advisory",
    overview: "Independent engineering review, due diligence and asset performance advisory.",
    deliverables: ["Technical due diligence", "Asset assessments", "Lifecycle planning"],
    benefits: "Confident capital decisions backed by engineering rigour.",
  },
  {
    icon: MapPinned,
    title: "GIS & Intelligence",
    overview:
      "Geospatial analysis, mapping and intelligence platforms for infrastructure and security.",
    deliverables: ["GIS platforms", "Spatial analytics", "Asset mapping"],
    benefits: "Better decisions where location is the deciding variable.",
  },
  {
    icon: Database,
    title: "Data Analytics",
    overview: "Data architecture, governance and decision-grade analytics products.",
    deliverables: ["Data strategy", "Warehousing", "Analytics products"],
    benefits: "Data that informs the boardroom in real time.",
  },
  {
    icon: Fuel,
    title: "Oil & Gas Consulting",
    overview: "Upstream, midstream and energy transition advisory for operators and JV partners.",
    deliverables: ["Asset advisory", "Commercial structuring", "Operations review"],
    benefits: "Resilience and margin improvement across the energy value chain.",
  },
  {
    icon: GraduationCap,
    title: "Training & Capacity",
    overview: "Executive learning and capability uplift for leadership and technical teams.",
    deliverables: ["Executive workshops", "Technical academies", "Coaching programmes"],
    benefits: "Internal capability that sustains the transformation.",
  },
  {
    icon: Workflow,
    title: "Digital Transformation",
    overview: "End-to-end programmes that modernise operating models with cloud, AI and data.",
    deliverables: ["Digital roadmap", "Cloud migration", "AI enablement"],
    benefits: "A digital estate that powers growth, not friction.",
  },
  {
    icon: LineChart,
    title: "Operations & Process Improvement",
    overview: "Lean redesign, performance management and process optimisation.",
    deliverables: ["Process diagnostic", "Lean redesign", "Performance KPIs"],
    benefits: "Lower cost-to-serve and visibly better service quality.",
  },
  {
    icon: Brain,
    title: "Artificial Intelligence",
    overview:
      "Applied AI strategy, model development and responsible deployment for enterprise use cases.",
    deliverables: [
      "AI opportunity mapping",
      "Model development & MLOps",
      "Governance & guardrails",
    ],
    benefits: "AI that moves KPIs, not slide decks.",
  },
  {
    icon: Truck,
    title: "Logistics & Supply Chain",
    overview:
      "Supply chain design, logistics optimisation and distribution network advisory across West Africa.",
    deliverables: ["Network design", "Logistics optimisation", "Supply chain analytics"],
    benefits: "Lower landed cost and materially faster fulfilment.",
  },
  {
    icon: Clapperboard,
    title: "Media",
    overview:
      "Media strategy, content operations, broadcast advisory and digital media monetisation for modern publishers and platforms.",
    deliverables: [
      "Media strategy & positioning",
      "Content operations design",
      "Digital monetisation & distribution",
    ],
    benefits: "Audience growth and sustainable media revenue models.",
  },
];

function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Services — Semech Consult</title>
        <meta
          name="description"
          content="Strategy, technology, energy, GIS, data and operations services delivered by Semech Consult across West Africa."
        />

        <meta property="og:title" content="Consulting Services — Semech" />
        <meta
          property="og:description"
          content="End-to-end advisory for ambitious organisations."
        />
        <meta property="og:url" content="/services" />

        <link rel="canonical" href="/services" />
      </Helmet>
      <PageHeader
        eyebrow="Our Services"
        title="Advisory across the full enterprise stack."
        description="Thirteen interlocking practice areas designed to deliver compound business impact — from boardroom strategy to engineering execution."
      />

      <section className="bg-paper py-24">
        <div className="container-x grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
          {services.map((s, i) => (
            <article key={s.title} className="bg-paper p-10 group hover:bg-stone transition-colors">
              <div className="flex items-start justify-between mb-6">
                <s.icon className="size-7 text-gold" />
                <span className="text-xs font-mono text-charcoal/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">{s.title}</h3>
              <p className="text-sm text-charcoal/70 leading-relaxed mb-6">{s.overview}</p>

              <div className="mb-5">
                <p className="text-[10px] uppercase tracking-widest font-semibold text-navy mb-2">
                  Key Deliverables
                </p>
                <ul className="space-y-1.5">
                  {s.deliverables.map((d) => (
                    <li key={d} className="text-sm text-charcoal/70 flex gap-2">
                      <span className="text-gold">·</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <p className="text-[10px] uppercase tracking-widest font-semibold text-navy mb-2">
                  Business Benefit
                </p>
                <p className="text-sm text-charcoal/70 italic">{s.benefits}</p>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-1 text-gold text-xs font-bold uppercase tracking-wider"
              >
                Discuss this service <ArrowUpRight className="size-3" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  );
}

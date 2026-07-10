import { createFileRoute } from "@tanstack/react-router";
import {
  Building2,
  Factory,
  Fuel,
  GraduationCap,
  HardHat,
  Landmark,
  Leaf,
  Phone,
  Wallet,
} from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaSection } from "@/components/site/CtaSection";
import { buildHead } from "@/lib/seo";

export const Route = createFileRoute("/industries")({
  head: () =>
    buildHead({
      title: "Industries Semech Consult",
      description:
        "Sector expertise across energy, government, finance, infrastructure, manufacturing and more.",
      ogTitle: "Industries Served Semech",
      ogDescription: "Deep sector knowledge across the West African economy.",
      path: "/industries",
    }),
  component: IndustriesPage,
});

const industries = [
  {
    icon: Fuel,
    title: "Energy & Oil & Gas",
    desc: "Upstream advisory, energy transition strategy and operational optimisation for operators and JVs across the Gulf of Guinea.",
  },
  {
    icon: HardHat,
    title: "Construction & Infrastructure",
    desc: "Capital project assurance, engineering advisory and PMO frameworks for major infrastructure programmes.",
  },
  {
    icon: Landmark,
    title: "Government & Public Sector",
    desc: "Policy advisory, digital public services and capacity building for ministries and statutory authorities.",
  },
  {
    icon: Wallet,
    title: "Financial Services",
    desc: "Digital banking strategy, risk analytics and regulatory transformation for banks and fintech leaders.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    desc: "Operations excellence, lean redesign and Industry 4.0 enablement for industrial operators.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    desc: "Institutional digital transformation and capacity programmes for tertiary and corporate education providers.",
  },
  {
    icon: Leaf,
    title: "Agriculture",
    desc: "Agritech advisory, supply chain digitisation and value chain analytics for agribusiness leaders.",
  },
  {
    icon: Building2,
    title: "Real Estate",
    desc: "Portfolio strategy, asset advisory and proptech enablement for institutional real estate players.",
  },
  {
    icon: Phone,
    title: "Telecommunications",
    desc: "Network strategy, customer analytics and digital experience transformation for telco operators.",
  },
];

function IndustriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Industries"
        title="Sector depth where it counts."
        description="Our consultants combine cross-sector pattern recognition with deep institutional knowledge of the African corporate landscape."
      />

      <section className="bg-paper py-24">
        <div className="container-x grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
          {industries.map((i) => (
            <article key={i.title} className="bg-paper p-10 hover:bg-stone transition-colors">
              <i.icon className="size-7 text-gold mb-6" />
              <h3 className="text-xl font-semibold text-navy mb-3">{i.title}</h3>
              <p className="text-sm text-charcoal/70 leading-relaxed">{i.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  );
}

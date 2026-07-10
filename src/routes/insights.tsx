import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useState } from "react";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaSection } from "@/components/site/CtaSection";
import { Helmet } from "react-helmet-async";

export const Route = createFileRoute("/insights")({
  component: InsightsPage,
});

const articles = [
  {
    cat: "Industry Report",
    title: "The Future of GIS in African Urban Planning",
    excerpt:
      "How geospatial intelligence is reshaping infrastructure decisions in Lagos, Accra and Abuja.",
    date: "May 2026",
    featured: true,
  },
  {
    cat: "Digital Advisory",
    title: "AI Adoption Frameworks for African Banks",
    excerpt:
      "A pragmatic blueprint for integrating large language models into regulated banking workflows.",
    date: "Apr 2026",
  },
  {
    cat: "Energy Focus",
    title: "Optimising Upstream Operations in Nigeria",
    excerpt:
      "Data-driven strategies to reduce operational downtime in remote offshore environments.",
    date: "Apr 2026",
  },
  {
    cat: "Strategy",
    title: "Operating Model Patterns for African Conglomerates",
    excerpt: "Three reference architectures for multi-business holdings expanding regionally.",
    date: "Mar 2026",
  },
  {
    cat: "Public Sector",
    title: "Building Sovereign Data Capability",
    excerpt: "Why governments must invest in their own data backbone and how to start.",
    date: "Mar 2026",
  },
  {
    cat: "Operations",
    title: "Process Excellence in Manufacturing",
    excerpt: "Lean redesign playbook applied to a West African industrial operator.",
    date: "Feb 2026",
  },
];

const categories = [
  "All",
  "Industry Report",
  "Digital Advisory",
  "Energy Focus",
  "Strategy",
  "Public Sector",
  "Operations",
];

function InsightsPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const filtered = articles.filter(
    (a) =>
      (cat === "All" || a.cat === cat) &&
      (q === "" || a.title.toLowerCase().includes(q.toLowerCase())),
  );
  const featured = articles.find((a) => a.featured);

  return (
    <>
      <Helmet>
        <title>Insights Semech Consult</title>
        <meta
          name="description"
          content="Research, briefings and executive perspectives from Semech Consult on strategy, technology and the African enterprise."
        />

        <meta property="og:title" content="Insights & Publications Semech" />
        <meta
          property="og:description"
          content="Briefings on strategy, technology and the African enterprise."
        />
        <meta property="og:url" content="/insights" />

        <link rel="canonical" href="/insights" />
      </Helmet>
      <PageHeader
        eyebrow="Insights"
        title="Briefings on strategy, technology and the African enterprise."
        description="Selected publications, research and executive perspectives from our consulting practice."
      />

      <section className="bg-paper border-b border-line">
        <div className="container-x py-8 flex flex-col md:flex-row gap-4 items-start md:items-center">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-charcoal/40" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search publications…"
              className="w-full pl-10 pr-4 py-3 bg-stone border border-line rounded-sm text-sm focus:outline-none focus:border-gold"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-3 py-2 text-xs font-semibold uppercase tracking-wider border transition-colors ${cat === c ? "bg-navy text-paper border-navy" : "border-line text-charcoal/70 hover:border-navy"}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {featured && cat === "All" && q === "" && (
        <section className="bg-stone py-16">
          <div className="container-x">
            <span className="eyebrow">Featured</span>
            <div className="mt-6 grid lg:grid-cols-2 gap-10 items-center bg-paper border border-line p-10">
              <div>
                <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-[10px] font-bold uppercase tracking-widest mb-5">
                  {featured.cat}
                </span>
                <h2 className="text-3xl md:text-4xl font-serif text-navy text-balance mb-5">
                  {featured.title}
                </h2>
                <p className="text-charcoal/70 leading-relaxed mb-6">{featured.excerpt}</p>
                <p className="text-xs text-charcoal/50">{featured.date}</p>
              </div>
              <div className="aspect-4/3 bg-linear-to-br from-navy to-charcoal flex items-center justify-center">
                <span className="font-serif italic text-gold text-3xl">Semech Insights</span>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="bg-paper py-20">
        <div className="container-x">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((a) => (
              <article key={a.title} className="card-line group cursor-pointer">
                <span className="text-gold text-[10px] font-bold uppercase tracking-widest block mb-4">
                  {a.cat}
                </span>
                <h3 className="text-xl font-semibold text-navy mb-3 group-hover:text-gold transition-colors">
                  {a.title}
                </h3>
                <p className="text-sm text-charcoal/70 leading-relaxed mb-6">{a.excerpt}</p>
                <p className="text-xs text-charcoal/50">{a.date}</p>
              </article>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-charcoal/50 py-20">No publications match your search.</p>
          )}
        </div>
      </section>

      <CtaSection />
    </>
  );
}

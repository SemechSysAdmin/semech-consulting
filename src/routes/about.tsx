import { createFileRoute } from "@tanstack/react-router";
import { Award, Compass, Globe2, Sparkles, Target, Users } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaSection } from "@/components/site/CtaSection";
import aboutImg from "@/assets/about-leadership.jpg";
import { Helmet } from "react-helmet-async";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Semech Consult</title>
        <meta
          name="description"
          content="Learn how Semech Consult delivers premium technology-driven advisory across Ghana, Nigeria and the wider West African market."
        />

        <meta property="og:title" content="About Semech Consult" />
        <meta
          property="og:description"
          content="A premium consulting firm built on rigour, technology and measurable enterprise impact."
        />
        <meta property="og:url" content="/about" />

        <link rel="canonical" href="/about" />
      </Helmet>
      <PageHeader
        eyebrow="About Semech"
        title="A consulting practice built for the modern African enterprise."
        description="We combine technical depth with strategic instinct to help leaders navigate complexity and unlock measurable performance."
      />

      <section className="bg-paper py-24">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
          <img
            src={aboutImg}
            alt="Semech leadership team"
            className="w-full aspect-4/5 object-cover"
            width={1280}
            height={1600}
            loading="lazy"
          />
          <div>
            <span className="eyebrow">Our Story</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-serif text-navy text-balance">
              A firm engineered for outcomes, not theatre.
            </h2>
            <p className="mt-6 text-charcoal/80 leading-relaxed">
              Semech Consult was founded to fill a precise gap in the West African market: a
              consulting partner that pairs the discipline of global advisory with the practical
              execution required by African enterprises and governments.
            </p>
            <p className="mt-4 text-charcoal/80 leading-relaxed">
              From Lagos to Accra, our consultants embed alongside leadership teams to deliver work
              that moves balance sheets not slide decks. We measure success in productivity gained,
              capital optimised, and capability transferred.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-stone py-24">
        <div className="container-x grid md:grid-cols-3 gap-px bg-line border border-line">
          {[
            {
              icon: Compass,
              t: "Vision",
              d: "To be West Africa's most trusted partner for technology-led business transformation.",
            },
            {
              icon: Target,
              t: "Mission",
              d: "Empowering organisations with insight, technology and execution to deliver sustainable growth.",
            },
            {
              icon: Sparkles,
              t: "Promise",
              d: "Every engagement leaves the client with stronger capability and measurable commercial impact.",
            },
          ].map((x) => (
            <div key={x.t} className="bg-paper p-10">
              <x.icon className="size-7 text-gold mb-6" />
              <h3 className="text-xl font-semibold text-navy mb-3">{x.t}</h3>
              <p className="text-charcoal/70 leading-relaxed text-sm">{x.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-paper py-24">
        <div className="container-x">
          <div className="max-w-2xl mb-12">
            <span className="eyebrow">Core Values</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-serif text-navy">
              The principles that shape every engagement.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                t: "Excellence",
                d: "Engineering-grade rigour applied to every deliverable, every time.",
              },
              {
                icon: Users,
                t: "Partnership",
                d: "Embedded teams that work as an extension of leadership, not as outsiders.",
              },
              {
                icon: Globe2,
                t: "Local Insight",
                d: "Deep familiarity with regulatory, cultural and commercial realities of African markets.",
              },
              {
                icon: Sparkles,
                t: "Innovation",
                d: "An obsession with how technology shifts what is operationally possible.",
              },
            ].map((x) => (
              <div key={x.t} className="card-line">
                <x.icon className="size-6 text-gold mb-5" />
                <h3 className="font-semibold text-navy mb-2">{x.t}</h3>
                <p className="text-sm text-charcoal/70 leading-relaxed">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy text-paper py-24">
        <div className="container-x">
          <div className="max-w-2xl mb-14">
            <span className="eyebrow">Corporate Achievements</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-serif text-balance">
              Numbers that reflect our practice.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              ["150+", "Enterprise engagements"],
              ["12", "Industries served"],
              ["$500M+", "Capital advised"],
              ["98%", "Client retention"],
            ].map(([k, v]) => (
              <div key={v} className="border-l border-gold pl-5">
                <div className="text-4xl font-serif text-paper">{k}</div>
                <div className="mt-2 text-[11px] uppercase tracking-widest text-paper/50">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  );
}

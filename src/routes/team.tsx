import { createFileRoute } from "@tanstack/react-router";
import { Linkedin } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaSection } from "@/components/site/CtaSection";
import { buildHead } from "@/lib/seo";

export const Route = createFileRoute("/team")({
  head: () =>
    buildHead({
      title: "Team Semech Consult",
      description: "Meet the executive team and senior consultants behind Semech Consult.",
      ogTitle: "Our Team Semech",
      ogDescription: "Senior advisors with deep cross-sector and technology pedigree.",
      path: "/team",
    }),
  component: TeamPage,
});

const team = [
  {
    name: "Dr. Samuel Mensah",
    role: "Managing Partner",
    expertise: "Strategy & Energy",
    bio: "Two decades advising operators and policymakers across the West African energy corridor.",
    certs: "MBA INSEAD · PhD Energy Economics",
  },
  {
    name: "Chioma Eze",
    role: "Partner, Technology",
    expertise: "Digital Transformation",
    bio: "Former CTO with deep experience scaling enterprise platforms across financial services and telecoms.",
    certs: "AWS · TOGAF · CSM",
  },
  {
    name: "Kwame Asante",
    role: "Partner, Engineering",
    expertise: "Infrastructure Advisory",
    bio: "Chartered engineer specialising in technical due diligence and asset lifecycle advisory.",
    certs: "PE · PMP · MIET",
  },
  {
    name: "Folake Adebanjo",
    role: "Director, Data & GIS",
    expertise: "Geospatial Intelligence",
    bio: "Builds decision-grade analytics products for governments and infrastructure portfolios.",
    certs: "MSc Geoinformatics · GISP",
  },
  {
    name: "Ibrahim Yusuf",
    role: "Director, Operations",
    expertise: "Process Improvement",
    bio: "Lean and Six Sigma practitioner with a record of multi-million-dollar cost optimisation.",
    certs: "Lean Black Belt · MBA",
  },
  {
    name: "Akua Boateng",
    role: "Head of Capacity Building",
    expertise: "Executive Education",
    bio: "Designs leadership academies for blue-chip clients across Ghana and Nigeria.",
    certs: "Cert. Executive Coach",
  },
];

const initials = (n: string) =>
  n
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");

function TeamPage() {
  return (
    <>
      <PageHeader
        eyebrow="Leadership"
        title="The senior advisors behind Semech Consult."
        description="A practice led by partners with proven scale-up, transformation and engineering pedigrees."
      />

      <section className="bg-paper py-24">
        <div className="container-x grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
          {team.map((m) => (
            <article key={m.name} className="bg-paper p-10 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="size-16 bg-navy text-gold font-serif italic text-2xl flex items-center justify-center">
                  {initials(m.name)}
                </div>
                <div>
                  <h3 className="font-semibold text-navy">{m.name}</h3>
                  <p className="text-xs text-charcoal/60 mt-1">{m.role}</p>
                </div>
              </div>
              <p className="text-[10px] uppercase tracking-widest text-gold font-semibold mb-3">
                {m.expertise}
              </p>
              <p className="text-sm text-charcoal/70 leading-relaxed mb-5">{m.bio}</p>
              <p className="text-[11px] text-charcoal/50 font-medium mb-6">{m.certs}</p>
              <a
                href="#"
                aria-label="LinkedIn"
                className="inline-flex items-center gap-2 text-xs text-navy hover:text-gold transition-colors"
              >
                <Linkedin className="size-4" /> Connect
              </a>
            </article>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  );
}

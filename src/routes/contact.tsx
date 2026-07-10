import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { PageHeader } from "@/components/site/PageHeader";
import { Helmet } from "react-helmet-async";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  company: z.string().trim().max(150).optional(),
  message: z.string().trim().min(10, "Please describe your enquiry").max(2000),
});

const faqs = [
  {
    q: "How do engagements typically start?",
    a: "We begin with a confidential consultation to scope the challenge, followed by a structured diagnostic proposal.",
  },
  {
    q: "Do you work with SMEs as well as large corporates?",
    a: "Yes. We design our engagement model to fit the scale and ambition of each client from growth-stage SMEs to JV-scale operators.",
  },
  {
    q: "Where are your consultants based?",
    a: "Our practice operates across Lagos, Abuja and Accra with consultants deployed across the West African region.",
  },
  {
    q: "How quickly can you mobilise a team?",
    a: "For most engagements we can mobilise a senior team within 10 to 14 business days of agreement.",
  },
];

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const result = schema.safeParse(Object.fromEntries(fd));
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((i) => {
        fieldErrors[String(i.path[0])] = i.message;
      });
      setErrors(fieldErrors);
      setStatus("err");
      return;
    }
    setErrors({});
    setStatus("ok");
    e.currentTarget.reset();
  };

  return (
    <>
      <Helmet>
        <title>Contact Semech Consult</title>
        <meta
          name="description"
          content="Get in touch with Semech Consult to discuss a consulting engagement across Ghana, Nigeria or the wider region."
        />

        <meta property="og:title" content="Contact Semech Consult" />
        <meta property="og:description" content="Schedule a consultation with our advisory team." />
        <meta property="og:url" content="/contact" />

        <link rel="canonical" href="/contact" />
      </Helmet>
      <PageHeader
        eyebrow="Contact"
        title="Let's discuss your next engagement."
        description="Share a few details and a senior advisor will be in touch within one business day."
      />

      <section className="bg-paper py-24">
        <div className="container-x grid lg:grid-cols-3 gap-12">
          <aside className="lg:col-span-1 space-y-8">
            {[
              { icon: MapPin, t: "Offices", d: "Lagos, Nigeria · Abuja, Nigeria · Accra, Ghana" },
              { icon: Phone, t: "Phone", d: "+234 915 256 3630" },
              { icon: Mail, t: "Corporate Email", d: "contact@semechconsulting.ng" },
              { icon: Clock, t: "Hours", d: "Monday – Sunday · 24/7 advisory line" },
            ].map((x) => (
              <div key={x.t} className="flex gap-4">
                <div className="size-10 bg-navy text-gold flex items-center justify-center shrink-0">
                  <x.icon className="size-5" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-widest text-charcoal/50 font-semibold mb-1">
                    {x.t}
                  </p>
                  <p className="text-charcoal">{x.d}</p>
                </div>
              </div>
            ))}
            <a
              href="https://wa.me/2349152563630"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-2 px-5 py-3 bg-[oklch(0.65_0.17_150)] text-paper rounded-sm text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="size-4" /> Chat on WhatsApp
            </a>
          </aside>

          <div className="lg:col-span-2">
            <form onSubmit={onSubmit} className="bg-stone border border-line p-8 md:p-10 space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="text-[11px] uppercase tracking-widest font-semibold text-navy block mb-2">
                    Full Name
                  </label>
                  <input
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-paper border border-line rounded-sm text-sm focus:outline-none focus:border-gold"
                  />
                  {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
                </div>
                <div>
                  <label className="text-[11px] uppercase tracking-widest font-semibold text-navy block mb-2">
                    Business Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-paper border border-line rounded-sm text-sm focus:outline-none focus:border-gold"
                  />
                  {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
                </div>
              </div>
              <div>
                <label className="text-[11px] uppercase tracking-widest font-semibold text-navy block mb-2">
                  Company
                </label>
                <input
                  name="company"
                  className="w-full px-4 py-3 bg-paper border border-line rounded-sm text-sm focus:outline-none focus:border-gold"
                />
              </div>
              <div>
                <label className="text-[11px] uppercase tracking-widest font-semibold text-navy block mb-2">
                  How can we help?
                </label>
                <textarea
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 bg-paper border border-line rounded-sm text-sm focus:outline-none focus:border-gold resize-none"
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-destructive">{errors.message}</p>
                )}
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-navy text-paper py-3 pr-5 pl-4 rounded-sm text-sm font-medium hover:bg-navy-deep transition-colors"
              >
                <Send className="size-4" /> Send Enquiry
              </button>
              {status === "ok" && (
                <p className="text-sm text-gold mt-3">
                  Thank you a senior advisor will be in touch within one business day.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      <section className="bg-stone py-12">
        <div className="container-x">
          <div className="aspect-16/6 bg-paper border border-line flex items-center justify-center text-charcoal/40 text-sm">
            <MapPin className="size-5 mr-2 text-gold" /> Map placeholder · Lagos · Abuja · Accra
          </div>
        </div>
      </section>

      <section className="bg-paper py-24">
        <div className="container-x max-w-3xl">
          <span className="eyebrow">FAQ</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-serif text-navy mb-10">
            Frequently asked questions.
          </h2>
          <div className="divide-y divide-line border-y border-line">
            {faqs.map((f) => (
              <details key={f.q} className="group py-6">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <span className="font-semibold text-navy pr-6">{f.q}</span>
                  <span className="text-gold text-2xl group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-charcoal/70 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

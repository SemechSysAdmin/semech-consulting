import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
  return (
    <section className="bg-navy">
      <div className="container-x py-24 lg:py-28 text-center">
        <span className="eyebrow">Engage Our Practice</span>
        <h2 className="mt-4 font-serif text-3xl md:text-5xl text-paper max-w-3xl mx-auto leading-tight text-balance">
          Ready to transform your organizational performance?
        </h2>
        <p className="mt-5 text-paper/60 max-w-xl mx-auto">
          Let our advisory team design a measurable path from where your enterprise is to where it
          needs to be.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gold text-paper py-3 pr-5 pl-4 rounded-sm text-sm font-medium ring-1 ring-gold hover:bg-gold-soft hover:text-navy transition-all"
          >
            Schedule Consultation <ArrowRight className="size-4" />
          </Link>
          <a
            href="#"
            className="inline-flex items-center gap-2 border border-paper/20 text-paper py-3 px-5 rounded-sm text-sm font-medium hover:bg-paper/5 transition-colors"
          >
            Download Company Profile
          </a>
        </div>
      </div>
    </section>
  );
}

import { Link } from "@tanstack/react-router";
import { Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-charcoal text-paper pt-20 pb-10">
      <div className="container-x">
        <div className="grid lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center bg-gold text-navy font-serif italic text-lg">
                S
              </span>
              <span className="font-semibold tracking-tight text-xl">
                SEMECH<span className="text-gold">.</span>
              </span>
            </div>
            <p className="text-paper/60 max-w-md text-sm leading-relaxed">
              A technology-driven consulting firm delivering innovative business solutions across
              Ghana and Nigeria — spanning IT, Energy, Data, Digital Transformation and Geospatial
              Intelligence.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="#"
                aria-label="LinkedIn"
                className="size-10 rounded-full border border-paper/15 flex items-center justify-center text-paper/70 hover:border-gold hover:text-gold transition-colors"
              >
                <Linkedin className="size-4" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="size-10 rounded-full border border-paper/15 flex items-center justify-center text-paper/70 hover:border-gold hover:text-gold transition-colors"
              >
                <Twitter className="size-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-paper font-medium mb-5 text-xs uppercase tracking-widest">
              Capabilities
            </h4>
            <ul className="space-y-3 text-sm text-paper/60">
              <li>
                <Link to="/services" className="hover:text-gold transition-colors">
                  Strategy & Transformation
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold transition-colors">
                  Project Management
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold transition-colors">
                  Artificial Intelligence
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold transition-colors">
                  Logistics & Supply Chain
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold transition-colors">
                  Digital Transformation
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold transition-colors">
                  Data Analytics
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold transition-colors">
                  Media
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-paper font-medium mb-5 text-xs uppercase tracking-widest">
              Get in touch
            </h4>
            <ul className="space-y-3 text-sm text-paper/60">
              <li className="flex items-start gap-2">
                <MapPin className="size-4 mt-0.5 text-gold shrink-0" /> Lagos, Nigeria · Abuja,
                Nigeria · Accra, Ghana
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 text-gold shrink-0" /> +234 915 256 3630
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 text-gold shrink-0" /> contact@semechconsulting.ng
              </li>
            </ul>
            <form className="mt-6 flex border-b border-paper/15 pb-2">
              <input
                type="email"
                placeholder="Executive briefing email"
                className="bg-transparent border-none text-sm text-paper w-full focus:outline-none placeholder:text-paper/35"
              />
              <button className="text-gold text-sm font-medium">→</button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-paper/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-paper/40 uppercase tracking-widest">
          <span>© {new Date().getFullYear()} Semech Consult. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-paper">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-paper">
              Terms of Engagement
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

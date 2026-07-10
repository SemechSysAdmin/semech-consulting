import { Link } from "@tanstack/react-router";
import { Menu, X, Clock } from "lucide-react";
import { useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/team", label: "Team" },
  { to: "/insights", label: "Insights" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full bg-paper/85 backdrop-blur-md border-b border-line">
      <div className="container-x h-16 lg:h-[72px] flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center bg-navy text-gold font-serif italic text-lg">
            S
          </span>
          <span className="text-navy font-semibold tracking-tight text-lg">
            SEMECH<span className="text-gold">.</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-navy" }}
              inactiveProps={{ className: "text-charcoal/70" }}
              className="text-sm font-medium hover:text-navy transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold hover:after:w-full after:transition-all after:duration-300"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-navy text-paper py-2.5 pr-4 pl-3 rounded-sm text-sm font-medium ring-1 ring-navy hover:bg-navy-deep transition-all"
          >
            <Clock className="size-4" /> Schedule Consultation
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 text-navy"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-line bg-paper">
          <div className="container-x py-4 flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm font-medium text-charcoal hover:text-gold"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 bg-navy text-paper py-3 rounded-sm text-sm font-medium"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

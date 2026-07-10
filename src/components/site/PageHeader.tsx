type Props = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function PageHeader({ eyebrow, title, description }: Props) {
  return (
    <section className="bg-navy text-paper">
      <div className="container-x py-20 lg:py-28">
        <div className="max-w-3xl animate-fade-up">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-gold" />
            <span className="text-gold text-[11px] font-semibold tracking-[0.3em] uppercase">
              {eyebrow}
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight text-balance">
            {title}
          </h1>
          {description && (
            <p className="mt-6 text-lg text-paper/70 max-w-2xl text-pretty leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

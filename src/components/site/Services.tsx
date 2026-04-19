import { useI18n } from "@/lib/i18n";

export function Services() {
  const { t } = useI18n();
  const items = [1, 2, 3, 4, 5, 6].map((i) => ({
    n: String(i).padStart(2, "0"),
    t: t(`services.${i}.t`),
    d: t(`services.${i}.d`),
  }));

  return (
    <section id="services" className="relative py-28 md:py-36">
      <div className="mx-auto w-[min(1200px,94%)]">
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="h-px w-10 bg-neon" />
          {t("services.kicker")}
        </div>
        <h2 className="mt-6 max-w-3xl font-display text-[clamp(1.875rem,4.5vw,3.5rem)] font-semibold leading-[1.05] tracking-tight">
          {t("services.title")}
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.n}
              className="group relative bg-background p-7 transition hover:bg-surface md:p-9"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs text-muted-foreground">{it.n}</span>
                <span className="h-2 w-2 rounded-full bg-neon opacity-0 transition group-hover:opacity-100" />
              </div>
              <h3 className="mt-10 font-display text-xl font-semibold tracking-tight md:text-2xl">
                {it.t}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

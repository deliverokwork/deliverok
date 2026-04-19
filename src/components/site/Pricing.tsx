import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function Pricing() {
  const { t } = useI18n();

  const plans = [
    {
      key: "starter" as const,
      features: ["f1", "f2", "f3", "f4"],
      featured: false,
    },
    {
      key: "pro" as const,
      features: ["f1", "f2", "f3", "f4", "f5"],
      featured: true,
    },
    {
      key: "fleet" as const,
      features: ["f1", "f2", "f3", "f4"],
      featured: false,
    },
  ];

  return (
    <section id="pricing" className="relative py-28 md:py-36">
      <div className="mx-auto w-[min(1200px,94%)]">
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="h-px w-10 bg-neon" />
          {t("pricing.kicker")}
        </div>
        <h2 className="mt-6 max-w-3xl font-display text-[clamp(1.875rem,4.5vw,3.5rem)] font-semibold leading-[1.05] tracking-tight">
          {t("pricing.title")}
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.key}
              className={cn(
                "relative flex flex-col rounded-3xl border p-7 md:p-8",
                p.featured
                  ? "border-neon bg-surface glow-neon"
                  : "border-border bg-surface/50",
              )}
            >
              {p.featured && (
                <span className="absolute -top-3 left-7 rounded-full bg-neon px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-neon-foreground">
                  {t("pricing.pro.badge")}
                </span>
              )}
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {t(`pricing.${p.key}.name`)}
              </div>
              <div className="mt-6 flex items-baseline gap-2">
                <div className="font-display text-6xl font-semibold tracking-tight">
                  {t(`pricing.${p.key}.fee`)}
                </div>
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                {t(`pricing.${p.key}.feeNote`)}
              </div>

              <ul className="mt-8 space-y-3 border-t border-border pt-6">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neon" />
                    <span>{t(`pricing.${p.key}.${f}`)}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#apply"
                className={cn(
                  "mt-8 inline-flex h-12 items-center justify-center rounded-full text-sm font-semibold uppercase tracking-wider transition",
                  p.featured
                    ? "bg-neon text-neon-foreground hover:opacity-90"
                    : "border border-border text-foreground hover:bg-accent",
                )}
              >
                {t("pricing.choose")}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

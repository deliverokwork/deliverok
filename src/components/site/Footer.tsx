import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer id="about" className="border-t border-border bg-surface/30">
      <div className="mx-auto grid w-[min(1200px,94%)] gap-10 py-16 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-red-accent glow-red">
              <span className="h-2 w-2 rounded-full bg-neon" />
            </span>
            <span className="font-display text-base font-semibold tracking-tight">
              deliver<span className="text-red-accent">o</span>k
            </span>
          </div>
          <p className="mt-5 max-w-xs text-sm text-muted-foreground">{t("footer.tagline")}</p>
        </div>

        {[
          {
            h: t("nav.services"),
            l: ["Bolt", "Wolt", "Bolt Food", "Wolt Drive"],
          },
          {
            h: t("nav.pricing"),
            l: [
              t("pricing.starter.name"),
              t("pricing.pro.name"),
              t("pricing.fleet.name"),
            ],
          },
          {
            h: t("nav.about"),
            l: ["hello@deliverok.ee", "+372 5000 0000", "Tallinn, EE"],
          },
        ].map((c) => (
          <div key={c.h}>
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {c.h}
            </div>
            <ul className="mt-5 space-y-2.5 text-sm">
              {c.l.map((x) => (
                <li key={x} className="text-foreground/90">
                  {x}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex w-[min(1200px,94%)] flex-col items-start justify-between gap-2 py-6 font-mono text-xs uppercase tracking-widest text-muted-foreground md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Deliverok OÜ</span>
          <span>{t("footer.rights")}</span>
        </div>
      </div>
    </footer>
  );
}

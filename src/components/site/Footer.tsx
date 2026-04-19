import { useI18n } from "@/lib/i18n";
import logo from "@/assets/deliverok-logo-white.png";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer id="about" className="border-t border-border bg-surface/30">
      <div className="mx-auto grid w-[min(1200px,94%)] gap-10 py-16 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <img
            src={logo}
            alt="Deliverok"
            width={1536}
            height={512}
            loading="lazy"
            className="h-9 w-auto"
          />
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

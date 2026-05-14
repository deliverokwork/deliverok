import { useI18n } from "@/lib/i18n";
import heroImg from "@/assets/hero-courier.jpg";

export function Hero() {
  const { t } = useI18n();
  return (
    <section id="top" className="relative isolate overflow-hidden pt-32 md:pt-40">
      <div className="absolute inset-0 -z-10 grid-bg opacity-60" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[600px] bg-[radial-gradient(ellipse_at_top,oklch(0.88_0.22_135/0.18),transparent_60%)]" />

      <div className="mx-auto w-[min(1200px,94%)]">
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="h-px w-10 bg-neon" />
          {t("hero.kicker")}
        </div>

        <h1 className="mt-6 font-display text-[clamp(2.5rem,7vw,6.5rem)] font-semibold leading-[0.95] tracking-tight">
          {t("hero.title1")}{" "}
          {(() => {
            const parts = t("hero.title2").split(/\b(Bolt|Wolt)\b/);
            return parts.map((p, i) =>
              p === "Bolt" ? (
                <span key={i} style={{ color: "#34D186" }}>Bolt</span>
              ) : p === "Wolt" ? (
                <span key={i} style={{ color: "#00C2E8" }}>Wolt</span>
              ) : (
                <span key={i}>{p}</span>
              )
            );
          })()}
          <br />
          <span className="text-muted-foreground">{t("hero.title3")}</span>
        </h1>

        <p className="mt-8 max-w-xl text-lg text-muted-foreground md:text-xl">{t("hero.sub")}</p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#apply"
            className="group inline-flex items-center gap-2 rounded-full bg-neon px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-neon-foreground transition glow-neon hover:opacity-90"
          >
            {t("hero.cta")}
            <span className="transition group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#faq"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-medium text-foreground transition hover:bg-surface"
          >
            {t("hero.cta2")}
          </a>
        </div>

        <div className="relative mt-16 overflow-hidden rounded-3xl border border-border">
          <img
            src={heroImg}
            alt="Courier on neon-lit night street"
            width={1920}
            height={1080}
            className="h-[420px] w-full object-cover md:h-[560px]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />

          <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-4 md:bottom-10 md:left-10 md:right-10">
            {[
              { v: "1 200+", k: t("stat.couriers") },
              { v: "€2.4M", k: t("stat.payouts") },
              { v: "24/7", k: t("stat.support") },
            ].map((s) => (
              <div
                key={s.k}
                className="rounded-2xl border border-border bg-background/70 p-4 backdrop-blur md:p-5"
              >
                <div className="font-display text-2xl font-semibold text-neon md:text-4xl">
                  {s.v}
                </div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground md:text-xs">
                  {s.k}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="mt-20 overflow-hidden border-y border-border bg-surface/40 py-5">
        <div className="marquee flex w-max gap-12 whitespace-nowrap font-display text-3xl font-semibold uppercase tracking-tight text-muted-foreground md:text-5xl">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-12">
              <span>Bolt</span>
              <span className="text-neon">●</span>
              <span>Wolt</span>
              <span className="text-neon">●</span>
              <span>Tallinn</span>
              <span className="text-neon">●</span>
              <span>Tartu</span>
              <span className="text-neon">●</span>
              <span>Pärnu</span>
              <span className="text-neon">●</span>
              <span>Narva</span>
              <span className="text-neon">●</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

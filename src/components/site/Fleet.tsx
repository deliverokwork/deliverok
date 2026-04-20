import { useI18n } from "@/lib/i18n";
import ebike from "@/assets/ebike.jpg";
import escooter from "@/assets/escooter.jpg";

export function Fleet() {
  const { t } = useI18n();

  const vehicles = [
    {
      key: "bike",
      img: ebike,
      specs: ["motor", "battery", "range", "speed"] as const,
    },
    {
      key: "scooter",
      img: escooter,
      specs: ["motor", "battery", "range", "speed"] as const,
    },
  ];

  return (
    <section id="fleet" className="relative py-28 md:py-36">
      <div className="mx-auto w-[min(1200px,94%)]">
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="h-px w-10 bg-neon" />
          {t("fleet.kicker")}
        </div>
        <h2 className="mt-6 max-w-3xl font-display text-[clamp(1.875rem,4.5vw,3.5rem)] font-semibold leading-[1.05] tracking-tight">
          {t("fleet.title")}
        </h2>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
          {t("fleet.sub")}
        </p>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {vehicles.map((v) => (
            <article
              key={v.key}
              className="group relative overflow-hidden rounded-3xl border border-border bg-surface transition hover:border-neon/40"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-black">
                <img
                  src={v.img}
                  alt={t(`fleet.${v.key}.title`)}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full border border-border bg-background/70 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground backdrop-blur-md">
                  {t(`fleet.${v.key}.tag`)}
                </span>
              </div>

              <div className="p-7 md:p-9">
                <h3 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
                  {t(`fleet.${v.key}.title`)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {t(`fleet.${v.key}.desc`)}
                </p>

                <dl className="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border">
                  {v.specs.map((s) => (
                    <div key={s} className="bg-background p-4">
                      <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                        {t(`fleet.spec.${s}`)}
                      </dt>
                      <dd className="mt-2 font-display text-base font-semibold tracking-tight text-foreground md:text-lg">
                        {t(`fleet.${v.key}.${s}`)}
                      </dd>
                    </div>
                  ))}
                </dl>

                <a
                  href="#apply"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-neon px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-neon-foreground transition hover:opacity-90"
                >
                  {t("fleet.cta")}
                  <span aria-hidden>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

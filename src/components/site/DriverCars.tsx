import { useI18n } from "@/lib/i18n";
import toyotaCorolla from "@/assets/toyota-corolla-hybrid.jpg";
import daciaSandero from "@/assets/dacia-sandero-auto.jpg";

export function DriverCars() {
  const { t } = useI18n();
  const cars = [
    {
      key: "toyota",
      image: toyotaCorolla,
      specs: ["body", "transmission", "fuel", "seats"] as const,
    },
    {
      key: "dacia",
      image: daciaSandero,
      specs: ["body", "transmission", "fuel", "seats"] as const,
    },
  ];

  return (
    <section id="driver-cars" className="relative py-28 md:py-36">
      <div className="mx-auto w-[min(1200px,94%)]">
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="h-px w-10 bg-neon" />
          {t("cars.kicker")}
        </div>
        <h2 className="mt-6 max-w-3xl font-display text-[clamp(1.875rem,4.5vw,3.5rem)] font-semibold leading-[1.05] tracking-tight">
          {t("cars.title")}
        </h2>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
          {t("cars.sub")}
        </p>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {cars.map((car) => (
            <article
              key={car.key}
              className="group overflow-hidden rounded-3xl border border-border bg-surface transition hover:border-neon/40"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-background">
                <img
                  src={car.image}
                  alt={t(`cars.${car.key}.title`)}
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                />
                <span className="absolute left-4 top-4 rounded-full border border-border bg-background/80 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground backdrop-blur-md">
                  {t(`cars.${car.key}.tag`)}
                </span>
              </div>

              <div className="p-7 md:p-9">
                <h3 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
                  {t(`cars.${car.key}.title`)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {t(`cars.${car.key}.desc`)}
                </p>

                <dl className="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border">
                  {car.specs.map((spec) => (
                    <div key={spec} className="bg-background p-4">
                      <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                        {t(`cars.spec.${spec}`)}
                      </dt>
                      <dd className="mt-2 font-display text-base font-semibold tracking-tight text-foreground md:text-lg">
                        {t(`cars.${car.key}.${spec}`)}
                      </dd>
                    </div>
                  ))}
                </dl>

                <a
                  href="#apply"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-neon px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-neon-foreground transition hover:opacity-90"
                >
                  {t("cars.cta")}
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
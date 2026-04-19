import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { toast } from "sonner";

export function Apply() {
  const { t } = useI18n();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      toast.success(t("apply.success"));
      (e.target as HTMLFormElement).reset();
      setSubmitting(false);
    }, 600);
  };

  const inputCls =
    "h-12 w-full rounded-xl border border-border bg-background/60 px-4 text-sm outline-none transition placeholder:text-muted-foreground focus:border-neon focus:bg-background";

  return (
    <section id="apply" className="relative py-28 md:py-36">
      <div className="mx-auto w-[min(1100px,94%)]">
        <div className="grid gap-10 rounded-3xl border border-border bg-surface/50 p-7 md:grid-cols-[1fr_1.2fr] md:p-12">
          <div>
            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-px w-10 bg-neon" />
              {t("apply.kicker")}
            </div>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              {t("apply.title")}
            </h2>
            <p className="mt-5 max-w-md text-muted-foreground">{t("apply.sub")}</p>

            <div className="mt-10 space-y-4 border-t border-border pt-8">
              <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-neon" /> support@fleetos.ee
              </div>
              <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-neon" /> +372 5000 0000
              </div>
              <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-neon" /> Tallinn · Tartu · Pärnu
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <input required className={inputCls + " md:col-span-2"} placeholder={t("apply.name")} />
            <input required className={inputCls} placeholder={t("apply.phone")} type="tel" />
            <input required className={inputCls} placeholder={t("apply.email")} type="email" />
            <input required className={inputCls} placeholder={t("apply.city")} />
            <select required defaultValue="" className={inputCls}>
              <option value="" disabled>
                {t("apply.platform")}
              </option>
              <option value="bolt">Bolt</option>
              <option value="wolt">Wolt</option>
              <option value="both">Bolt + Wolt</option>
            </select>
            <select required defaultValue="" className={inputCls + " md:col-span-2"}>
              <option value="" disabled>
                {t("apply.transport")}
              </option>
              <option value="scooter">{t("apply.transport.scooter")}</option>
              <option value="bike">{t("apply.transport.bike")}</option>
              <option value="car">{t("apply.transport.car")}</option>
              <option value="rent">{t("apply.transport.rent")}</option>
            </select>
            <button
              type="submit"
              disabled={submitting}
              className="mt-2 inline-flex h-12 items-center justify-center rounded-xl bg-neon px-6 text-sm font-semibold uppercase tracking-wider text-neon-foreground transition glow-neon hover:opacity-90 disabled:opacity-60 md:col-span-2"
            >
              {t("apply.submit")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

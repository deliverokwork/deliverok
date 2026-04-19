import { useI18n } from "@/lib/i18n";
import { LangSwitch } from "./LangSwitch";

export function Navbar() {
  const { t } = useI18n();
  const links = [
    { href: "#services", label: t("nav.services") },
    { href: "#pricing", label: t("nav.pricing") },
    { href: "#about", label: t("nav.about") },
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-4 flex w-[min(1200px,94%)] items-center justify-between rounded-full border border-border bg-background/60 px-4 py-2.5 backdrop-blur-xl md:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-red-accent glow-red">
            <span className="h-2 w-2 rounded-full bg-neon" />
          </span>
          <span className="font-display text-base font-semibold tracking-tight">
            deliver<span className="text-red-accent">o</span>k
          </span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <LangSwitch />
          <a
            href="#apply"
            className="hidden rounded-full bg-neon px-4 py-2 text-xs font-semibold uppercase tracking-wider text-neon-foreground transition hover:opacity-90 sm:inline-block"
          >
            {t("nav.apply")}
          </a>
        </div>
      </div>
    </header>
  );
}

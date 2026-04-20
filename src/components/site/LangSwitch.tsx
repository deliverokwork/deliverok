import { useI18n, type Lang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const LANGS: Lang[] = ["uk", "en", "sk"];

export function LangSwitch() {
  const { lang, setLang } = useI18n();
  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-border bg-surface/60 p-1 backdrop-blur">
      {LANGS.map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={cn(
            "h-7 rounded-full px-3 text-xs font-mono uppercase tracking-widest transition",
            lang === l
              ? "bg-neon text-neon-foreground"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

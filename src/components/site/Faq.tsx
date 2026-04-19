import { useI18n } from "@/lib/i18n";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Faq() {
  const { t } = useI18n();
  const items = ["1", "2", "3", "4", "5", "6"];

  return (
    <section id="faq" className="relative py-28 md:py-36">
      <div className="mx-auto w-[min(1100px,94%)]">
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="h-px w-10 bg-neon" />
          {t("faq.kicker")}
        </div>
        <h2 className="mt-6 max-w-3xl font-display text-[clamp(1.875rem,4.5vw,3.5rem)] font-semibold leading-[1.05] tracking-tight">
          {t("faq.title")}
        </h2>

        <Accordion type="single" collapsible className="mt-12 w-full">
          {items.map((i) => (
            <AccordionItem
              key={i}
              value={i}
              className="border-b border-border"
            >
              <AccordionTrigger className="py-6 text-left font-display text-lg font-medium hover:text-neon hover:no-underline md:text-xl">
                {t(`faq.q${i}`)}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-base text-muted-foreground">
                {t(`faq.a${i}`)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

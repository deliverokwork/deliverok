import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Fleet } from "@/components/site/Fleet";
import { Services } from "@/components/site/Services";
import { Taxi } from "@/components/site/Taxi";
import { DriverCars } from "@/components/site/DriverCars";
import { Faq } from "@/components/site/Faq";
import { Apply } from "@/components/site/Apply";
import { Footer } from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Deliverok — кур’єрська та таксі-флотилія у Братиславі" },
      {
        name: "description",
        content:
          "Deliverok — транспорт і підтримка для кур’єрів та водіїв у Братиславі. Реєстрація, оренда та щотижневі виплати.",
      },
      { property: "og:title", content: "Deliverok — кур’єрська та таксі-флотилія у Братиславі" },
      { property: "og:description", content: "Транспорт і підтримка для кур’єрів та водіїв у Братиславі." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  return (
    <I18nProvider>
      <div className="relative min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <Hero />
          <Fleet />
          <Services />
          <Taxi />
          <DriverCars />
          <Faq />
          <Apply />
        </main>
        <Footer />
        <Toaster theme="dark" position="top-center" />
      </div>
    </I18nProvider>
  );
}

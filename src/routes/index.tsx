import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Pricing } from "@/components/site/Pricing";
import { Apply } from "@/components/site/Apply";
import { Footer } from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Deliverok — Bolt & Wolt courier fleet in Estonia" },
      {
        name: "description",
        content:
          "Deliverok — courier fleet for Bolt and Wolt in Estonia. Fast onboarding, weekly payouts, 24/7 support, vehicle rental.",
      },
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
          <Services />
          <Pricing />
          <Apply />
        </main>
        <Footer />
        <Toaster theme="dark" position="top-center" />
      </div>
    </I18nProvider>
  );
}

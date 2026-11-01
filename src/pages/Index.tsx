import Hero from "@/components/Hero";
import ProductGallery from "@/components/ProductGallery";
import LuxuryFooter from "@/components/LuxuryFooter";
import TopToolbar from "@/components/TopToolbar";
import FloatingCTA from "@/components/FloatingCTA";
import FruitDesserts from "@/components/FruitDesserts";

import { t } from "@/content/siteText";

const Index = () => {

  return (
    <div className="min-h-screen bg-background texture-paper relative">
      {/* Skip to content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-1/2 focus:-translate-x-1/2 focus:z-[10000] focus:bg-primary focus:text-primary-foreground focus:px-6 focus:py-3 focus:rounded-lg focus:shadow-lg focus:text-sm focus:font-medium"
      >
        {t('ui.skipToContent')}
      </a>
      <TopToolbar />
      <FloatingCTA />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <ProductGallery />
        <FruitDesserts />
      </main>
      <LuxuryFooter />
    </div>
  );
};

export default Index;

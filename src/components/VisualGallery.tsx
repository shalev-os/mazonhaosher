import { useEffect, useState } from "react";
import { ArrowUpLeft, MessageCircle, Plus } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { products } from "@/content/catalogue";
import CataloguePhoto from "@/components/CataloguePhoto";

const filters = ["הכל", "עוגות מעוצבות", "עוגות פס", "קינוחי פירות", "מארזים", "עוגיות"] as const;
type Filter = (typeof filters)[number];
type Product = (typeof products)[number];
const filterHashes: Record<Filter, string> = {
  "הכל": "#gallery",
  "עוגות מעוצבות": "#gallery/cakes",
  "עוגות פס": "#gallery/loaf",
  "קינוחי פירות": "#gallery/fruit",
  "מארזים": "#gallery/boxes",
  "עוגיות": "#gallery/cookies",
};

function filterFromHash(hash: string): Filter | undefined {
  return filters.find((filter) => filterHashes[filter] === hash);
}

function ProductTile({ product, index }: { product: Product; index: number }) {
  const message = encodeURIComponent(`היי, ראיתי באתר את ${product.alt} ואשמח לתאם הזמנה ולקבל פרטים.`);

  return (
    <article className="atelier-product">
      <Dialog>
        <DialogTrigger asChild>
          <button type="button" className="atelier-product-trigger" aria-label={`לצפייה בתמונה ובפרטים: ${product.label}`}>
            <span className={`atelier-product-photo ${product.originalCrop ? "is-original-crop" : ""}`}>
              <CataloguePhoto product={product} />
              <span className="atelier-product-zoom" aria-hidden="true"><Plus size={20} /></span>
            </span>
            <span className="atelier-product-meta">
              <span><span className="atelier-product-category">{product.category}</span><span className="atelier-product-name">{product.label}</span></span>
              <span className="atelier-product-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            </span>
          </button>
        </DialogTrigger>
        <DialogContent dir="rtl" className="atelier-product-dialog max-h-[92dvh] w-[calc(100%-1.5rem)] max-w-5xl overflow-y-auto rounded-2xl border-0 bg-[#faf6ee] p-5 sm:p-7">
          <div className="grid gap-6 md:grid-cols-[1.2fr_1fr] md:items-center">
            <div className={`atelier-dialog-photo overflow-hidden rounded-xl bg-[#eae6de] ${product.originalCrop ? "is-original-crop" : ""}`}>
              <CataloguePhoto product={product} enlarged />
            </div>
            <div className="text-right md:py-10">
              <p className="atelier-eyebrow">{product.category}</p>
              <DialogTitle className="atelier-heading mt-3 text-3xl sm:text-4xl">{product.label}</DialogTitle>
              <DialogDescription className="mt-5 text-base leading-8 text-[#655d56]">{product.description} כל הזמנה בתיאום מראש.</DialogDescription>
              <a href={`https://wa.me/972546791198?text=${message}`} target="_blank" rel="noopener noreferrer" className="atelier-button atelier-button-primary mt-7 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#632c40] px-5 text-sm font-semibold text-white transition hover:bg-[#4d2031] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#632c40]"><MessageCircle size={19} aria-hidden="true" />לפרטים על {product.label}<ArrowUpLeft size={18} aria-hidden="true" /></a>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </article>
  );
}

export default function VisualGallery() {
  const [activeFilter, setActiveFilter] = useState<Filter>(() => filterFromHash(window.location.hash) ?? "הכל");
  const visibleProducts = activeFilter === "הכל" ? products : products.filter((product) => product.category === activeFilter);

  useEffect(() => {
    let scrollFrame = 0;
    const syncCollectionLink = () => {
      const nextFilter = filterFromHash(window.location.hash);
      if (!nextFilter) return;
      setActiveFilter(nextFilter);
      cancelAnimationFrame(scrollFrame);
      scrollFrame = requestAnimationFrame(() => {
        document.getElementById("gallery")?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
      });
    };
    syncCollectionLink();
    window.addEventListener("hashchange", syncCollectionLink);
    return () => {
      cancelAnimationFrame(scrollFrame);
      window.removeEventListener("hashchange", syncCollectionLink);
    };
  }, []);

  const selectFilter = (filter: Filter) => {
    setActiveFilter(filter);
    window.history.replaceState(null, "", filterHashes[filter]);
  };

  return (
    <section id="gallery" className="atelier-catalogue" aria-labelledby="gallery-title">
      {filters.filter((filter) => filter !== "הכל").map((filter) => <span key={filter} id={filterHashes[filter].slice(1)} className="atelier-gallery-anchor" aria-hidden="true" />)}
      <div className="atelier-container">
        <div className="atelier-catalogue-heading">
          <div><p className="atelier-eyebrow">הקולקציה המתוקה</p><h2 id="gallery-title" className="atelier-heading">כל ביס, עולם משלו.</h2></div>
          <p className="atelier-catalogue-intro">עוגיות, עוגות וקינוחים. בחרו קטגוריה, פתחו תמונה מקרוב ומצאו את הכיוון שלכם.</p>
        </div>
        <div className="atelier-catalogue-toolbar">
        <div className="atelier-filters" role="group" aria-label="סינון הקטלוג לפי קטגוריה">
          {filters.map((filter) => (
            <button key={filter} type="button" onClick={() => selectFilter(filter)} aria-pressed={activeFilter === filter} className={`atelier-filter ${activeFilter === filter ? "is-active" : ""}`}>{filter}</button>
          ))}
        </div>
        <p className="atelier-catalogue-count" aria-live="polite" aria-atomic="true">{visibleProducts.length} תמונות<span className="sr-only"> בקטגוריית {activeFilter}</span></p>
        </div>
        <div className="atelier-product-grid">
          {visibleProducts.map((product, index) => <ProductTile key={product.alt} product={product} index={index} />)}
        </div>
        <div className="atelier-catalogue-note">
          <p>ראיתם משהו שאהבתם? מתחילים ממנו ומתאמים את כל הפרטים יחד.</p>
          <a href="https://wa.me/972546791198" target="_blank" rel="noopener noreferrer">בואו נדבר על ההזמנה<ArrowUpLeft size={18} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import bigale from "@/assets/cookie-bigale.jpg";
import kinder from "@/assets/cookie-kinder.jpg";
import matcha from "@/assets/cookie-matcha.jpg";
import redVelvet from "@/assets/cookie-red-velvet.jpg";
import tahini from "@/assets/cookie-tahini-new.jpg";
import sprinkles from "@/assets/cookie-sprinkles.jpg";
import cakeRound from "@/assets/cake-round.jpg";
import cakeCollection from "@/assets/cake-collection.jpg";
import dessertBox from "@/assets/dessert-box.jpg";
import fruitDesserts from "@/assets/fruit-desserts.jpg";
import fruitDessertsTray from "@/assets/fruit-desserts-tray.jpg";

const products = [
  { src: cakeRound, alt: "עוגה עגולה מעוצבת בעבודת יד", label: "עוגה מעוצבת", category: "עוגות מעוצבות", featured: true },
  { src: cakeCollection, alt: "מבחר עוגות פס וקינוחים מעוצבים", label: "עוגות פס וקינוחים", category: "עוגות פס" },
  { src: dessertBox, alt: "מארז קינוחים בעבודת יד", label: "מארז מתוק", category: "מארזים" },
  { src: fruitDesserts, alt: "קינוחי פירות בעבודת יד", label: "קינוחי פירות", category: "קינוחי פירות" },
  { src: fruitDessertsTray, alt: "מגשי קינוחי פירות צבעוניים", label: "מגשי פירות", category: "קינוחי פירות" },
  { src: kinder, alt: "עוגיית שוקולד וקינדר", label: "שוקולד וקינדר", category: "עוגיות" },
  { src: matcha, alt: "עוגיית מאצ'ה", label: "מאצ'ה", category: "עוגיות" },
  { src: redVelvet, alt: "עוגיית רד ולווט", label: "רד ולווט", category: "עוגיות" },
  { src: tahini, alt: "עוגיית טחינה", label: "טחינה", category: "עוגיות" },
  { src: sprinkles, alt: "עוגייה עם סוכריות", label: "סוכריות", category: "עוגיות" },
  { src: bigale, alt: "עוגיית בוטיק מעוצבת", label: "עוגיית בוטיק", category: "עוגיות" },
] as const;

const filters = ["הכל", "עוגות מעוצבות", "עוגות פס", "קינוחי פירות", "מארזים", "עוגיות"] as const;
type Filter = (typeof filters)[number];

export default function VisualGallery() {
  const [activeFilter, setActiveFilter] = useState<Filter>("הכל");
  const visibleProducts = activeFilter === "הכל" ? products : products.filter((product) => product.category === activeFilter);

  return (
    <section className="bg-[#fffaf4] py-20 sm:py-28" aria-labelledby="gallery-title">
      <div className="container mx-auto px-5">
        <div className="mb-10 flex flex-col gap-6 text-right sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div><p className="mb-3 text-sm font-semibold tracking-wide text-primary">קטלוג מצולם</p><h2 id="gallery-title" className="text-4xl text-[#3a2218] sm:text-5xl">בוחרים קטגוריה, מתאהבים בפרטים.</h2></div>
          <p className="max-w-sm leading-7 text-muted-foreground">לחצו על קטגוריה כדי לראות רק את מה שמעניין אתכם. כל הזמנה מתואמת אישית בוואטסאפ.</p>
        </div>
        <div className="mb-8 flex flex-wrap justify-end gap-2" role="group" aria-label="סינון הקטלוג">
          {filters.map((filter) => (
            <button key={filter} type="button" onClick={() => setActiveFilter(filter)} aria-pressed={activeFilter === filter} className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${activeFilter === filter ? "border-[#6b4635] bg-[#6b4635] text-white shadow-sm" : "border-[#e6d4c3] bg-white text-[#6b4635] hover:border-[#6b4635] hover:bg-[#fff6ee]"}`}>{filter}</button>
          ))}
        </div>
        <p className="sr-only" aria-live="polite">מוצגים {visibleProducts.length} פריטים בקטגוריית {activeFilter}</p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4">
          {visibleProducts.map((product) => (
            <figure key={product.alt} className={`group relative aspect-square overflow-hidden rounded-2xl bg-[#eadbcb] ${product.featured && activeFilter === "הכל" ? "sm:col-span-2 sm:row-span-2 sm:aspect-auto" : ""}`}>
              <img src={product.src} alt={product.alt} loading="lazy" decoding="async" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent px-4 pb-4 pt-12 text-right text-sm font-semibold text-white">{product.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

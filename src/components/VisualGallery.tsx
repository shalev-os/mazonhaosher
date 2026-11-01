import bigale from "@/assets/cookie-bigale.jpg";
import kinder from "@/assets/cookie-kinder.jpg";
import matcha from "@/assets/cookie-matcha.jpg";
import redVelvet from "@/assets/cookie-red-velvet.jpg";
import tahini from "@/assets/cookie-tahini-new.jpg";
import sprinkles from "@/assets/cookie-sprinkles.jpg";
import cakeRound from "@/assets/cake-round.jpg";
import cakeCollection from "@/assets/cake-collection.jpg";
import dessertBox from "@/assets/dessert-box.jpg";

const images = [
  { src: cakeRound, alt: "עוגה עגולה מעוצבת בעבודת יד", category: "עוגות מעוצבות", span: "md:col-span-2 md:row-span-2" },
  { src: cakeCollection, alt: "מבחר עוגות פס וקינוחים מעוצבים", category: "עוגות פס וקינוחים", span: "md:row-span-2" },
  { src: dessertBox, alt: "מארז קינוחים בעבודת יד", category: "מארזים מתוקים", span: "" },
  { src: kinder, alt: "עוגיית שוקולד וקינדר", category: "עוגיות", span: "" },
  { src: matcha, alt: "עוגיית מאצ'ה", category: "עוגיות", span: "" },
  { src: redVelvet, alt: "עוגיית רד ולווט", category: "עוגיות", span: "" },
  { src: tahini, alt: "עוגיית טחינה", category: "עוגיות", span: "" },
  { src: sprinkles, alt: "עוגייה עם סוכריות", category: "עוגיות", span: "md:col-span-2" },
  { src: bigale, alt: "עוגיית בוטיק מעוצבת", category: "עוגיות", span: "" },
];

const collections = ["עוגות מעוצבות", "עוגות פס", "קינוחי פירות", "פחזניות", "מארזים", "קינוחי חגים"];

export default function VisualGallery() {
  return (
    <section className="bg-[#fffaf4] py-20 sm:py-28" aria-labelledby="gallery-title">
      <div className="container mx-auto px-5">
        <div className="mb-10 flex flex-col gap-6 text-right sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div><p className="mb-3 text-sm font-semibold tracking-wide text-primary">קטלוג מצולם</p><h2 id="gallery-title" className="text-4xl text-[#3a2218] sm:text-5xl">כל דבר במקום שלו.</h2></div>
          <p className="max-w-sm leading-7 text-muted-foreground">עוגות, קינוחים, עוגיות ומארזים — כל הזמנה מתואמת אישית בוואטסאפ.</p>
        </div>
        <div className="mb-8 flex flex-wrap justify-end gap-2" aria-label="קטגוריות קינוחים">
          {collections.map((collection) => <span key={collection} className="rounded-full border border-[#e6d4c3] bg-white px-4 py-2 text-sm font-medium text-[#6b4635]">{collection}</span>)}
        </div>
        <div className="grid auto-rows-[190px] grid-cols-2 gap-3 sm:auto-rows-[240px] md:grid-cols-4 md:gap-4">
          {images.map((image) => <figure key={image.alt} className={`group relative overflow-hidden rounded-2xl bg-[#eadbcb] ${image.span}`}><img src={image.src} alt={image.alt} loading="lazy" decoding="async" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /><figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/35 to-transparent px-4 pb-4 pt-12 text-right text-sm font-semibold text-white">{image.category}</figcaption></figure>)}
        </div>
      </div>
    </section>
  );
}

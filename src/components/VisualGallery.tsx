import bigale from "@/assets/cookie-bigale.jpg";
import kinder from "@/assets/cookie-kinder.jpg";
import matcha from "@/assets/cookie-matcha.jpg";
import redVelvet from "@/assets/cookie-red-velvet.jpg";
import tahini from "@/assets/cookie-tahini-new.jpg";
import sprinkles from "@/assets/cookie-sprinkles.jpg";
import cakeRound from "@/assets/cake-round.jpg";
import cakeCollection from "@/assets/cake-collection.jpg";
import dessertBox from "@/assets/dessert-box.jpg";

const cakesAndDesserts = [
  { src: cakeRound, alt: "עוגה עגולה מעוצבת בעבודת יד", label: "עוגות מעוצבות", span: "sm:col-span-2" },
  { src: cakeCollection, alt: "מבחר עוגות פס וקינוחים מעוצבים", label: "עוגות פס וקינוחים", span: "" },
  { src: dessertBox, alt: "מארז קינוחים בעבודת יד", label: "מארזים מתוקים", span: "" },
];

const cookies = [
  { src: kinder, alt: "עוגיית שוקולד וקינדר", label: "שוקולד וקינדר" },
  { src: matcha, alt: "עוגיית מאצ'ה", label: "מאצ'ה" },
  { src: redVelvet, alt: "עוגיית רד ולווט", label: "רד ולווט" },
  { src: tahini, alt: "עוגיית טחינה", label: "טחינה" },
  { src: sprinkles, alt: "עוגייה עם סוכריות", label: "סוכריות" },
  { src: bigale, alt: "עוגיית בוטיק מעוצבת", label: "עוגיית בוטיק" },
];

function ProductCard({ image, className = "" }: { image: { src: string; alt: string; label: string }; className?: string }) {
  return <figure className={`group relative overflow-hidden rounded-2xl bg-[#eadbcb] ${className}`}><img src={image.src} alt={image.alt} loading="lazy" decoding="async" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /><figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent px-4 pb-4 pt-12 text-right text-sm font-semibold text-white">{image.label}</figcaption></figure>;
}

export default function VisualGallery() {
  return (
    <section className="bg-[#fffaf4] py-20 sm:py-28" aria-labelledby="gallery-title">
      <div className="container mx-auto px-5">
        <div className="mb-10 flex flex-col gap-6 text-right sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div><p className="mb-3 text-sm font-semibold tracking-wide text-primary">קטלוג מצולם</p><h2 id="gallery-title" className="text-4xl text-[#3a2218] sm:text-5xl">בוחרים קטגוריה, מתאהבים בפרטים.</h2></div>
          <p className="max-w-sm leading-7 text-muted-foreground">הפרדנו את הקולקציות כדי שיהיה קל לראות בדיוק מה מתאים לאירוע שלכם.</p>
        </div>
        <div className="space-y-12 sm:space-y-16">
          <section aria-labelledby="cakes-title">
            <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2 border-b border-[#eadbcb] pb-3">
              <h3 id="cakes-title" className="text-2xl font-semibold text-[#3a2218]">עוגות, קינוחים ומארזים</h3>
              <p className="text-sm text-muted-foreground">הזמנה אישית בתיאום מראש</p>
            </div>
            <div className="grid auto-rows-[220px] grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
              {cakesAndDesserts.map((image) => <ProductCard key={image.alt} image={image} className={image.span} />)}
            </div>
          </section>
          <section aria-labelledby="cookies-title">
            <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2 border-b border-[#eadbcb] pb-3">
              <h3 id="cookies-title" className="text-2xl font-semibold text-[#3a2218]">עוגיות בוטיק</h3>
              <p className="text-sm text-muted-foreground">כל אחת עם אופי משלה</p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6 md:gap-4">
              {cookies.map((image) => <ProductCard key={image.alt} image={image} className="aspect-square" />)}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

import { ArrowUpLeft, MessageCircle } from "lucide-react";
import chocolate from "@/assets/cookie-chocolate.jpg";
import pistachio from "@/assets/cookie-pistachio.jpg";
import lotus from "@/assets/cookie-lotus.jpg";

const products = [
  { image: chocolate, name: "שוקולד", note: "עמוקה, עשירה ומנחמת" },
  { image: pistachio, name: "פיסטוק", note: "קלויה, עדינה ומפתיעה" },
  { image: lotus, name: "לוטוס", note: "קרמלית, פריכה ואהובה" },
];

export default function ProductGallery() {
  return (
    <section id="flavors" className="scroll-mt-20 bg-[#fffaf4] py-20 sm:py-28" aria-labelledby="flavors-title">
      <div className="container mx-auto px-5">
        <div className="mb-12 flex flex-col gap-5 border-b border-[#e9d9c7] pb-8 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl text-right"><p className="mb-3 text-sm font-semibold tracking-wide text-primary">הטעמים שלנו</p><h2 id="flavors-title" className="text-4xl text-[#3a2218] sm:text-5xl">בחרו את האושר שלכם.</h2></div>
          <p className="max-w-sm text-right leading-7 text-muted-foreground">שלוש נקודות פתיחה מתוקות. לחצו על טעם ונמשיך את השיחה בוואטסאפ.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3 md:gap-7">
          {products.map((product, index) => {
            const message = `היי, אשמח לפרטים על עוגיית ${product.name}.`;
            return <article key={product.name} className="group overflow-hidden rounded-[1.75rem] border border-[#eadbcb] bg-white shadow-[0_14px_35px_rgba(72,39,24,.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(72,39,24,.14)]">
              <div className="relative overflow-hidden"><span className="absolute right-5 top-5 z-10 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#3a2218] backdrop-blur">0{index + 1}</span><img src={product.image} alt={`עוגיית ${product.name}`} loading="lazy" decoding="async" className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" /></div>
              <div className="p-6"><p className="text-sm text-muted-foreground">{product.note}</p><h3 className="mt-1 text-3xl text-[#3a2218]">{product.name}</h3><a href={`https://wa.me/972546791198?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer" aria-label={`בירור והזמנת עוגיית ${product.name} בוואטסאפ — פתיחה בחלון חדש`} className="mt-6 inline-flex min-h-11 w-full items-center justify-between rounded-xl bg-[#3a2218] px-4 text-sm font-semibold text-white transition hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"><span className="inline-flex items-center gap-2"><MessageCircle size={17} aria-hidden="true" />בירור בוואטסאפ</span><ArrowUpLeft size={18} aria-hidden="true" /></a></div>
            </article>;
          })}
        </div>
      </div>
    </section>
  );
}

import { MessageCircle, Sparkles } from "lucide-react";
import fruitDesserts from "@/assets/fruit-desserts.jpg";
import fruitDessertsTray from "@/assets/fruit-desserts-tray.jpg";
import fruitDessertsFlavors from "@/assets/fruit-desserts-flavors.jpg";

const flavors = ["תות", "מנגו", "פסיפלורה", "תפוח", "פטל", "רימון", "פקאן"];

export default function FruitDesserts() {
  const message = encodeURIComponent("היי, אשמח לפרטים על קינוחי הפירות.");

  return (
    <section id="fruit-desserts" className="overflow-hidden bg-[#3a2218] py-20 text-white sm:py-28" aria-labelledby="fruit-desserts-title">
      <div className="container mx-auto grid items-center gap-10 px-5 lg:grid-cols-[1.08fr_.92fr] lg:gap-16">
        <div className="order-2 text-right lg:order-1">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#f7c86e]/35 bg-[#f7c86e]/10 px-4 py-2 text-sm text-[#f7d594]"><Sparkles size={16} aria-hidden="true" />גם קינוחי פירות</div>
          <h2 id="fruit-desserts-title" className="max-w-xl text-4xl leading-tight text-white sm:text-5xl">צבע, פרי והרבה שמחה בכל ביס.</h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/75 sm:text-lg">לצד העוגיות, אפשר להזמין גם קינוחי פירות מעוצבים בעבודת יד. בוחרים כיוון, מתייעצים בוואטסאפ ויוצרים משהו מיוחד.</p>
          <div className="mt-8 flex flex-wrap justify-end gap-2" aria-label="טעמי קינוחי פירות אפשריים">
            {flavors.map((flavor) => <span key={flavor} className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/90">{flavor}</span>)}
          </div>
          <a href={`https://wa.me/972546791198?text=${message}`} target="_blank" rel="noopener noreferrer" className="mt-9 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#f7c86e] px-6 font-semibold text-[#3a2218] transition hover:bg-[#ffe0a0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f7c86e]"><MessageCircle size={19} aria-hidden="true" />לפרטים על קינוחי פירות</a>
        </div>
        <div className="order-1 grid grid-cols-2 gap-3 lg:order-2">
          <figure className="col-span-2 overflow-hidden rounded-[2rem] border border-white/10 bg-[#513125] p-2 shadow-[0_22px_60px_rgba(0,0,0,.3)]"><img src={fruitDesserts} alt="מבחר קינוחי פירות בעבודת יד באריזות זהב" loading="lazy" decoding="async" className="aspect-[4/3] w-full rounded-[1.5rem] object-cover" /><figcaption className="px-4 py-4 text-right text-sm text-white/65">קינוחי פירות בעבודת יד · מזון האושר</figcaption></figure>
          <img src={fruitDessertsTray} alt="מגשי קינוחי פירות צבעוניים" loading="lazy" decoding="async" className="aspect-square w-full rounded-2xl object-cover shadow-[0_12px_30px_rgba(0,0,0,.18)]" />
          <img src={fruitDessertsFlavors} alt="מבחר טעמי קינוחי פירות" loading="lazy" decoding="async" className="aspect-square w-full rounded-2xl object-cover shadow-[0_12px_30px_rgba(0,0,0,.18)]" />
        </div>
      </div>
    </section>
  );
}

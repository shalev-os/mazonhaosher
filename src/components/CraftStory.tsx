import { ArrowLeft, Sparkles } from "lucide-react";
import cakeCollection from "@/assets/cake-collection.jpg";

const details = ["עבודת יד", "הזמנה מראש", "תיאום אישי"];

export default function CraftStory() {
  return (
    <section className="overflow-hidden bg-[#271712] py-20 text-white sm:py-28" aria-labelledby="craft-story-title">
      <div className="container mx-auto grid items-center gap-10 px-5 lg:grid-cols-[.95fr_1.05fr] lg:gap-20">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -inset-3 rounded-[2rem] border border-[#e0ae70]/25" aria-hidden="true" />
          <figure className="relative overflow-hidden rounded-[1.6rem] bg-[#4d2b20] p-2 shadow-[0_30px_70px_rgba(0,0,0,.32)]">
            <img src={cakeCollection} alt="מבחר עוגות וקינוחים בעבודת יד" loading="lazy" decoding="async" className="aspect-[5/4] w-full rounded-[1.2rem] object-cover" />
            <figcaption className="flex items-center justify-between gap-4 px-4 py-4 text-sm text-[#f7d594]"><span>מזון האושר</span><span className="text-white/55">הפרטים הקטנים עושים את ההבדל</span></figcaption>
          </figure>
        </div>
        <div className="order-1 text-right lg:order-2">
          <p className="mb-4 inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-[#f7d594]"><Sparkles size={16} aria-hidden="true" />מהלב אל השולחן</p>
          <h2 id="craft-story-title" className="max-w-xl text-4xl leading-tight sm:text-5xl">לא רק משהו מתוק.<br /><span className="text-[#f7c86e]">משהו שמרגיש אישי.</span></h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/72 sm:text-lg">בין אם מתחילים מעוגייה אהובה, קינוח פירות או עוגה לאירוע — בוחרים כיוון ומרכיבים יחד את הרגע המתאים.</p>
          <div className="mt-8 flex flex-wrap justify-end gap-2" aria-label="עקרונות ההזמנה">
            {details.map((detail) => <span key={detail} className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/85">{detail}</span>)}
          </div>
          <a href="#gallery" className="mt-9 inline-flex min-h-11 items-center gap-2 border-b border-[#f7c86e] pb-2 font-semibold text-[#f7d594] transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f7c86e]">לצפייה בכל הקולקציות<ArrowLeft size={18} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}

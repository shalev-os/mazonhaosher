import { ArrowLeft, MessageCircle, Sparkles } from "lucide-react";

const steps = [
  { number: "01", title: "בוחרים כיוון", text: "עוגיות, קינוחי פירות, עוגה או מארז מתוק." },
  { number: "02", title: "מדברים בוואטסאפ", text: "משתפים את הרעיון ומתאמים את הפרטים." },
  { number: "03", title: "יוצרים רגע מתוק", text: "כל הזמנה נעשית בעבודת יד ובתיאום מראש." },
];

export default function OrderJourney() {
  return (
    <section className="bg-[#f0e5d8] py-20 sm:py-28" aria-labelledby="journey-title">
      <div className="container mx-auto px-5">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end lg:gap-16">
          <div className="text-right">
            <p className="mb-3 inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-[#8b5b3d]"><Sparkles size={16} aria-hidden="true" />פשוט, אישי, מתוק</p>
            <h2 id="journey-title" className="max-w-md text-4xl text-[#3a2218] sm:text-5xl">כך הופכים רעיון קטן לאירוע טעים.</h2>
            <a href="https://wa.me/972546791198" target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#3a2218] px-6 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#5b3728] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3a2218]"><MessageCircle size={19} aria-hidden="true" />מתחילים בוואטסאפ<ArrowLeft size={18} aria-hidden="true" /></a>
          </div>
          <ol className="grid gap-3 sm:grid-cols-3 sm:gap-4">
            {steps.map((step) => <li key={step.number} className="rounded-2xl border border-[#ddc9b5] bg-[#fffaf4] p-6 text-right shadow-[0_12px_28px_rgba(74,43,27,.06)]"><span className="font-display text-3xl text-[#c08a56]">{step.number}</span><h3 className="mt-7 text-2xl text-[#3a2218]">{step.title}</h3><p className="mt-3 leading-7 text-muted-foreground">{step.text}</p></li>)}
          </ol>
        </div>
      </div>
    </section>
  );
}

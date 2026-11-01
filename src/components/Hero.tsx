import { ArrowDown, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-cookies.jpg";
import logo from "@/assets/logo.png";

const whatsappUrl = "https://wa.me/972546791198";

export default function Hero() {
  return (
    <section aria-label="מזון האושר — עוגיות בוטיק" className="relative isolate min-h-[760px] overflow-hidden bg-[#321c15] pt-28 sm:min-h-[720px] sm:pt-32">
      <img src={heroImage} alt="עוגיות קראמבל טריות מהתנור" fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover object-center" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(35,18,13,.94)_0%,rgba(35,18,13,.72)_42%,rgba(35,18,13,.24)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-[linear-gradient(0deg,rgba(35,18,13,.8),transparent)]" />
      <div className="container mx-auto flex min-h-[632px] items-end px-5 pb-16 sm:min-h-[588px] sm:pb-20 lg:items-center lg:pb-0">
        <div className="max-w-xl text-right text-white">
          <div className="mb-7 flex items-center gap-3 text-sm font-medium text-[#f5d6a1]"><span className="h-px w-9 bg-[#f5d6a1]/75" /><span>עוגיות בוטיק בעבודת יד</span></div>
          <img src={logo} alt="מזון האושר" className="mb-7 h-20 w-auto object-contain object-right sm:h-24" />
          <h1 className="max-w-lg font-display text-4xl leading-[1.18] sm:text-5xl lg:text-6xl">רגע קטן של<span className="block text-[#f7c86e]">אושר גדול.</span></h1>
          <p className="mt-6 max-w-md text-base leading-8 text-white/85 sm:text-lg">עוגיות נדיבות, קינוחי פירות ועוגות בעבודת יד — הכל בהזמנה מראש ובתיאום אישי.</p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#f7c86e] px-6 font-semibold text-[#3a2218] shadow-[0_12px_30px_rgba(0,0,0,.23)] transition hover:-translate-y-0.5 hover:bg-[#ffe0a0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f7c86e]"><MessageCircle size={19} aria-hidden="true" />לתיאום הזמנה בוואטסאפ</a>
            <a href="#flavors" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/35 px-6 font-medium text-white transition hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">לגלות את הטעמים<ArrowDown size={18} aria-hidden="true" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

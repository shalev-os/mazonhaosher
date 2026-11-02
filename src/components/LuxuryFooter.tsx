import { forwardRef } from "react";
import { ArrowUpLeft, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";

const LuxuryFooter = forwardRef<HTMLElement>((_, ref) => (
  <footer ref={ref} className="atelier-footer bg-[#302b27] text-[#faf6ee]" aria-label="מזון האושר — פרטי קשר וניווט">
    <div className="atelier-container py-14 sm:py-20">
      <div className="grid gap-10 border-b border-white/15 pb-12 md:grid-cols-[1.3fr_.7fr_1fr] md:gap-12">
        <div>
          <a href="#main-content" aria-label="מזון האושר — חזרה לראש העמוד" className="inline-flex rounded-xl bg-[#faf6ee] px-4 py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d7dfc9]"><img src={logo} alt="לוגו מזון האושר" loading="lazy" decoding="async" className="h-20 w-40 object-contain" /></a>
          <p className="mt-6 max-w-xs text-sm leading-7 text-[#faf6ee]/70">עוגיות, קינוחים ועוגות בעבודת יד. לרגע קטן לעצמכם, למתנה או לשולחן שרוצים לשמח.</p>
        </div>

        <nav aria-label="ניווט בתחתית העמוד">
          <h2 className="mb-5 text-sm font-semibold text-[#d7dfc9]">לגלות עוד</h2>
          <ul className="space-y-1 text-sm text-[#faf6ee]/80">
            <li><a href="#collections" className="inline-flex min-h-10 items-center hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d7dfc9]">הקולקציות שלנו</a></li>
            <li><a href="#gallery" className="inline-flex min-h-10 items-center hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d7dfc9]">הקטלוג המצולם</a></li>
            <li><a href="#ordering" className="inline-flex min-h-10 items-center hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d7dfc9]">איך מזמינים</a></li>
          </ul>
        </nav>

        <div>
          <h2 className="mb-5 text-sm font-semibold text-[#d7dfc9]">משהו מתוק מתחיל בשיחה</h2>
          <p className="max-w-xs text-sm leading-7 text-[#faf6ee]/70">כל הזמנה בתיאום מראש. ספרו לנו מה מתחשק לכם, ונתאם יחד את הפרטים.</p>
          <a href="https://wa.me/972546791198" target="_blank" rel="noopener noreferrer" aria-label="לתיאום הזמנה בוואטסאפ במספר 054-6791198 — נפתח בחלון חדש" className="mt-5 inline-flex min-h-12 items-center gap-3 border-b border-[#d7dfc9]/60 pb-1 text-base font-medium text-[#faf6ee] transition-colors hover:text-[#d7dfc9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d7dfc9]"><MessageCircle size={20} aria-hidden="true" /><span dir="ltr">054-6791198</span><ArrowUpLeft size={18} aria-hidden="true" /></a>
        </div>
      </div>

      <div className="flex flex-col gap-3 pt-6 text-xs text-[#faf6ee]/50 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} מזון האושר</p>
        <p>עבודת יד. הזמנה מראש. רגע של אושר.</p>
      </div>
    </div>
  </footer>
));

LuxuryFooter.displayName = "LuxuryFooter";

export default LuxuryFooter;

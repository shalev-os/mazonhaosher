import { forwardRef } from "react";
import { MessageCircle } from "lucide-react";
import { t } from "@/content/siteText";
import logo from "@/assets/logo.png";

const LuxuryFooter = forwardRef<HTMLElement>((_, ref) => {

  return (
    <footer ref={ref} role="contentinfo" aria-label={t('ui.brandName')} className="relative overflow-hidden bg-[#271712] py-16 text-white sm:py-20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-[#e0ae70] to-transparent" aria-hidden="true" />
      <div className="container mx-auto px-5">
        <div className="grid gap-10 text-right sm:grid-cols-[1fr_auto] sm:items-end">
          <div>
            <img src={logo} alt={`לוגו ${t('ui.brandName')}`} className="h-16 w-auto brightness-0 invert" loading="lazy" />
            <p className="mt-5 max-w-sm leading-7 text-white/65">עוגיות, קינוחים ועוגות בעבודת יד — בהזמנה מראש ובתיאום אישי.</p>
          </div>
          <div className="sm:text-left">
            <a href="https://wa.me/972546791198" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#e0ae70]/45 px-5 text-sm font-semibold text-[#f7d594] transition hover:bg-[#e0ae70] hover:text-[#271712]"><MessageCircle size={18} aria-hidden="true" />לתיאום הזמנה בוואטסאפ</a>
            <p className="mt-5 text-xs tracking-wide text-white/40">© {t('ui.brandName')} 2026</p>
          </div>
        </div>
      </div>
    </footer>
  );
});

LuxuryFooter.displayName = "LuxuryFooter";

export default LuxuryFooter;

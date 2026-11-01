import { forwardRef } from "react";
import { t } from "@/content/siteText";
import logo from "@/assets/logo.png";

const LuxuryFooter = forwardRef<HTMLElement>((_, ref) => {

  return (
    <footer ref={ref} role="contentinfo" aria-label={t('ui.brandName')} className="relative py-16 overflow-hidden">
      {/* Top border - golden gradient — decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-0.5" aria-hidden="true"
        style={{ background: 'linear-gradient(90deg, transparent, hsl(40,95%,50%), transparent)' }}
      />

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <img
            src={logo}
            alt={`לוגו ${t('ui.brandName')}`}
            className="h-20 w-auto"
            loading="lazy"
          />

          {/* Copyright */}
          <p className="text-sm text-muted-foreground font-light tracking-widest uppercase">
            © {t('ui.brandName')} 2026
          </p>
        </div>
      </div>
    </footer>
  );
});

LuxuryFooter.displayName = "LuxuryFooter";

export default LuxuryFooter;

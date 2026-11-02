import { MessageCircle } from 'lucide-react';
import logo from '@/assets/logo.png';

export default function TopToolbar() {
  return (
    <nav
      aria-label="ניווט ראשי"
      className="fixed inset-x-0 top-3 z-50 px-3 sm:top-4 sm:px-6"
    >
      <div className="relative mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-1 rounded-2xl border border-primary/15 bg-card/95 p-2 shadow-[0_8px_32px_hsl(20_25%_12%_/_0.12)] backdrop-blur-xl sm:gap-2 sm:rounded-3xl sm:px-4 sm:py-3 lg:grid-cols-[1fr_auto_1fr]">
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center font-display text-base font-semibold text-primary sm:hidden">
          מזון האושר
        </span>
        <a
          href="/#main-content"
          aria-label="מזון האושר — לעמוד הבית"
          className="hidden min-h-11 min-w-0 items-center gap-3 rounded-xl px-1 text-primary transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:flex sm:w-full sm:px-2 sm:text-foreground"
        >
          <span className="hidden h-11 w-16 items-center justify-center overflow-hidden rounded-2xl bg-[#fff6ee] sm:flex"><img src={logo} alt="" className="h-12 w-auto max-w-none" /></span>
          <span className="min-w-0 text-right">
            <span className="block truncate whitespace-nowrap font-display text-sm font-semibold leading-tight sm:text-xl">מזון האושר</span>
            <span className="mt-1 hidden text-xs text-muted-foreground sm:block">עוגיות בוטיק בעבודת יד</span>
          </span>
        </a>

        <div className="flex shrink-0 items-center gap-1">
          <a
            href="/#main-content"
            className="hidden min-h-11 items-center rounded-xl px-4 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary lg:inline-flex"
          >
            הבית
          </a>
          <a
            href="/#flavors"
            className="hidden min-h-11 items-center whitespace-nowrap rounded-xl px-2 text-xs font-medium text-foreground transition-colors hover:bg-primary/10 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary sm:inline-flex sm:px-4 sm:text-sm"
          >
            הטעמים שלנו
          </a>
        </div>

        <a
          href="https://wa.me/972546791198"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="להזמנה בוואטסאפ — נפתח בחלון חדש"
          className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 justify-self-end whitespace-nowrap rounded-xl bg-primary px-3 text-xs font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:rounded-2xl sm:px-5 sm:text-sm"
        >
          <MessageCircle size={18} aria-hidden="true" className="hidden sm:block" />
          <span className="sm:hidden">הזמנה</span>
          <span className="hidden sm:inline">להזמנה בוואטסאפ</span>
        </a>
      </div>
    </nav>
  );
}

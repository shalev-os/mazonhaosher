import { useEffect, useRef, useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navigation = [
  { href: "#collections", label: "הקולקציות" },
  { href: "#gallery", label: "הקטלוג" },
  { href: "#ordering", label: "איך מזמינים" },
];

export default function TopToolbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const handleOutsideClick = (event: PointerEvent) => {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handleOutsideClick);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handleOutsideClick);
    };
  }, [menuOpen]);

  return (
    <header ref={headerRef} className="atelier-header sticky top-0 z-50 border-b border-[#302b27]/10 bg-[#faf6ee] text-[#302b27]">
      <div className="atelier-container flex min-h-[82px] items-center justify-between gap-4">
        <a href="#main-content" aria-label="מזון האושר — לעמוד הבית" onClick={() => setMenuOpen(false)} className="flex min-w-0 items-center gap-3 py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#632c40]">
          <img src={logo} alt="" className="h-14 w-24 shrink-0 object-contain sm:h-16 sm:w-28" />
          <span className="hidden border-r border-[#302b27]/15 pr-3 text-right sm:block">
            <span className="block text-lg font-semibold leading-tight">מזון האושר</span>
            <span className="mt-1 block text-[11px] tracking-wide text-[#75665f]">עוגיות · קינוחים · עוגות</span>
          </span>
        </a>

        <nav aria-label="ניווט ראשי" className="hidden items-center gap-7 text-sm font-medium md:flex">
          {navigation.map((item) => <a key={item.href} href={item.href} className="border-b border-transparent py-3 transition-colors hover:border-[#632c40] hover:text-[#632c40] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#632c40]">{item.label}</a>)}
        </nav>

        <div className="flex items-center gap-2">
          <a href="https://wa.me/972546791198" target="_blank" rel="noopener noreferrer" aria-label="לתיאום הזמנה בוואטסאפ — נפתח בחלון חדש" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[#632c40] px-4 text-xs font-semibold text-[#632c40] transition-colors hover:bg-[#632c40] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#632c40] sm:px-5 sm:text-sm">
            <MessageCircle size={17} aria-hidden="true" />
            <span className="sm:hidden">לתיאום הזמנה</span><span className="hidden sm:inline">נדבר על משהו מתוק</span>
          </a>
          <button ref={menuButtonRef} type="button" aria-label={menuOpen ? "סגירת התפריט" : "פתיחת התפריט"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen((open) => !open)} className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[#632c40] transition-colors hover:bg-[#632c40]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#632c40] md:hidden">
            {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>
      {menuOpen && <nav id="mobile-navigation" aria-label="ניווט במובייל" className="absolute inset-x-0 top-full border-b border-[#302b27]/10 bg-[#faf6ee] shadow-[0_18px_25px_rgba(48,43,39,.08)] md:hidden"><div className="atelier-container flex flex-col py-4">{navigation.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="border-b border-[#302b27]/10 py-4 text-base font-medium text-[#302b27] last:border-0 hover:text-[#632c40] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#632c40]">{item.label}</a>)}</div></nav>}
    </header>
  );
}

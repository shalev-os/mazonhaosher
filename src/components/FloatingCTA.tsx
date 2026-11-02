import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frame = 0;
    const updateVisibility = () => {
      const hero = document.querySelector("main > section");
      const footer = document.querySelector("footer");
      const pastHero = hero ? hero.getBoundingClientRect().bottom < 90 : window.scrollY > window.innerHeight;
      const nearFooter = footer ? footer.getBoundingClientRect().top < window.innerHeight + 50 : false;
      setVisible(pastHero && !nearFooter);
      frame = 0;
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateVisibility);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    updateVisibility();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <a href="https://wa.me/972546791198" target="_blank" rel="noopener noreferrer" aria-label="לתיאום הזמנה בוואטסאפ — נפתח בחלון חדש" tabIndex={visible ? 0 : -1} aria-hidden={!visible} className={`atelier-mobile-cta fixed bottom-5 right-5 z-40 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#632c40] px-5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(48,43,39,.2)] transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#632c40] md:hidden ${visible ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}><MessageCircle size={19} aria-hidden="true" />לתיאום הזמנה</a>
  );
}

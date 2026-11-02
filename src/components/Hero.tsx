import { ArrowDown, ArrowUpLeft, Flower2 } from "lucide-react";
import cookies from "@/assets/cookies-collection.jpg";
import fruit from "@/assets/fruit-desserts.jpg";

export default function Hero() {
  return (
    <section className="atelier-hero" aria-labelledby="hero-title">
      <div className="atelier-container atelier-hero-grid">
        <div className="atelier-hero-copy">
          <p className="atelier-eyebrow"><span className="atelier-dot" />מזון האושר · הקונדיטוריה של אלמוג</p>
          <h1 id="hero-title">קצת מתוק.<br /><em>הרבה אושר.</em></h1>
          <p className="atelier-hero-description">עוגיות נדיבות, עוגות וקינוחים עם אופי.<br />בעבודת יד, בהזמנה מראש, ובדיוק לרגע שלכם.</p>
          <div className="atelier-hero-actions">
            <a href="#collections" className="atelier-button">מגלים את הקולקציות<ArrowUpLeft size={19} aria-hidden="true" /></a>
            <a href="https://wa.me/972546791198" target="_blank" rel="noopener noreferrer" className="atelier-text-link">מתייעצים עם אלמוג</a>
          </div>
          <div className="atelier-hero-footnote"><span>נוצר בידיים. נבחר מהלב.</span><a href="#collections" aria-label="גלילה לקולקציות"><ArrowDown size={18} aria-hidden="true" /></a></div>
        </div>
        <div className="atelier-hero-visual">
          <img src={cookies} alt="העוגיות של מזון האושר במבחר ציפויים בתבניות זהב" width="1732" height="1299" fetchPriority="high" className="atelier-hero-photo" />
          <div className="atelier-seal"><Flower2 size={26} strokeWidth={1.2} aria-hidden="true" /><span>עבודת יד<br />והמון אהבה</span></div>
          <a href="#fruit-desserts" className="atelier-hero-small"><img src={fruit} width="810" height="540" alt="קינוחי פירות צבעוניים בעבודת יד" /><span>וגם משהו קצת אחר<ArrowUpLeft size={16} aria-hidden="true" /></span></a>
        </div>
      </div>
      <div className="atelier-word-strip" aria-label="מה מכינים במזון האושר"><span>עוגיות בוטיק</span><Flower2 aria-hidden="true" /><span>עוגות מעוצבות</span><Flower2 aria-hidden="true" /><span>קינוחי פירות</span><Flower2 aria-hidden="true" /><span>מארזים מתוקים</span></div>
    </section>
  );
}

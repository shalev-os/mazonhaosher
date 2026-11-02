import { ArrowUpLeft } from "lucide-react";
import collection from "@/assets/cookies-collection-3.jpg";

export default function ProductGallery() {
  return (
    <section id="flavors" className="atelier-signature" aria-labelledby="flavors-title">
      <div className="atelier-container atelier-signature-grid">
        <div className="atelier-signature-photo"><img src={collection} alt="שורות של עוגיות בעבודת יד: שוקולד, סוכריות, פיסטוק וציפויים נוספים" width="1732" height="1386" loading="lazy" decoding="async" /></div>
        <div className="atelier-signature-copy"><p className="atelier-eyebrow">מהמבחר של אלמוג</p><h2 id="flavors-title" className="atelier-heading">עוגייה אחת.<br /><em>כל כך הרבה אופי.</em></h2><p>קינדר ובמבה אדומה, קורנפלקס ובייגלה — שילובים מתוך הקולקציה של אלמוג. בוחרים כיוון מהצילומים ומתאמים יחד מה מתאים להזמנה שלכם.</p><div className="atelier-taste-list"><span>קינדר</span><span>במבה אדומה</span><span>קורנפלקס</span><span>בייגלה</span></div><a href="#gallery/cookies" className="atelier-text-link">למבחר של אלמוג<ArrowUpLeft size={18} aria-hidden="true" /></a></div>
      </div>
    </section>
  );
}

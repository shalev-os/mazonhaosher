import { ArrowUpLeft, MessageCircle, Sparkles } from "lucide-react";
import collectionPoster from "@/assets/hanukkah-2026-original.jpg";

const flavors = [
  { name: "קפה", description: "לאוהבי הטעמים העמוקים" },
  { name: "קינדר", description: "פינוק שאי אפשר לעמוד בפניו" },
  { name: "שוקולד", description: "הקלאסיקה שתמיד מנצחת" },
  { name: "פיסטוק", description: "כי קצת יוקרה אף פעם לא הזיקה" },
  { name: "ריבת תות", description: "מהקלאסיקות האהובות" },
  { name: "ריבת חלב", description: "מהקלאסיקות האהובות" },
];

const orderMessage = encodeURIComponent("היי אלמוג, ראיתי באתר את קולקציית הסופגניות 2026 ואשמח לקבל פרטים ולתאם הזמנה לחנוכה.");

export default function HanukkahCollection() {
  return (
    <section id="hanukkah-2026" className="atelier-hanukkah" aria-labelledby="hanukkah-title">
      <div className="atelier-container atelier-hanukkah-grid">
        <div className="atelier-hanukkah-copy">
          <p className="atelier-eyebrow"><Sparkles size={18} strokeWidth={1.4} aria-hidden="true" />חנוכה במזון האושר</p>
          <h2 id="hanukkah-title" className="atelier-heading">קולקציית<br /><em>הסופגניות 2026</em></h2>
          <p className="atelier-hanukkah-intro">השנה חוגגים חנוכה עם סופגניות שאי אפשר להישאר אדישים אליהן. מבחר טעמים מפנקים, עשירים ומלאים בכל הטוב.</p>
          <ul className="atelier-hanukkah-flavors" aria-label="טעמי הסופגניות">
            {flavors.map((flavor) => (
              <li key={flavor.name}><h3>{flavor.name}</h3><p>{flavor.description}</p></li>
            ))}
          </ul>
          <p className="atelier-hanukkah-love">כל סופגנייה נעשית באהבה, עם המון תשומת לב לפרטים וטעם של אושר. כי כל ביס הוא חגיגה!</p>
          <a className="atelier-button" href={`https://wa.me/972546791198?text=${orderMessage}`} target="_blank" rel="noopener noreferrer">
            <MessageCircle size={19} aria-hidden="true" />להזמנת סופגניות בוואטסאפ<ArrowUpLeft size={18} aria-hidden="true" />
          </a>
          <p className="atelier-hanukkah-contact">לתיאום הזמנות: <bdi dir="ltr">054-6791198</bdi></p>
        </div>
        <figure className="atelier-hanukkah-figure">
          <div className="atelier-hanukkah-poster">
            {/* Display only the original flyer, preserving its pixels and excluding the phone/Facebook interface. */}
            <img src={collectionPoster} alt="הפוסטר המקורי של קולקציית הסופגניות 2026 של אלמוג: קפה, קינדר, שוקולד ופיסטוק, לצד ריבת תות וריבת חלב" width="590" height="1280" loading="lazy" decoding="async" />
          </div>
          <figcaption>הסופגניות של אלמוג · חנוכה 2026</figcaption>
        </figure>
      </div>
    </section>
  );
}

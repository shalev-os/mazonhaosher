import { ArrowUpLeft } from "lucide-react";
import fruit from "@/assets/fruit-desserts.jpg";

export default function FruitDesserts() {
  return (
    <section id="fruit-desserts" className="atelier-fruit" aria-labelledby="fruit-desserts-title">
      <div className="atelier-container atelier-fruit-grid">
        <div className="atelier-fruit-copy"><p className="atelier-eyebrow">נעים להפתיע</p><h2 id="fruit-desserts-title" className="atelier-heading">נראים כמו פרי.<br /><em>מרגישים כמו חגיגה.</em></h2><p>קינוחים מעוצבים בצבעים ובטעמים של פירות. עוד דרך להפוך את השולחן שלכם למשהו שזוכרים.</p><ul className="atelier-fruit-flavors" aria-label="טעמי קינוחי הפירות">{["תות", "מנגו", "פסיפלורה", "תפוח", "פטל", "רימון", "פקאן"].map(flavor => <li key={flavor}>{flavor}</li>)}</ul><a href="#gallery/fruit" className="atelier-text-link">מבט מקרוב על הקינוחים<ArrowUpLeft size={18} aria-hidden="true" /></a></div>
        <figure className="atelier-fruit-photo"><img src={fruit} alt="קינוחים בצורת פירות, בשני מגשי זהב" width="810" height="540" loading="lazy" decoding="async" /><figcaption><span>הקולקציה הצבעונית שלנו</span><span>בעבודת יד, עד הפרט הקטן</span></figcaption></figure>
      </div>
    </section>
  );
}

import { ArrowUpLeft } from "lucide-react";
import cookie from "@/assets/cookie-pistachio.jpg";
import fruit from "@/assets/fruit-desserts.jpg";
import cake from "@/assets/cake-round.jpg";
import box from "@/assets/dessert-box.jpg";

const collections = [
  { title: "עוגיות בוטיק", text: "הביס שמתחיל את הכל", image: cookie, href: "#gallery/cookies", number: "01" },
  { title: "עוגות וקינוחים", text: "משהו יפה לשים במרכז", image: cake, href: "#gallery/cakes", number: "02" },
  { title: "קינוחי פירות", text: "מפתיעים כבר מהמבט הראשון", image: fruit, href: "#gallery/fruit", number: "03" },
  { title: "מארזים מתוקים", text: "אושר שאפשר להעניק", image: box, href: "#gallery/boxes", number: "04" },
];

export default function CollectionIndex() {
  return (
    <section id="collections" className="atelier-collections" aria-labelledby="collection-index-title">
      <div className="atelier-container">
        <div className="atelier-section-heading"><div><p className="atelier-eyebrow">ארבע דרכים לשמח</p><h2 id="collection-index-title" className="atelier-heading">מה האושר שלכם?</h2></div><p>לרגע לעצמכם, לשולחן חגיגי או למישהו אהוב.<br />לכל חשק יש כאן מקום.</p></div>
        <div className="atelier-collection-grid">
          {collections.map((collection) => <a key={collection.title} href={collection.href} className="atelier-collection"><div className="atelier-collection-photo"><img src={collection.image} alt={collection.title} loading="lazy" decoding="async" /><span>{collection.number}</span></div><div className="atelier-collection-caption"><div><h3>{collection.title}</h3><p>{collection.text}</p></div><ArrowUpLeft size={22} strokeWidth={1.4} aria-hidden="true" /></div></a>)}
        </div>
      </div>
    </section>
  );
}

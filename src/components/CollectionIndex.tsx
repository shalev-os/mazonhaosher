import { ArrowLeft } from "lucide-react";
import cookie from "@/assets/cookie-chocolate.jpg";
import fruit from "@/assets/fruit-desserts.jpg";
import cake from "@/assets/cake-round.jpg";
import box from "@/assets/dessert-box.jpg";

const collections = [
  { title: "עוגיות בוטיק", text: "הטעמים הקלאסיים של מזון האושר", image: cookie, href: "#flavors" },
  { title: "קינוחי פירות", text: "צבעוניים, מעוצבים ומלאי שמחה", image: fruit, href: "#fruit-desserts" },
  { title: "עוגות וקינוחים", text: "לרגעים שרוצים לחגוג", image: cake, href: "#gallery" },
  { title: "מארזים מתוקים", text: "מחווה קטנה עם הרבה טעם", image: box, href: "#gallery" },
];

export default function CollectionIndex() {
  return (
    <section className="bg-[#fffaf4] py-16 sm:py-20" aria-labelledby="collection-index-title">
      <div className="container mx-auto px-5">
        <div className="mb-8 flex flex-col gap-3 text-right sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div><p className="mb-2 text-sm font-semibold tracking-wide text-[#8b5b3d]">לבחירה שלכם</p><h2 id="collection-index-title" className="text-3xl text-[#3a2218] sm:text-4xl">לאיזה כיוון מתחשק לכם ללכת?</h2></div>
          <p className="max-w-sm leading-7 text-muted-foreground">בחרו קולקציה וקפצו ישר למה שמעניין אתכם.</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {collections.map((collection) => <a key={collection.title} href={collection.href} className="group relative min-h-[290px] overflow-hidden rounded-[1.5rem] bg-[#3a2218] text-white shadow-[0_14px_30px_rgba(72,39,24,.13)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3a2218]"><img src={collection.image} alt="" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" /><span className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" /><span className="absolute inset-x-0 bottom-0 p-6 text-right"><span className="block text-sm text-white/75">{collection.text}</span><span className="mt-1 flex items-center justify-between gap-3 text-2xl font-semibold"><ArrowLeft size={20} aria-hidden="true" /><span>{collection.title}</span></span></span></a>)}
        </div>
      </div>
    </section>
  );
}

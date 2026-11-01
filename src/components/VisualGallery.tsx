import bigale from "@/assets/cookie-bigale.jpg";
import kinder from "@/assets/cookie-kinder.jpg";
import matcha from "@/assets/cookie-matcha.jpg";
import redVelvet from "@/assets/cookie-red-velvet.jpg";
import tahini from "@/assets/cookie-tahini-new.jpg";
import sprinkles from "@/assets/cookie-sprinkles.jpg";

const images = [
  { src: bigale, alt: "עוגיית בוטיק מעוצבת", span: "md:col-span-2 md:row-span-2" },
  { src: kinder, alt: "עוגיית שוקולד וקינדר", span: "" },
  { src: matcha, alt: "עוגיית מאצ'ה", span: "" },
  { src: redVelvet, alt: "עוגיית רד ולווט", span: "" },
  { src: tahini, alt: "עוגיית טחינה", span: "" },
  { src: sprinkles, alt: "עוגייה עם סוכריות", span: "md:col-span-2" },
];

export default function VisualGallery() {
  return (
    <section className="bg-[#fffaf4] py-20 sm:py-28" aria-labelledby="gallery-title">
      <div className="container mx-auto px-5">
        <div className="mb-10 flex flex-col gap-3 text-right sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div><p className="mb-3 text-sm font-semibold tracking-wide text-primary">מהמטבח שלנו</p><h2 id="gallery-title" className="text-4xl text-[#3a2218] sm:text-5xl">עוגיות, קינוחים ועוגות — בתיאום מראש.</h2></div>
          <p className="max-w-sm leading-7 text-muted-foreground">הצצה למרקמים, לצבעים ולפרטים הקטנים שמרכיבים כל קינוח. לתיאום אישי פשוט כתבו לנו בוואטסאפ.</p>
        </div>
        <div className="grid auto-rows-[190px] grid-cols-2 gap-3 sm:auto-rows-[240px] md:grid-cols-4 md:gap-4">
          {images.map((image) => <figure key={image.alt} className={`group relative overflow-hidden rounded-2xl bg-[#eadbcb] ${image.span}`}><img src={image.src} alt={image.alt} loading="lazy" decoding="async" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /><div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/35 to-transparent opacity-0 transition group-hover:opacity-100" /></figure>)}
        </div>
      </div>
    </section>
  );
}

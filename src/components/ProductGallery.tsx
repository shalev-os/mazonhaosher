import chocolate from '@/assets/cookie-chocolate.jpg';
import pistachio from '@/assets/cookie-pistachio.jpg';
import lotus from '@/assets/cookie-lotus.jpg';
import { useLanguage } from '@/contexts/LanguageContext';

const products = [
  { image: chocolate, he: 'שוקולד', en: 'Chocolate' },
  { image: pistachio, he: 'פיסטוק', en: 'Pistachio' },
  { image: lotus, he: 'לוטוס', en: 'Lotus' },
];

export default function ProductGallery() {
  const { language } = useLanguage();
  const hebrew = language === 'he';
  return (
    <section className="container mx-auto px-5 py-20" aria-labelledby="flavors-title" dir={hebrew ? 'rtl' : 'ltr'}>
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 id="flavors-title" className="text-3xl md:text-5xl mb-4">{hebrew ? 'איזה טעם של אושר מתחשק לכם?' : 'Find your favorite flavor'}</h2>
        <p className="text-muted-foreground">{hebrew ? 'בחרו טעם וכתבו לנו ב־WhatsApp.' : 'Choose a flavor and chat with us on WhatsApp.'}</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-3">
        {products.map(product => {
          const name = hebrew ? product.he : product.en;
          const message = hebrew ? `היי, אשמח לפרטים על עוגיית ${name}.` : `Hi! I would like to ask about the ${name} cookie.`;
          return <article key={product.en} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <img src={product.image} alt={name} loading="lazy" decoding="async" className="aspect-square w-full object-cover" />
            <div className="p-6"><h3 className="text-2xl mb-4">{name}</h3>
              <a href={`https://wa.me/972546791198?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer" className="block rounded-xl bg-primary text-primary-foreground px-4 py-3 text-center font-medium">{hebrew ? 'בירור והזמנה ב־WhatsApp' : 'Ask on WhatsApp'}</a>
            </div>
          </article>;
        })}
      </div>
    </section>
  );
}

import chocolate from '@/assets/cookie-chocolate.jpg';
import pistachio from '@/assets/cookie-pistachio.jpg';
import lotus from '@/assets/cookie-lotus.jpg';

const products = [
  { image: chocolate, name: 'שוקולד' },
  { image: pistachio, name: 'פיסטוק' },
  { image: lotus, name: 'לוטוס' },
];

export default function ProductGallery() {
  return (
    <section id="flavors" className="container mx-auto px-5 py-20 scroll-mt-20" aria-labelledby="flavors-title">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 id="flavors-title" className="text-3xl md:text-5xl mb-4">איזה טעם של אושר מתחשק לכם?</h2>
        <p className="text-muted-foreground">בחרו טעם וכתבו לנו בוואטסאפ.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-3">
        {products.map(product => {
          const name = product.name;
          const message = `היי, אשמח לפרטים על עוגיית ${name}.`;
          return <article key={name} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <img src={product.image} alt={name} loading="lazy" decoding="async" className="aspect-square w-full object-cover" />
            <div className="p-6"><h3 className="text-2xl mb-4">{name}</h3>
              <a href={`https://wa.me/972546791198?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer" aria-label={`בירור והזמנת עוגיית ${name} בוואטסאפ — פתיחה בחלון חדש`} className="block rounded-xl bg-primary text-primary-foreground px-4 py-3 text-center font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">בירור והזמנה בוואטסאפ</a>
            </div>
          </article>;
        })}
      </div>
    </section>
  );
}

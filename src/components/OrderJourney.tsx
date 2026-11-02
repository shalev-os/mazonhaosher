import { ArrowUpLeft, MessageCircle, Flower2 } from "lucide-react";

const steps = [
  { number: "01", title: "מוצאים את החשק", text: "בוחרים מוצר או תמונה מהקטלוג." },
  { number: "02", title: "מספרים לאלמוג", text: "שולחים הודעה בוואטסאפ עם הרעיון והפרטים." },
  { number: "03", title: "מתאמים ביחד", text: "כל הזמנה מתואמת אישית ונעשית מראש." },
];

export default function OrderJourney() {
  return (
    <>
      <section id="ordering" className="atelier-ordering" aria-labelledby="journey-title">
        <div className="atelier-container">
          <div className="atelier-order-top"><div><p className="atelier-eyebrow">השלב הבא הוא שיחה</p><h2 id="journey-title">בואו נכין<br /><em>משהו משמח.</em></h2></div><div className="atelier-order-invite"><Flower2 size={64} strokeWidth={.8} aria-hidden="true" /><p>יש רעיון לעוגה? מתלבטים בין טעמים?<br />אלמוג כאן כדי לתאם איתכם את הפרטים.</p><a href="https://wa.me/972546791198" target="_blank" rel="noopener noreferrer" className="atelier-button atelier-button-light"><MessageCircle size={19} aria-hidden="true" />מדברים עם אלמוג<ArrowUpLeft size={19} aria-hidden="true" /></a></div></div>
          <ol className="atelier-order-steps">{steps.map(step => <li key={step.number}><span>{step.number}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></li>)}</ol>
        </div>
      </section>
      <section className="atelier-faq" aria-labelledby="faq-title">
        <div className="atelier-container atelier-faq-grid"><div><p className="atelier-eyebrow">לפני שמתחילים</p><h2 id="faq-title" className="atelier-heading">כמה דברים<br />שכדאי לדעת.</h2></div><div className="atelier-faq-items">
          <details><summary>איך מזמינים?<span aria-hidden="true">+</span></summary><p>ההזמנות נעשות ישירות מול אלמוג בוואטסאפ, במספר <a href="https://wa.me/972546791198" target="_blank" rel="noopener noreferrer"><bdi>054-6791198</bdi></a>. אפשר לשלוח תמונה מהקטלוג ולתאם את הפרטים יחד.</p></details>
          <details><summary>אפשר להזמין עוגה מעוצבת?<span aria-hidden="true">+</span></summary><p>כן. אפשר לפנות עם הכיוון או הרעיון שלכם לעוגה, ולקבל מאלמוג פרטים על האפשרויות בתיאום אישי.</p></details>
          <details><summary>צריך להזמין מראש?<span aria-hidden="true">+</span></summary><p>כן, כל ההזמנות נעשות מראש ובתיאום אישי. לתיאום המועד והפרטים כתבו לאלמוג בוואטסאפ.</p></details>
        </div></div>
      </section>
    </>
  );
}

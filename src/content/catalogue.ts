import pistachio from "@/assets/cookie-pistachio.jpg";
import kinder from "@/assets/cookie-kinder.jpg";
import cakeRound from "@/assets/cake-round.jpg";
import cakeCollection from "@/assets/cake-collection.jpg";
import dessertBox from "@/assets/dessert-box.jpg";
import fruitDesserts from "@/assets/fruit-desserts.jpg";
import originalFlavors from "@/assets/source-image.jpg";
import cookieCollection from "@/assets/cookies-collection-2.jpg";

export type OriginalCrop = { x: number; y: number; size: number };
export type CatalogueProduct = {
  src: string;
  alt: string;
  label: string;
  category: string;
  description: string;
  originalCrop?: OriginalCrop;
};

// Crops are presentation windows into Almog's original branded photograph.
// The source pixels are preserved, including in the product viewer.
export const products: CatalogueProduct[] = [
  { src: cakeRound, alt: "עוגה עגולה מעוצבת בעבודת יד", label: "עוגה מעוצבת", category: "עוגות מעוצבות", description: "עוגה עגולה שמקבלת את מרכז השולחן. משתפים את אלמוג בכיוון לאירוע ומתאמים יחד את העיצוב והפרטים." },
  { src: cakeCollection, alt: "מבחר עוגות פס וקינוחים מעוצבים", label: "עוגות פס וקינוחים", category: "עוגות פס", description: "מבחר עבודות מהמטבח של אלמוג: עוגות פס וקינוחים לשולחן מתוק. התמונה היא נקודת פתיחה לשיחה על מה שמתאים להזמנה שלכם." },
  { src: dessertBox, alt: "מארז קינוחים בעבודת יד", label: "מארז מתוק", category: "מארזים", description: "מבחר קינוחים שמגיעים יחד לרגע מתוק אחד. לתיאום הרכב המארז והפרטים פונים ישירות לאלמוג." },
  { src: fruitDesserts, alt: "קינוחי פירות בעבודת יד", label: "קינוחי פירות", category: "קינוחי פירות", description: "קינוחים מעוצבים בצורות ובצבעים של פירות. מבחר הטעמים כולל תות, מנגו, פסיפלורה, תפוח, פטל, רימון ופקאן; את הבחירה מתאמים עם אלמוג." },
  { src: pistachio, alt: "עוגיית פיסטוק", label: "פיסטוק", category: "עוגיות", description: "עוגיית הפיסטוק של מזון האושר. אפשר להתחיל ממנה את הבחירה ולתאם עם אלמוג את פרטי ההזמנה." },
  { src: kinder, alt: "עוגיית שוקולד וקינדר", label: "שוקולד וקינדר", category: "עוגיות", description: "שילוב של עוגייה וקינדר, מתוך מבחר העוגיות של אלמוג. להזמנה מתייעצים בוואטסאפ ומתאמים מראש." },
  { src: originalFlavors, alt: "עוגיית במבה אדומה מתוך צילום הטעמים המקורי של אלמוג", label: "במבה אדומה", category: "עוגיות", description: "עוגייה עם ציפוי בהיר ופיסות במבה אדומה. אפשר לברר עם אלמוג על שילובה בהזמנה שלכם.", originalCrop: { x: 0, y: 282, size: 666 } },
  { src: originalFlavors, alt: "עוגיית קורנפלקס מתוך צילום הטעמים המקורי של אלמוג", label: "קורנפלקס", category: "עוגיות", description: "עוגייה עם ציפוי בהיר וקורנפלקס. עוד שילוב מתוך המבחר של אלמוג, שאת האפשרויות להזמנתו מתאמים אישית.", originalCrop: { x: 0, y: 1068, size: 670 } },
  { src: originalFlavors, alt: "עוגיית בייגלה מתוך צילום הטעמים המקורי של אלמוג", label: "בייגלה", category: "עוגיות", description: "עוגייה עם בייגלה ופיסות שוקולד. לשילוב במבחר שלכם, כתבו לאלמוג בוואטסאפ.", originalCrop: { x: 735, y: 1063, size: 671 } },
  { src: cookieCollection, alt: "מבחר עוגיות קינדר וציפויי שוקולד בצילום המקורי של מזון האושר", label: "מבחר מהמטבח של אלמוג", category: "עוגיות", description: "מבט על מבחר העוגיות של אלמוג בתבניות הזהב. אפשר לבחור כיוון מהצילום ולשאול על הרכב המגוון המתאים להזמנה שלכם." },
];

import type { CSSProperties } from "react";
import type { CatalogueProduct } from "@/content/catalogue";

export default function CataloguePhoto({ product, enlarged = false }: { product: CatalogueProduct; enlarged?: boolean }) {
  if (!product.originalCrop) {
    return <img src={product.src} alt={product.alt} loading={enlarged ? "eager" : "lazy"} decoding="async" className={enlarged ? "atelier-enlarged-photo" : undefined} />;
  }

  const { x, y, size } = product.originalCrop;
  const sourceWindow: CSSProperties = {
    width: `${1414 / size * 100}%`,
    height: `${1999 / size * 100}%`,
    left: `${-x / size * 100}%`,
    top: `${-y / size * 100}%`,
  };
  return <span className="atelier-original-window"><img src={product.src} alt={product.alt} loading={enlarged ? "eager" : "lazy"} decoding="async" style={sourceWindow} /></span>;
}

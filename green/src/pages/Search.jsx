import React from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { Indoor, OutdoorPlants, Pots, Seeds, Fertilizers } from "../constant/product";

export default function Search() {
  const [params] = useSearchParams();
  const query = (params.get("q") || "").trim().toLowerCase();
  const products = [...Indoor, ...OutdoorPlants, ...Pots, ...Seeds, ...Fertilizers]
    .map((item) => ({ ...item, name: item.name || item.title }))
    .filter((item) => `${item.name} ${item.category}`.toLowerCase().includes(query));
  return <main className="commerce-page"><h1>Search results</h1><p>{products.length} products found for “{query}”</p>
    {products.length ? <div className="products-grid">{products.map((item) => <ProductCard key={`${item.category}-${item.id}`} product={{...item,id:`${item.category}-${item.id}`}} />)}</div> : <div className="empty-state">Try another plant, seed, pot, or fertilizer name.</div>}
  </main>;
}

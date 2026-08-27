import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { toggleWishlist } from "../features/wishlist/wishlistSlice";

export default function Wishlist() {
  const items = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();
  return <main className="commerce-page"><h1>My Wishlist</h1><p>Saved items stay here on this device.</p>
    {!items.length ? <div className="empty-state">Your wishlist is empty.</div> : <div className="products-grid">{items.map((item) =>
      <article className="product-card" key={item.id}><img src={item.img} alt={item.name}/><div className="product-info"><h3>{item.name}</h3><p className="price">₹{item.price}</p><div className="card-actions"><button onClick={() => dispatch(addToCart(item))}>Add to Cart</button><button className="secondary" onClick={() => dispatch(toggleWishlist(item))}>Remove</button></div></div></article>
    )}</div>}
  </main>;
}

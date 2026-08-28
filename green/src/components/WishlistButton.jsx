import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishlist } from "../features/wishlist/wishlistSlice";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function WishlistButton({ product }) {
  const dispatch = useDispatch();
  const normalized = { ...product, name: product.name || product.title };
  const active = useSelector((state) => (state.wishlist?.items || []).some((item) => item.id === normalized.id));
  return <button type="button" className={`wish-button ${active ? "active" : ""}`} aria-label={active ? "Remove from wishlist" : "Add to wishlist"} onClick={() => dispatch(toggleWishlist(normalized))}>{active ? <FaHeart aria-hidden="true" /> : <FaRegHeart aria-hidden="true" />}</button>;
}

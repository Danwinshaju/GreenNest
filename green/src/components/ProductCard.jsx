import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
} from "../features/cart/cartSlice";
import { toggleWishlist } from "../features/wishlist/wishlistSlice";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  // Get cart items from Redux store
  const cartItems =
    useSelector((state) => state.cart?.cartItems) || [];

  // Check if current product is already in cart
  const cartItem = cartItems.find(
    (item) => item.id === product.id
  );
  const wishlist = useSelector((state) => state.wishlist?.items || []);
  const wished = wishlist.some((item) => item.id === product.id);
  const normalized = { ...product, name: product.name || product.title };

  return (
    <div className="product-card">
      <button className={`wish-button ${wished ? "active" : ""}`} type="button" aria-label="Toggle wishlist" onClick={() => dispatch(toggleWishlist(normalized))}>
        {wished ? <FaHeart aria-hidden="true" /> : <FaRegHeart aria-hidden="true" />}
      </button>
      <img src={product.img} alt={normalized.name} loading="lazy" decoding="async" />

      <div className="product-info">
        <h3>{product.name}</h3>

        <p className="price">₹ {product.price}</p>

        {cartItem ? (
          <div className="quantity-controls">
            <button
              onClick={() =>
                dispatch(decreaseQuantity(product.id))
              }
            >
              -
            </button>

            <span>{cartItem.quantity}</span>

            <button
              onClick={() =>
                dispatch(increaseQuantity(product.id))
              }
            >
              +
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() =>
              dispatch(
                addToCart(normalized)
              )
            }
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;

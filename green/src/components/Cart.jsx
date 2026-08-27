import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../features/cart/cartSlice";
import "./Cart.css";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const subtotal = cartItems.reduce(
    (sum, item) => sum + Number(item.price) * (item.quantity || 1),
    0
  );

  return (
    <div className="cart-page">
      <div className="cart-header">
        <div>
          <h1>Your Cart 🛒</h1>
          <p>Review your items and proceed to checkout.</p>
        </div>
        <span className="cart-badge">{cartItems.length} items</span>
      </div>

      {cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is empty.</p>
          <Link className="shop-btn" to="/">
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item-card" key={item.id}>
                <img
                  src={item.img}
                  alt={item.name}
                  className="cart-item-img"
                />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  {item.category && <p className="item-category">{item.category}</p>}
                  <div className="item-meta">
                    <span>Qty: {item.quantity}</span>
                    <span className="item-price">₹{item.price}</span>
                  </div>
                  <div className="quantity-controls">
                    <button
                      type="button"
                      onClick={() => dispatch(decreaseQuantity(item.id))}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => dispatch(increaseQuantity(item.id))}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="remove-btn"
                    type="button"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <aside className="cart-summary">
            <h2>Order Summary</h2>
            <div className="summary-row">
              <span>Subtotal</span>
              <strong>₹{subtotal}</strong>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <strong>Free</strong>
            </div>
            <Link className="checkout-btn" to="/checkout">Continue to Checkout</Link>
            <p className="summary-note">
              Free shipping on orders above ₹499.
            </p>
          </aside>
        </div>
      )}
    </div>
  );
};

export default Cart;

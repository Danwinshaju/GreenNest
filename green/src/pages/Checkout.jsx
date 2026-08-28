import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { clearCart } from "../features/cart/cartSlice";
import { apiRequest } from "../services/api";
import { FaCheckCircle } from "react-icons/fa";

export default function Checkout() {
  const items = useSelector((state) => state.cart?.cartItems || []);
  const dispatch = useDispatch();
  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "", city: "", pincode: "" });
  const [status, setStatus] = useState({ loading: false, error: "", orderId: "" });
  const subtotal = items.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0);
  if (!items.length && !status.orderId) return <Navigate to="/cart" replace />;
  const submit = async (event) => {
    event.preventDefault(); setStatus({ loading: true, error: "", orderId: "" });
    try {
      const result = await apiRequest("/orders", { method: "POST", body: JSON.stringify({ customer: form, items, subtotal }) });
      dispatch(clearCart()); setStatus({ loading: false, error: "", orderId: result.orderId });
    } catch (error) { setStatus({ loading: false, error: error.message, orderId: "" }); }
  };
  if (status.orderId) return <main className="commerce-page success-panel"><h1>Order placed! <FaCheckCircle aria-hidden="true" /></h1><p>Your order ID is <strong>{status.orderId}</strong>.</p></main>;
  return <main className="commerce-page checkout-layout"><form className="checkout-form" onSubmit={submit}><h1>Checkout</h1>{Object.keys(form).map((field) => <label key={field}>{field[0].toUpperCase()+field.slice(1)}<input required type={field === "email" ? "email" : "text"} value={form[field]} onChange={(e) => setForm({...form,[field]:e.target.value})}/></label>)}{status.error && <p className="form-error">{status.error}</p>}<button disabled={status.loading}>{status.loading ? "Placing order..." : `Place order · ₹${subtotal}`}</button></form></main>;
}

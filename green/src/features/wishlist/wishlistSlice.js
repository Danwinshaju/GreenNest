import { createSlice } from "@reduxjs/toolkit";
const saved = JSON.parse(localStorage.getItem("wishlistItems") || "[]");
const slice = createSlice({ name: "wishlist", initialState: { items: saved }, reducers: {
  toggleWishlist(state, action) {
    const exists = state.items.some((item) => item.id === action.payload.id);
    state.items = exists ? state.items.filter((item) => item.id !== action.payload.id) : [...state.items, action.payload];
    localStorage.setItem("wishlistItems", JSON.stringify(state.items));
  },
} });
export const { toggleWishlist } = slice.actions;
export default slice.reducer;

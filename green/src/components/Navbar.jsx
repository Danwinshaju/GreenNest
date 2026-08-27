import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import './Navbar.css'
import { FaSearch } from "react-icons/fa";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const [query,setQuery]=useState("");
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartCount = cartItems.reduce((total, item) => total + (item.quantity || 0), 0);
  const wishlistCount = useSelector((state) => state.wishlist.items.length);

  return (
    <>
      {/* Announcement Bar */}
      <div className="announce-bar">
        🌿 Free shipping on orders above ₹499 | Use code{" "}
        <strong>GROW10</strong> for 10% off your first order
      </div>

      {/* Header */}
      <header className="header">
        <div className="header-inner">
          {/* Logo */}
          <Link className="logo" to="/">
            <div className="logo-icon">🌿</div>
            <span className="logo-text">GreenNest</span>
          </Link>

          {/* Search */}
          <form className="search-wrap" onSubmit={(e)=>{e.preventDefault();if(query.trim())navigate(`/search?q=${encodeURIComponent(query.trim())}`);}}>
          <input type="text"
           className="search-input"
          placeholder="Search plants, seeds, pots..."
          value={query} onChange={(e)=>setQuery(e.target.value)}
          />
         <span className="search-icon">
      <FaSearch />
         </span>
          </form>

          {/* Actions */}
          <div className="header-actions">
            <Link className="cart-btn" to="/wishlist" title="Wishlist"><FaHeart />{wishlistCount > 0 && <span className="cart-count">{wishlistCount}</span>}</Link>
            <button className="icon-btn" title="Account">
              
            </button>

            <Link className="cart-btn" to="/cart" title="Cart">
              <FaShoppingCart />
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </Link>
          </div>
        </div>
      </header>

      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-inner">

          
          

          <Link className="nav-link" to="/indoor">
            Indoor Plants
          </Link>

          <Link className="nav-link" to="/outdoor">
            Outdoor Plants
          </Link>

          
          

          <Link className="nav-link" to="/pots">
            Pots
          </Link>


           

          <Link className="nav-link" to="/seeds">
            Seeds
          </Link>
          
          <Link className="nav-link" to="/fertilizer">
            Fertilizer
          </Link>

          <Link className="nav-link" to="/about">
            About
          </Link>

          <Link className="nav-link" to="/contact">
            Contact
          </Link>

          

         

         
        </div>
      </nav>
    </>
  );
};

export default Navbar;

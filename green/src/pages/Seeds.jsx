import React from 'react';
import './Seeds.css';
import { Seeds as seedsData } from '../constant/product';
import { useSelector, useDispatch } from "react-redux";
import { addToCart, increaseQuantity, decreaseQuantity } from "../features/cart/cartSlice";
import WishlistButton from '../components/WishlistButton';

const Seeds = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart?.cartItems) || [];

  return (
    <section className="products-page">

      <div className="products-header">
        <h1>Our Seeds Collection</h1>
        <p>Bring nature into your home with our premium seeds</p>
      </div>

      <div className="products-grid">

        {seedsData.map((item) => (
          <div className="product-card" key={item.id}>
            <WishlistButton product={item} />

            <div className="product-image">
              <img src={item.img} alt={item.title} loading="lazy" decoding="async" />
            </div>

            <div className="product-info">
              <span className="product-category">
                {item.category}
              </span>

              <h3>{item.title}</h3>

              <div className="product-bottom">
                <span className="price">₹{item.price}</span>
                {(() => {
                  const cartItem = cartItems.find(
                    (cart) => cart.id === item.id
                  );

                  return cartItem ? (
                    <div className="quantity-controls">
                      <button
                        onClick={() =>
                          dispatch(decreaseQuantity(item.id))
                        }
                      >
                        -
                      </button>
                      <span>{cartItem.quantity}</span>
                      <button
                        onClick={() =>
                          dispatch(increaseQuantity(item.id))
                        }
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() =>
                        dispatch(
                          addToCart({
                            id: item.id,
                            name: item.title,
                            price: item.price,
                            img: item.img,
                          })
                        )
                      }
                    >
                      Add to Cart
                    </button>
                  );
                })()}
              </div>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Seeds;

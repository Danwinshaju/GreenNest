import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Fertilizers } from '../constant/product';
import { addToCart, increaseQuantity, decreaseQuantity } from '../features/cart/cartSlice';
import './Fertilizer.css';
import WishlistButton from '../components/WishlistButton';

const Fertilizer = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart?.cartItems) || [];

  return (
    <section className="products-page">
      <div className="products-header">
        <h1>Our Fertilizers Collection</h1>
        <p>Premium fertilizers for healthy plant growth</p>
      </div>

      <div className="products-grid">
        {Fertilizers.map((item) => {
          const cartItem = cartItems.find((cart) => cart.id === item.id);

          return (
            <div className="product-card" key={item.id}>
              <WishlistButton product={item} />
              <div className="product-image">
                <img src={item.img} alt={item.title} loading="lazy" decoding="async" />
              </div>

              <div className="product-info">
                <span className="product-category">{item.category}</span>
                <h3>{item.title}</h3>

                <div className="product-bottom">
                  <span className="price">₹{item.price}</span>
                  {cartItem ? (
                    <div className="quantity-controls">
                      <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                      <span>{cartItem.quantity}</span>
                      <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
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
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Fertilizer;

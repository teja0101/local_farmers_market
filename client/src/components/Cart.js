import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../styles/Cart.css'
import toast, { Toaster } from "react-hot-toast";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  const removeFromCart = (index) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartItems(cart);
    toast.success("Item removed from cart!");
  };

  return (
    <div className="cart">
      <Toaster position="top-center" reverseOrder={false} />
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. <Link to="/">Go back to shop</Link></p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-item-info">
                <p>{item.name}</p>
                <button onClick={() => removeFromCart(index)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;

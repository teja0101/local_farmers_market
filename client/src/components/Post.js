import React, { useState } from "react";
import "../styles/Post.css";
import img0 from "../assets/tomatos.jpg";
import img1 from "../assets/carrot.jpg";
import img2 from "../assets/onion.jpg";
import img3 from "../assets/apple.jpg";
import img4 from "../assets/cherry.jpg";
import img5 from "../assets/strawberry.jpg";
import toast, { Toaster } from 'react-hot-toast';

const products = [
  { id: 1, name: "Tomato", image: img0 },
  { id: 2, name: "Carrot", image: img1 },
  { id: 3, name: "Onions", image: img2 },
  { id: 4, name: "Apple", image: img3 },
  { id: 5, name: "Cherry", image: img4 },
  { id: 6, name: "Strawberry", image: img5 },
];

const Post = () => {
  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <section className="post">
      <Toaster position="top-center" reverseOrder={false} />
      <h2>Fresh Vegetables & Fruits</h2>
      <div className="products">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Post;

import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/delivery.css';
import  img from '../assets/local-farmers-market.jpg';

export default function Home(){
    return(
        <>
          <section class="delivery">
    <h2>My Delivery</h2>
    <div class="delivery-container">
      <div class="delivery-option">
        <h4>Delivery Options</h4>
        <p><strong>Address:</strong> Sweety, Vijayawada</p>
        <p>DNO: 10-402</p>
        <p>Subtotal: 474 rs.</p>
        <p>Delivery Fee: 50 rs.</p>
        <p>Total: 524 rs.</p>
        <button>Schedule Delivery</button>
      </div>

      <div class="delivery-time">
        <h4>Select Time</h4>
        <h4>Select Day</h4>
        <select>
            <option>10:00 - 11:00</option>
            <option>11:00 - 12:00</option>
            <option>14:00 - 15:00</option>
          </select>
          <select>
            <option>Mon - 09</option>
            <option>Tue - 10</option>
            <option>Wed - 11</option>
          </select>
        <button>Confirm Order</button>
      </div>

      <div class="confirmation">
        <h4>Order Confirmation</h4>
        <p>Order No: 1234567</p>
        <p>Delivery Time: 10:00 - 11:00</p>
        <p>Payment: Ideal</p>
        <button>Add an item</button>
        <button>Track Order</button>
      </div>

      <div class="tracking">
        <h4>Order Tracking</h4>
        <ul class="track-status">
          <li>Confirmed</li>
          <li>Preparing</li>
          <li class="active">On the Way</li>
          <li>Delivered</li>
        </ul>
        <button>See Order Details</button>
      </div>
    </div>
  </section>
        </>
    )
}
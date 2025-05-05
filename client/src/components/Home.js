import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/Home.css';
import  img from '../assets/local-farmers-market.jpg';

export default function Home(){
    return(
        <>
         <header>
    <div class="container">
    <h1>Local Farmer's Market Pricing System</h1>
        <img src={img} alt="local-farmers-market" class="profile-image"/>
        <h2>Welcome to Farmer's Market</h2>
        <button><Link  to="/username">Get Started</Link></button>
    </div>
   
  </header>
        </>
    )
}
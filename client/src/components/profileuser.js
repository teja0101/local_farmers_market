import React from "react";
import Profile from "./Profile";
import { Link } from "react-router-dom";

export default function UserHome() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white font-sans">
      <header className="flex items-center justify-between px-10 py-6 bg-white shadow-md sticky top-0 z-10">
         <div className="text-2xl font-bold text-green-700"> <Link to="/userhome" className="hover:text-green-600 transition">🌱 LocalFarm</Link></div>
        <nav className="flex gap-6 text-gray-700 font-medium">
                  <Link to="/profileuser" className="hover:text-green-600 transition">Profile</Link>
                  <Link to="/cartuser" className="hover:text-green-600 transition">Cart</Link>
                  <Link to="/userdev" className="hover:text-green-600 transition">Delivery</Link>
                </nav>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold text-green-800 mb-6">
          Welcome to Local Farmers Marketing System
        </h1>
        <Profile/>
      </main>
    </div>
  );
}

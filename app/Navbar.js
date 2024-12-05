// app/Navbar.js
"use client"; // Menandai ini sebagai komponen klien

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 flex justify-around">
      <Link
        href="/"
        className="flex flex-col items-center text-blue-500 hover:text-blue-700"
      >
        <i className="fas fa-home text-xl"></i> {/* Ikon Home */}
      </Link>
      <Link
        href="/favorites"
        className="flex flex-col items-center text-blue-500 hover:text-blue-700"
      >
        <i className="fas fa-heart text-xl"></i> {/* Ikon Favorit */}
      </Link>
      <Link
        href="/cart"
        className="flex flex-col items-center text-blue-500 hover:text-blue-700"
      >
        <i className="fas fa-shopping-cart text-xl"></i> {/* Ikon Cart */}
      </Link>
      <Link
        href="/profile"
        className="flex flex-col items-center text-blue-500 hover:text-blue-700"
      >
        <i className="fas fa-user text-xl"></i> {/* Ikon Profile */}
      </Link>
    </nav>
  );
};

export default Navbar;

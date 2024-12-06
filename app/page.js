// app/page.js
"use client"; // Menandai ini sebagai komponen klien

import { useEffect, useState, useRef } from "react";
import { fetchProducts } from "./data";
import Navbar from "./Navbar"; // Impor Navbar

const categories = [
  { id: 1, name: "Elektronik", icon: "fas fa-tv" },
  { id: 2, name: "Pakaian", icon: "fas fa-tshirt" },
  { id: 3, name: "Makanan", icon: "fas fa-utensils" },
  { id: 4, name: "Peralatan", icon: "fas fa-couch" },
  { id: 5, name: "Olahraga", icon: "fas fa-futbol" },
  { id: 6, name: "Buku", icon: "fas fa-book" },
  { id: 7, name: "Mainan", icon: "fas fa-gamepad" },
  { id: 8, name: "Perhiasan", icon: "fas fa-gem" },
  { id: 9, name: "Aksesori", icon: "fas fa-hat-cowboy" },
];

export default function Home() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const productsData = await fetchProducts();
      console.log("Products Data:", productsData);
      setProducts(productsData);
      setFilteredProducts(productsData);
    };
    getProducts();
  }, []);

  useEffect(() => {
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log("Filtered Products:", results);
    setFilteredProducts(results);
  }, [searchTerm, products]);

  // Intersection Observer untuk animasi
  const observer = useRef();

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.current.unobserve(entry.target);
        }
      });
    };

    observer.current = new IntersectionObserver(handleIntersect, options);

    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el) => {
      observer.current.observe(el);
    });

    return () => {
      if (observer.current) {
        elements.forEach((el) => {
          observer.current.unobserve(el);
        });
      }
    };
  }, [filteredProducts]);

  return (
    <div className="flex flex-col min-h-screen bg-[#ffffff]">
      <div className="p-4 flex justify-center items-center">
        <i className="fas fa-store text-xl mr-2"></i>
        <input
          type="text"
          placeholder="Cari produk..."
          className="border rounded-lg p-2 w-64 md:w-80 lg:w-96"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="ml-2 p-2 rounded-full bg-[#c3e7o3] text-[#000000] hover:bg-[#96d1c7]">
          <i className="fas fa-bell"></i>
        </button>
      </div>
      {/* Kategori Section */}
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2 text-[#000000]">Categories</h2>
        <div className="relative overflow-x-auto bg-white bg-opacity-10 rounded-lg shadow-md p-4">
          <div className="flex space-x-4">
            {categories.map((category) => (
              <div key={category.id} className="flex flex-col items-center">
                <i
                  className={`${category.icon} text-3xl mb-2 text-[#000000]`}
                ></i>
                <span className="text-sm font-semibold text-[#000000]">
                  {category.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Flash Sale Section */}
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2 text-[#000000]">Flash Sale</h2>
        <div className="grid grid-cols-2 gap-4">
          {filteredProducts.slice(0, 10).map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-lg p-4 flex flex-col fade-in"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-32 object-cover rounded"
              />
              <h3 className="text-md font-semibold mt-2 text-[#000000]">
                {product.name}
              </h3>
              <p className="text-[#000000] text-sm">
                Rp {product.price.toLocaleString()}
              </p>
              <button className="mt-2 bg-[#c3e7o3] text-[#000000] py-1 px-2 rounded hover:bg-[#96d1c7]">
                Beli Sekarang
              </button>
              <div className="flex justify-between mt-2">
                <span className="text-sm text-[#000000]">
                  {product.category}
                </span>
                <span className="text-sm text-[#000000]">
                  {product.rating} ⭐️
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Navbar /> {/* Menambahkan Navbar di bawah */}
    </div>
  );
}

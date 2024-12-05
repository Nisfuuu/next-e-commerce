// app/components/Categories.js
import { FaShoppingCart, FaUser, FaHeart, FaHome } from "react-icons/fa";

const categories = [
  { name: "Home", icon: <FaHome /> },
  { name: "Products", icon: <FaShoppingCart /> },
  { name: "Favorites", icon: <FaHeart /> },
  { name: "Profile", icon: <FaUser /> },
];

export default function Categories() {
  return (
    <div className="flex justify-around mt-4">
      {categories.map((category) => (
        <div key={category.name} className="flex flex-col items-center">
          <div className="text-3xl">{category.icon}</div>
          <span className="mt-1 text-sm">{category.name}</span>
        </div>
      ))}
    </div>
  );
}

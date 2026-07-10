import { useEffect, useState } from "react";
import type { Product } from "../types/Product";
import { getProducts } from "../service/productService";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import StatsCards from "../components/StatsCards";
import "./ProductDashboard.css";
import { useNavigate } from "react-router-dom";

function ProductDashboard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const navigate = useNavigate();

const handleLogout = () => {
  localStorage.removeItem("username");
  navigate("/");
};

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setProducts(products);
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter(
    (product) =>
      searchTerm.trim() === "" ||
      product.category.toLowerCase() === searchTerm.toLowerCase()
  );

  return (
    <div className="main-container">
      <div className="profile">
  <h1>Catalogue Dashboard</h1>

  <div className="profile-right">
      <span className="welcome-user">
        Welcome, {localStorage.getItem("username")}
      </span>

      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  </div>

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <StatsCards products={filteredProducts} />

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>

  );
}

export default ProductDashboard;
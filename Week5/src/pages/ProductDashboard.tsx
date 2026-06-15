import { useEffect, useState } from "react";
import type { Product } from "../types/Product";
import { getProducts } from "../service/productService";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import StatsCards from "../components/StatsCards";


function ProductDashboard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

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
      product.title.toLowerCase() === searchTerm.toLowerCase()
  );

  return (
    <>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <StatsCards products={filteredProducts} />

      <div>
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </>

  );
}

export default ProductDashboard;
import type { Product } from "../types/Product";

interface StatsCardsProps {
  products: Product[];
}

function StatsCards({ products }: StatsCardsProps) {
  const totalProducts = products.length;

  const averagePrice =
    products.reduce((sum, product) => sum + product.price, 0) /
      products.length || 0;

  const averageRating =
    products.reduce((sum, product) => sum + product.rating.rate, 0) /
      products.length || 0;

  const totalCategories = new Set(
    products.map((product) => product.category)
  ).size;

  return (
    <div>
      <div>
        <h3>{averageRating.toFixed(1)}</h3>
        <p>Avg Rating</p>
      </div>

      <div>
        <h3>${averagePrice.toFixed(2)}</h3>
        <p>Avg Price</p>
      </div>

      <div>
        <h3>{totalCategories}</h3>
        <p>Categories</p>
      </div>

      <div>
        <h3>{totalProducts}</h3>
        <p>Total Products</p>
      </div>
    </div>
  );
}

export default StatsCards;
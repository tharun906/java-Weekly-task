import type { Product } from "../types/Product";

interface ProductCardProps {
    product: Product;
}

function  ProductCard({product} : ProductCardProps) {
    return (
        <div>
            <img
                src={product.image}
                alt={product.title}
                width="150"
            />

            <h3>{product.title}</h3>

            <p>Price: ${product.price}</p>

            <p>Category: {product.category}</p>

            <p>Rating: {product.rating.rate}</p>
        </div>
    );
}

export default ProductCard;
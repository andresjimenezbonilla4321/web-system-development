import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card" data-testid={`product-${product.id}`}>
      <Link to={`/products/${product.id}`} data-testid={`product-link-${product.id}`}>
        {product.name}
      </Link>
      <p data-testid={`price-${product.id}`}>${product.price.toFixed(2)}</p>
      <button onClick={() => addToCart(product)} data-testid={`add-${product.id}`}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;

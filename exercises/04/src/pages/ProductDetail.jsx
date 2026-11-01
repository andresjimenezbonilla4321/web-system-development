import { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import products from '../data/products';
import { CartContext } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div>
        <p data-testid="product-not-found">Product not found</p>
        <Link to="/">Go back to the shop</Link>
      </div>
    );
  }

  return (
    <div className="card">
      <h2 data-testid="product-name">{product.name}</h2>
      <p data-testid="product-price">${product.price.toFixed(2)}</p>
      <p data-testid="product-description">{product.description}</p>
      <button onClick={() => addToCart(product)} data-testid="add-to-cart">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;

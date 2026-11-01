import { useState } from 'react';
import products from '../data/products';
import ProductCard from '../components/ProductCard';

const Catalog = () => {
  const [search, setSearch] = useState('');

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const productsToShow = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Catalog</h2>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={handleSearchChange}
        data-testid="search"
      />
      {productsToShow.length === 0 ? (
        <p data-testid="no-results">No products found</p>
      ) : (
        <div className="grid">
          {productsToShow.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Catalog;

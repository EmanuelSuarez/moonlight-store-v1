// Example usage in a component
import { useProducts } from '@/context/ProductsContext';

const ProductList = () => {
  const { products, loading, error } = useProducts();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.price}</p>
          {/* Render other product details */}
        </div>
      ))}
    </div>
  );
};
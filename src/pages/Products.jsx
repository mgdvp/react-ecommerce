import { products } from '../data/products';
import { Link } from 'react-router-dom';

export default function Products() {
  return (
    <div>
      <h2>Products</h2>
      <div style={{ display: 'flex', gap: 24 }}>
        {products.map(product => (
          <div key={product.id} style={{ border: '1px solid #eee', padding: 16, borderRadius: 8, width: 200 }}>
            <img src={product.image} alt={product.name} style={{ width: '100%' }} />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <Link to={`/products/${product.id}`}>View</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

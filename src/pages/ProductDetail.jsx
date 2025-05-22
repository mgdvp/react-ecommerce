import { useParams } from 'react-router-dom';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));
  if (!product) return <div>Product not found.</div>;
  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} style={{ width: 300 }} />
      <p>Price: ${product.price.toFixed(2)}</p>
      <button>Add to Cart</button>
    </div>
  );
}

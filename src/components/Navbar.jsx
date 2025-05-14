import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#f8f8f8', marginBottom: '2rem' }}>
      <Link to="/" style={{ marginRight: 20 }}>Home</Link>
      <Link to="/products" style={{ marginRight: 20 }}>Products</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  );
}

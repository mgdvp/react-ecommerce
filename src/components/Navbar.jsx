import { Link } from 'react-router-dom';
export default function Navbar({cartItems}) {
  return (
    <nav className="flex justify-between p-6 bg-gray-200 border-b-1 border-gray-400 mb-4">
      <Link to="/" className='text-2xl font-bold text-purple-700 hover:text-purple-800'>Shopza</Link>
      <div style={{ display: 'flex', gap: 24 }}>
        <Link to="/cart" className='text-lg hover:text-purple-800'>Səbət ({cartItems.length})</Link>
      </div>
    </nav>
  );
}

import { useState } from "react";
export default function Cart({cartItems, addToCart}) {
  const [cartItemsx, setCartItemsx] = useState(cartItems);

  const handleImageError = (e) => {
    e.target.closest('div').remove();
  };

  return (
    <div className="container max-w-6xl mx-auto ml-4">
      <h2 className="text-2xl font-bold">Səbət</h2>
      <div className="flex gap-4 flex-wrap my-4 justify-start">
        {cartItemsx.length === 0 ? (
          <p className="text-lg font-bold">Səbət boşdur.</p>
        ) : (
          <div>
          {cartItemsx.map(product => (
            <div key={product.id} className="border border-gray-200 p-4 rounded-lg flex-1 min-w-[200px] max-w-[250px] bg-white h-auto">
              <img src={product.image} alt={product.title} className="w-full h-48 object-cover" onError={handleImageError}/>
              <h2 className="text-md font-bold">{product.title.slice(0, 15)}</h2>
              <p className="text-lg font-bold text-red-500">{product.price} ₼</p>
            </div>
          ))}
          </div>
        )}
      </div>
    </div>
  );
}
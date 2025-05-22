import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
export default function Category({addToCart}) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.in/api/products/category?type=${id}&limit=13`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setItems(data.products);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="container max-w-6xl mx-auto ml-4">
      <h2 className="text-2xl font-bold">{id.charAt(0).toUpperCase() + id.slice(1)}</h2>
      <div className="flex gap-4 flex-wrap my-4 justify-start">
        {loading ? (
          <p className="text-lg font-bold">Yüklənir...</p>
        ) : items.length === 0 ? (
          <p className="text-lg font-bold">Bu kategoriyada məhsul yoxdur.</p>
        ) : (
          <>
          {items.map(product => (
            <div key={product.id} className="border border-gray-200 p-4 rounded-lg flex-1 min-w-[200px] max-w-[250px] bg-white h-auto shadow-lg">
              <img src={product.image} alt={product.title} className="w-full h-48 object-cover"/>
              <h2 className="text-md font-bold">{product.title.slice(0, 15)}</h2>
              <p className="text-lg font-bold text-red-500">{product.price} ₼</p>
              <button onClick={() => addToCart(product)} className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-transparent hover:text-green-500 hover:border-green-500 border transition-all duration-300 cursor-pointer w-full mt-4">Səbətə əlavə et</button>
            </div>
          ))}
          </>
        )}
      </div>
    </div>
  );
}
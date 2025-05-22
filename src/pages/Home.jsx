import { useEffect, useState } from "react";
export default function Home({addToCart}) {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.in/api/products?limit=13')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setProducts(data.products);
      });
  }, []);

  const handleImageError = (e) => {
    e.target.closest('div').remove();
  };

  return (
    <div className="container max-w-6xl mx-auto ml-4">
      <div className="flex justify-between bg-gray-100 p-4 rounded-lg shadow-sm">
        <h1 className="text-2xl font-bold">Ən çox satılanlar</h1>
      </div>
      <div className="flex gap-4 flex-wrap my-4 justify-start">
        {products.map(product => (
          <div key={product.id} className="border border-gray-200 p-4 rounded-lg flex-1 min-w-[200px] max-w-[250px] bg-white h-auto shadow-lg">
            <img src={product.image} alt={product.title} className="w-full h-48 object-cover" onError={handleImageError}/>
            <h2 className="text-md font-bold">{product.title.slice(0, 25)}</h2>
            <p className="text-lg font-bold text-red-500">{product.price} ₼</p>
            <button onClick={() => addToCart(product)} className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-transparent hover:text-green-500 hover:border-green-500 border transition-all duration-300 cursor-pointer w-full mt-4">Səbətə əlavə et</button>
          </div>
        ))}
      </div>
    </div>
  );
}

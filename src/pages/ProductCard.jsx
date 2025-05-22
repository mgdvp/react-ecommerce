import { useEffect, useState } from "react";

export default function ProductCard() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.in/api/products')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setProducts(data.products);
      });
  }, []);

  const [imageLoaded, setImageLoaded] = useState(true);

  const handleImageError = () => {
    setImageLoaded(false);
  };

  if (!imageLoaded) {
    return null; // don't render the product div if image is not found
  }

  return (
    <div className="container max-w-6xl mx-auto">
      
      <p></p>
      <div className="flex gap-4 flex-wrap my-4 justify-center">
        {products.map(product => (
          <div key={product.id} className="border border-gray-200 p-4 rounded w-1/5 sm:w-1/2 md:w-1/5 lg:w-1/5 bg-gray-200">
            <img src={product.image} alt={product.title} className="w-full h-48 object-cover" onError={handleImageError}/>
            <h2>{product.title}</h2>
            <p>{product.price}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

import { useState, useEffect } from "react"; // ✅ Import hooks
import axios from "axios";

const ProductList = () => {  // ✅ Function Component
  const [products, setProducts] = useState([]); // ✅ Inside function

  useEffect(() => {
    axios.get("http://localhost:5000/products") // Express API route
      .then(response => {
        setProducts(response.data); 
      })
      .catch(error => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white">
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
            <p className="text-gray-500 mt-2">${product.price}</p>
          </div>
          <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

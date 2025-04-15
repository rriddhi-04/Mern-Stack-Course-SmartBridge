import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/products/${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error("Error fetching product details:", error);
      });
  }, [id]);

  if (!product) return <p className="text-center p-10">Loading...</p>;

  return (
    <div className="p-10 text-center">
      <img src={product.image} alt={product.name} className="w-60 mx-auto" />
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="text-gray-600">{product.price}</p>
      <p className="mt-4">{product.description}</p>
    </div>
  );
};

export default ProductDetail;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const getProduct = async () => {
    const response = await axios.get(`https://dummyjson.com/products/${id}`);

    setProduct(response.data);
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  if (!product) {
    return <h1 className="text-center mt-20">Loading...</h1>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Link to="/" className="text-blue-600 font-semibold">
        ← Back to Products
      </Link>

      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Product Image */}
          <div className="bg-gray-50 rounded-xl p-5">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-80 object-contain"
            />
          </div>

          {/* Product Information */}
          <div>
            <p className="text-gray-500">{product.brand}</p>

            <h1 className="text-3xl font-bold mt-2">{product.title}</h1>

            <p className="text-gray-600 mt-4">{product.description}</p>

            <h2 className="text-3xl font-bold text-green-600 mt-5">
              ${product.price}
            </h2>

            <p className="mt-3">⭐ Rating: {product.rating}</p>

            <p className="mt-2">Stock: {product.stock}</p>

            <p className="mt-2">Category: {product.category}</p>

            <p className="mt-2">Discount: {product.discountPercentage}%</p>

            <p className="mt-2">Availability: {product.availabilityStatus}</p>

            <p className="mt-2">Warranty: {product.warrantyInformation}</p>

            <p className="mt-2">Shipping: {product.shippingInformation}</p>

            <button className="bg-black text-white px-8 py-3 rounded-lg mt-6 hover:bg-gray-800">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

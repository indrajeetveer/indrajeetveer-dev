import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";

const Home = () => {
  const [data, setdata] = useState([]);

  let resposeData = async () => {
    const response = await axios.get("https://dummyjson.com/products/");
    setdata(response.data.products);
  };

  useEffect(() => {
    resposeData();
  }, []);

  console.log(data);
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data.map((elem) => (
          <Link
            to={`/product/${elem.id}`}
            key={elem.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden p-4"
          >
            {/* Product Image */}
            <div className="h-52 flex items-center justify-center bg-gray-50 rounded-lg">
              <img
                src={elem.thumbnail}
                alt={elem.title}
                className="h-full w-full object-contain"
              />
            </div>

            {/* Product Details */}
            <div className="mt-4">
              <p className="text-sm text-gray-500">{elem.brand}</p>

              <h2 className="text-lg font-bold text-gray-800 mt-1">
                {elem.title}
              </h2>

              <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                {elem.description}
              </p>

              {/* Price and Rating */}
              <div className="flex items-center justify-between mt-4">
                <h3 className="text-2xl font-bold text-green-600">
                  ${elem.price}
                </h3>

                <span className="text-yellow-500 font-semibold">
                  ⭐ {elem.rating}
                </span>
              </div>

              {/* Stock */}
              <div className="flex justify-between items-center mt-4">
                <p className="text-sm text-gray-600">Stock: {elem.stock}</p>

                <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">
                  {elem.availabilityStatus}
                </span>
              </div>

              {/* Discount */}
              <p className="text-sm text-red-500 font-semibold mt-3">
                {elem.discountPercentage}% OFF
              </p>

              {/* Button */}
              <button className="w-full bg-black text-white py-2 rounded-lg mt-4 hover:bg-gray-800 transition">
                View Details
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;

import React, { useContext } from "react";
import { productDataContext } from "../context/ProductContext";
import { useParams } from "react-router-dom";

const Product = () => {
  const productdata = useContext(productDataContext);
  let { productID } = useParams();

  let singleProductData = productdata.find((elem) => elem.id == productID);

  if (!singleProductData) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-xl md:flex">
        {/* Product Image */}
        <div className="flex w-full items-center justify-center bg-gray-50 p-8 md:w-1/2">
          <img
            src={singleProductData.image}
            alt={singleProductData.title}
            className="h-80 w-full object-contain"
          />
        </div>

        {/* Product Information */}
        <div className="w-full p-8 md:w-1/2">
          <p className="mb-3 text-sm font-semibold uppercase text-gray-500">
            {singleProductData.category}
          </p>

          <h1 className="mb-4 text-2xl font-bold text-gray-800">
            {singleProductData.title}
          </h1>

          <p className="mb-5 text-3xl font-bold text-green-600">
            ${singleProductData.price}
          </p>

          <p className="mb-6 leading-7 text-gray-600">
            {singleProductData.description}
          </p>

          <button className="w-full rounded-lg bg-black py-3 font-semibold text-white transition hover:bg-gray-800">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;

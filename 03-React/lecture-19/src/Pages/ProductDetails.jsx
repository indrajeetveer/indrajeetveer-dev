import React, { useContext } from "react";
import { productDataContext } from "../context/ProductContext";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const productData = useContext(productDataContext);
  const { productId } = useParams();

  const selectedProduct = productData.find(
    (elem) => productId == elem.id
  );

  if (!selectedProduct) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-10">
      <div className="w-[900px] bg-white rounded-2xl shadow-lg p-8 flex gap-10">

        <div className="w-[40%] flex items-center justify-center">
          <img
            className="h-[350px] w-full object-contain"
            src={selectedProduct.image}
            alt={selectedProduct.title}
          />
        </div>

        <div className="w-[60%] flex flex-col justify-center">

          <p className="text-sm text-gray-500 uppercase font-semibold">
            {selectedProduct.category}
          </p>

          <h1 className="text-2xl font-bold mt-2">
            {selectedProduct.title}
          </h1>

          <div className="flex items-center gap-2 mt-4">
            <span className="bg-green-600 text-white px-2 py-1 rounded">
              ⭐ {selectedProduct.rating.rate}
            </span>

            <span className="text-gray-500">
              {selectedProduct.rating.count} ratings
            </span>
          </div>

          <h2 className="text-3xl font-bold text-green-600 mt-5">
            ${selectedProduct.price}
          </h2>

          <p className="text-gray-600 mt-4 leading-6">
            {selectedProduct.description}
          </p>

          <button className="mt-6 bg-sky-500 hover:bg-sky-600 text-white font-semibold px-6 py-3 rounded-lg w-fit">
            Add to Cart
          </button>

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
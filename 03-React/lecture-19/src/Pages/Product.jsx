import React, { useContext } from "react";
import { productDataContext } from "../context/ProductContext";
import { Link } from "react-router-dom";

const Product = () => {
  const productData = useContext(productDataContext);
  return (
    <div className="flex flex-wrap gap-10 bg-black px-10 py-10">
      {productData.map((elem, idx) => {
        return (
          <Link
            className="block w-[250px] p-2 bg-white "
            key={idx}
            to={`/Products/${elem.id}`}
          >
            <div className="px-10">
              <img
                className="h-[200px] w-full object-contain"
                src={elem.image}
                alt="img"
              ></img>
              <h2 className="text-sm font-semibold">{elem.title}</h2>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Product;

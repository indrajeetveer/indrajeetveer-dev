import React, { useContext } from 'react'
import { productDataContext } from '../context/ProductContext'
import { Link } from 'react-router-dom'

const Products = () => {

  const data = useContext(productDataContext)
  console.log(data)
   if(!data){
    console.log('Loding.....')
   }
  return (
  <div className="min-h-screen bg-gray-100 p-8">
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

      {data.map((elem, idx) => {
        return (
          <Link
            to={`/products/${elem.id}`}
            key={idx}
            className="rounded-xl bg-white p-4 shadow-md transition hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="flex h-56 items-center justify-center">
              <img
                src={elem.image}
                alt={elem.title}
                className="h-full w-full object-contain"
              />
            </div>

            <h1 className="mt-4 line-clamp-2 text-center text-lg font-semibold text-gray-800">
              {elem.title}
            </h1>
          </Link>
        );
      })}

    </div>
  </div>
);
}

export default Products
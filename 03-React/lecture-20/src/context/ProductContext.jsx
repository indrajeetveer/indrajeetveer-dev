import React, { createContext, useEffect, useState } from 'react'
import axios from "axios";

export const productDataContext = createContext();

const ProductContext = (props) => {
  
   const [productData, setproductData] = useState([])
   
   let getData = async()=>{
     let response = await axios.get('https://fakestoreapi.com/products')
     setproductData(response.data)
   }

   useEffect(()=>{
    getData()
   },[])

  return (
    <div>
        <productDataContext.Provider value={productData}>
            {props.children}
        </productDataContext.Provider>
    </div>
  )
}

export default ProductContext
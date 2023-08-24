import React from 'react';
import { useEffect, useState, createContext  } from 'react';
import { getProducts } from '../services/api';

export const ProductsContext = createContext(); 

  const ProductContextProvider = ({children}) => {

    const [products, setProducts] = useState([]);
    useEffect (()=>{
        const fetchAPi = async() => {
            setProducts(await getProducts());
        } 
        fetchAPi();
    }, []);
    return (
       <ProductsContext.Provider value={products}>
        {children}
       </ProductsContext.Provider>
    );
};

export default ProductContextProvider;
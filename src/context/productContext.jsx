/* eslint-disable react/prop-types */
// import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { API } from "../data/api";
import reducer from "../reducers/productReducer";



const ProductContext = createContext();

const initialValue = {
  isLoading: false,
  isError: false,
  products: [],
  newArrivals: [],
};


const AppContext = ({ children }) => {

 const [state, dispatch] = useReducer(reducer, initialValue)

  const getProducts = async (url) => {
   dispatch({type: "SET_LEADING"});
    try {
     const products = await url
     dispatch({type: "SET_API_DATA", payload: products});
    } catch (error) {
     console.log(error);
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <ProductContext.Provider value={{...state}}>
      {children}
    </ProductContext.Provider>
  );
};

// Custom Hook

const useProductContext = () => {
  return useContext(ProductContext);
};

export { ProductContext, AppContext, useProductContext };

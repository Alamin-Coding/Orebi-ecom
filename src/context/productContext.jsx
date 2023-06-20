/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/ProductReducer";
import { API } from "../data/api";


const AppContext = createContext();

const initialState = {
 isLoading: false,
 isError: false,
 products: [],
 newArrival: [],
 bestSellers: [],
 singleProduct: {
  id: 1,
  title: "I Phone 13 pro"
 }
}


const ProductContext = ({children}) => {
 const [state, dispatch] = useReducer(reducer, initialState);

 const getProduct = async (url) => {
  dispatch({type: "SET_LOADING"})
  try {
   const products = await url;
   dispatch({type: "SET_API_DATA", payload: products})
  } catch (error) {
   console.log(error);
   // dispatch({type: "SET_ERROR"})
  }
 };


 useEffect(() => {
  getProduct(API)
 },[]);

  return (
    <AppContext.Provider value={{...state}}>
      {children}
    </AppContext.Provider>
  )
}

// Custom Hook

const useProductContext = () => {
  return useContext(AppContext);
};



export { ProductContext, AppContext, useProductContext }

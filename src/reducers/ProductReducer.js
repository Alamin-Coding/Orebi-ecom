/* eslint-disable no-case-declarations */

const ProductReducer = (state, action) => {
  switch (action.type) {
   case "SET_LOADING":
     return {
      ...state,
      isLoading: true
     }
  
   case "SET_API_DATA":
    const newArrival = action.payload.filter((curElem) => {
      return curElem.newArrivals === true
    })
    const bestSellers = action.payload.filter((curElem) => {
      return curElem.bestsellers === true
    })
    const discountProduct = action.payload.filter((curElem) => {
      return curElem.discountProduct === true
    })
     return {
      ...state,
      isLoading: false,
      products: action.payload,
      newArrival,
      bestSellers,
      discountProduct
     }
  
  
    case "SET_ERROR":
      return {
        ...state,
        isLoading: false
      }
    
    default:
      return state
  }
}

export default ProductReducer

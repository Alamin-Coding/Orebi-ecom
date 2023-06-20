/* eslint-disable no-case-declarations */
const ProductReducer = (state, action) => {
  switch (action.type) {
    case "SET_LEADING":
      return {
        ...state,
        isLoading: true,
      };

    case "SET_API_DATA":
      const newArrivalData = action.payload.filter((curElem) => {
        return curElem.newArrivals === true;
      });
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        newArrivals: newArrivalData,
      };

    case "SET_ERROR":
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default ProductReducer;

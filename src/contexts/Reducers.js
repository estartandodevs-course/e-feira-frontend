export const cartReducer = (state, action) => {
  switch (action.type) {
    case "loadProducts":
      return { ...state, products: action.payload };
    default:
      return state;
  }
}
import { createContext, useState, useEffect, useReducer, useContext } from 'react';
// import axios from "axios";
import { cartReducer } from './Reducers';
import { ApiServer } from '../services/Api/index'

const Cart = createContext();



const Context = ({ children }) => {

  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    ApiServer.get('/products/')
      .then(response => {
        setProductDetails(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  console.log(productDetails)


  const [state, dispatch] = useReducer(cartReducer, {
    products: productDetails,
    cart: [],
  });


  return <Cart.Provider value={{ state, dispatch }}> {children}</Cart.Provider>;
}

export default Context

export const CartState = () => {
  return useContext(Cart);
};

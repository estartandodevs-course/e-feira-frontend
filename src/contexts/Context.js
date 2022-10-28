import { createContext, useState, useEffect, useReducer, useContext } from 'react';
import { ApiServer } from '../services/Api';
import { cartReducer } from './Reducers';

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


  // console.log(productDetails)

  const [state, dispatch] = useReducer(cartReducer, {
    product: productDetails,
    cart: [],
  });
  return <Cart.Provider value={{ state, dispatch }}> {children}</Cart.Provider>;
};


export const CartState = () => {
  return useContext(Cart);
};

export default Context;
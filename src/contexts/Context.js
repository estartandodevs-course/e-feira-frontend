import { createContext, useEffect, useReducer, useContext } from 'react';
import { cartReducer } from './Reducers';
import { ApiServer } from '../services/Api/index'

const Cart = createContext();

const Context = ({ children }) => {

  useEffect(() => {
    ApiServer.get('/products/')
      .then(response => {
        if (response.data != null) {
          dispatch({ type: "loadProducts", payload: response.data });
        } else {
          console.log('O Array esta vazio')
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],
  });

  return <Cart.Provider value={{ state, dispatch }}> {children}</Cart.Provider>;
}

export default Context

export const CartState = () => {
  return useContext(Cart);
};

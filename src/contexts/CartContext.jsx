/* eslint-disable no-unused-vars */
import { createContext, useState, useEffect, useContext } from 'react';
import _ from 'lodash';
const Cart = createContext();

const CartContext = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const cartStorage = localStorage.getItem('EF:Cart');
    if (cartStorage) {
      return JSON.parse(cartStorage);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('EF:Cart', cart ? JSON.stringify(cart) : []);
  }, [cart]);
  const handleUpdateCart = product => {
    if (product.amount > 0) {
      const nCart = _.clone(cart);
      const productsExists = nCart.find(item => item.id === product.id && item.provider_id === product.provider_id);
      if (productsExists) {
        productsExists.amount = product.amount;
        productsExists.totalAmount = product.price * product.amount;
      } else {
        nCart.push(product);
      }
      return setCart(nCart);
    }
    const nCart = cart.filter(item => item.id !== product.id && item.provider_id !== product.provider_id);
    return setCart(nCart);
  };
  return <Cart.Provider value={{ cart, updateCart: handleUpdateCart }}> {children}</Cart.Provider>;
};

export default CartContext;

export const useCart = () => {
  return useContext(Cart);
};

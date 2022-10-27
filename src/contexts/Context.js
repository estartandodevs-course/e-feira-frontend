import { useReducer } from 'react';
import { createContext } from 'react';
import { ApiServer } from '../../services/Api';
import { cartReducer } from './Reducers';

const Cart = createContext();

const [productDetails, setProductDetails] = useState([]);

useEffect(() => {
  ApiServer.get('/products/')
    .then(response => {
      setProductDetails(response.data[0]);
    })
    .catch(error => {
      console.log(error);
    });
}, []);

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    product: productDetails,
    cart: [],
  });
  return <Cart.Provider value={{ state, dispatch }}> {children}</Cart.Provider>;
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};

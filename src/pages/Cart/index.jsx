import { CartComponent } from '../../components/CartComponent';
import PlaceComponent from '../../components/PlaceComponent';
// import usePageTitle from '../../hooks/usePageTitle';

const Cart = () => {
  return (
    <>
      {/* {usePageTitle('Carrinho')} */}

      <PlaceComponent />
      <CartComponent />
    </>
  );
};

export default Cart;

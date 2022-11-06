import { CartComponent } from '../../components/CartComponent';
import usePageTitle from '../../hooks/usePageTitle';

const Cart = () => {
  return (
    <>
      {usePageTitle('Carrinho')}

      <CartComponent />
    </>
  );
};

export default Cart;

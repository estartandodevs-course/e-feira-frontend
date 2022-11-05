import { CartComponent } from '../../components/CartComponent';
// import usePageTitle from '../../hooks/usePageTitle';
import { Helmet } from 'react-helmet';

const Cart = () => {
  return (
    <>
      {/* {usePageTitle('Carrinho')} */}
      <Helmet>
        <title>Carrinho</title>
      </Helmet>
      <CartComponent />
    </>
  );
};

export default Cart;

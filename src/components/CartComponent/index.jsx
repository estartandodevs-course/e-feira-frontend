import { useCart } from '../../contexts/CartContext';
import { Container, ProductsContainer, ProductItem } from './styles';

import 'swiper/css';
import 'swiper/css/pagination';

export const CartComponent = () => {
  const { cart } = useCart();

  return (
    <Container>
      <ProductsContainer>
        {cart.map(item => (
          <ProductItem key={item.id}>
            <a href={`produtos/${item.id}`}>
              <img src={item.image} />

              {item.name}
            </a>
          </ProductItem>
        ))}

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id at dignis.</p>
      </ProductsContainer>
    </Container>
  );
};

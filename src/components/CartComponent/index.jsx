import { useCart } from '../../contexts/CartContext';
import {
  Container,
  ProductsContainer,
  ProductItem,
  ProductImage,
  ProductName,
  ProductQty,
  ProductPrice,
  ProductTotal,
} from './styles';

import 'swiper/css';
import 'swiper/css/pagination';

export const CartComponent = () => {
  const { cart } = useCart();

  console.log(cart);

  return (
    <Container>
      <ProductsContainer>
        {cart.map(item => (
          <ProductItem key={item.id}>
            <a href={`produtos/${item.id}`}>
              <ProductImage>
                <img src={item.image} />
              </ProductImage>
              <ProductName>{item.name}</ProductName>
              <ProductPrice>Preço por unidade: {item.price} </ProductPrice>
              <ProductQty>Quantidade: {item.amount}</ProductQty>
              <ProductTotal>Total: {item.amount * item.price}R$ </ProductTotal>
            </a>
          </ProductItem>
        ))}
      </ProductsContainer>
    </Container>
  );
};

import { useCart } from '../../contexts/CartContext';

import { Container, ProductsContainer, ProductItem, Card, CardSubTitle, CardTitle, CardRight } from './styles';
=======
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


import { Link } from 'react-router-dom';

export const CartComponent = () => {
  const { cart } = useCart();

  console.log(cart);

  return (
    <Container>
      <ProductsContainer>
        {cart.map(item => (
          <ProductItem key={item.id}>

            <Card>
              <img src={item.image} />
            </Card>
            <Link to={`/produtos/${item.id}`}>{item.name}</Link>
            <div>
              <CardTitle>{item.title}</CardTitle>
              <div>
                <CardSubTitle>{item.subtitle}</CardSubTitle>
              </div>
            </div>

            <div>{item.price}</div>
            <CardRight></CardRight>

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

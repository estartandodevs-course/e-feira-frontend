import { useCart } from '../../contexts/CartContext';
import { Container, ProductsContainer, ProductItem, Card, CardSubTitle, CardTitle, CardRight } from './styles';

import { Link } from 'react-router-dom';

export const CartComponent = () => {
  const { cart } = useCart();

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
          </ProductItem>
        ))}

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id at dignis.</p>
      </ProductsContainer>
    </Container>
  );
};

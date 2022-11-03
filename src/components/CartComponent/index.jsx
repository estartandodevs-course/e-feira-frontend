import { Link } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Stack, Button } from '@mui/material';

import {
  Adress,
  AdressCard,
  AdressContainer,
  AdressTitle,
  CardCenter,
  Container,
  DeliveryPlace,
  ProductsContainer,
  ProductItem,
  ProductImage,
  ProductName,
  ProductQty,
  ProductPrice,
  KeepBuying,
  Text,
  IconContainer,
  ButtonContainer,

  // CardProvider,
} from './styles';

export const CartComponent = () => {
  const { cart } = useCart();

  console.log(cart);

  return (
    <Container>
      <AdressContainer>
        <AdressTitle>
          <h3>Entregar em </h3>
        </AdressTitle>
        <AdressCard>
          <MapOutlinedIcon className="map-icon" style={{ fontSize: '40' }}></MapOutlinedIcon>
          <DeliveryPlace>
            <p>Casa</p>
          </DeliveryPlace>
          <Adress>
            <p>Avenida Lins de Vasconcelos, 356, Apartamento 13, Cambuci.</p>
            <IconContainer>
              <ArrowForwardIosIcon className="arrow-icon" fontSize="large" />
            </IconContainer>
          </Adress>
        </AdressCard>
      </AdressContainer>
      <ProductsContainer>
        {cart.map(item => (
          <ProductItem key={item.id}>
            {/* <CardProvider>{item.provider_name}</CardProvider> */}
            <Link to={`produtos/${item.id}`}>
              <ProductImage>
                <img src={item.image} />
              </ProductImage>
            </Link>
            <CardCenter>
              <Link to={`produtos/${item.id}`}>
                <ProductName>{item.name}</ProductName>
                <ProductQty>
                  {item.amount}x {item.subtitle}
                </ProductQty>
                <ProductPrice>R$ {item.price?.toFixed(2)} </ProductPrice>

                {/* <ProductTotal>Total: {item.amount * item.price}R$ </ProductTotal> */}
              </Link>
            </CardCenter>
          </ProductItem>
        ))}
        <KeepBuying>
          <Text>
            <Link to={`/`}>Continuar comprando</Link>
            <IconContainer>
              <ArrowForwardIosIcon className="arrow-icon" fontSize="large" />
            </IconContainer>
          </Text>
        </KeepBuying>
      </ProductsContainer>
      <ButtonContainer>
        <Button description={'Finalizar a Compra'} />

        <Stack spacing={2} direction="row">
          <Button
            style={{
              display: 'flex',

              background: '#3ba032',
              borderRadius: '8px',
              justifyContent: 'center',

              color: '#fff',
              fontWeight: '500',
              fontSize: '16px',
              lineHeight: '120%',
              border: 'none',
              padding: '1rem 1rem',
              letterSpacing: '0.0125em',
              textTransform: 'uppercase',
            }}
            // não está funcionando pois foi copiado o estilo
            onClick={() => cart(cart)}
          >
            <label>{(cart.inCart = 'Finalizar a Compra')}</label>
          </Button>
        </Stack>
      </ButtonContainer>
    </Container>
  );
};

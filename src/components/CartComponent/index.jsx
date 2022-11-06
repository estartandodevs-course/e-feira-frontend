import { Link } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import _ from 'lodash';
import { Stack, Button } from '@mui/material';

import {
  Acess,
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
  // Icon,
  IconContainer,
  // ItemUnit,
  ButtonContainer,
  OrderContainer,
  SubTotalOrderValue,
  ShippingPrice,
  TotalOrder,
  Thing,
  Payment,
  PaymentText,
  PaymentInfo,
  PaymentLogo,
} from './styles';

export const CartComponent = () => {
  const { cart } = useCart();

  let newCart = _.groupBy(cart, 'provider_name');

  console.log([newCart]);
  return (
    <Container>
      <AdressContainer>
        <AdressTitle>Entregar em</AdressTitle>
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
        {[newCart].map(item => {
          <div key={item}>
            {<Acess>{item[0]}</Acess>}
            <ProductItem key={item.id}>
              <Link to={`/produtos/${item.id}`}>
                <ProductImage>
                  <img src={item.image} />
                </ProductImage>
              </Link>
              <CardCenter>
                <Link to={`/produtos/${item.id}`}>
                  <ProductName>{item.name}</ProductName>
                  <ProductQty>
                    {item.amount}x {item.weight}
                  </ProductQty>
                  <ProductPrice>R$ {item.price?.toFixed(2)} </ProductPrice>

                  {/* <ProductTotal>Total: {item.amount * item.price}R$ </ProductTotal> */}
                </Link>
              </CardCenter>
            </ProductItem>
            ;
          </div>;
        })}
        <KeepBuying>
          <Text>
            <Link to={`/`}>Continuar comprando</Link>
            <IconContainer>
              <ArrowForwardIosIcon className="arrow-icon" fontSize="large" />
            </IconContainer>
          </Text>
        </KeepBuying>
      </ProductsContainer>

      <OrderContainer>
        <SubTotalOrderValue>Subtotal</SubTotalOrderValue>
        <ShippingPrice>Taxa de Entrega</ShippingPrice>
        <TotalOrder>Total</TotalOrder>
        <Thing>Troco</Thing>
      </OrderContainer>

      <Payment>
        <PaymentText>Pagamento</PaymentText>
        <PaymentLogo></PaymentLogo>
        <PaymentInfo>Pagamento em dinheiro no ato da entrega</PaymentInfo>
      </Payment>
      <ButtonContainer>
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

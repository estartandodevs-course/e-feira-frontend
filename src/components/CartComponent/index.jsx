import { Link } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { Stack, Button } from '@mui/material';

import {
  Acess,
  Adress,
  AdressCard,
  AdressContainer,
  AdressTitle,
  CardCenter,
  CartBox,
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
// import RemoveIcon from '@mui/icons-material/Remove';
// import AddIcon from '@mui/icons-material/Add';

export const CartComponent = () => {
  const { cart } = useCart();

  console.log(cart);

  return (
    <Container>
      {cart.length === 0 ? (
        <h3>seu carrinho esta vazio</h3>
      ) : (
        <CartBox>
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
            {cart.map((item, index) => (
              <div key={item.id}>
                {index === 0 && <Acess>{item.provider_name}</Acess>}
                <ProductItem>
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
              </div>
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
        </CartBox>
      )}
    </Container>
  );
};

import { Link } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import _ from 'lodash';
import { Stack, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {
  // Icon,
  // ItemUnit,
  Acess,
  Adress,
  AdressCard,
  AdressContainer,
  AdressTitle,
  ButtonContainer,
  CardCenter,
  Container,
  DeliveryPlace,
  Icon,
  IconContainer,
  // ItemUnit,
  KeepBuying,
  OrderContainer,
  Payment,
  PaymentInfo,
  PaymentLogo,
  PaymentText,
  PricesBox,
  ProductImage,
  ProductItem,
  ProductName,
  ProductPrice,
  ProductQty,
  ProductsContainer,
  NothingFound,
  ProductTotal,
  ShippingPrice,
  SubTotalOrderValue,
  Text,
  Thing,
  TotalOrder,
} from './styles';
// import AddIcon from '@mui/icons-material/Add';
// // import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import RemoveIcon from '@mui/icons-material/Remove';

export const CartComponent = () => {
  const { cart } = useCart();

  const newCart = _.groupBy(cart, 'provider_name');

  const cartGroupped = Object.entries(newCart).map(([key, value]) => ({
    name: key,
    value,
  }));

  console.log(cart);

  return (
    <Container>
      <>
        {cart.length > 0 ? (
          <>
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
              {cartGroupped.map((item, index) => {
                return (
                  <div key={index}>
                    <Acess>{item.name}</Acess>
                    {item.value.map(cart => (
                      <ProductItem key={cart.id}>
                        <Link to={`/produtos/${cart.id}`}>
                          <ProductImage>
                            <img src={cart.image} />
                          </ProductImage>
                        </Link>
                        <CardCenter>
                          <Link to={`/produtos/${cart.id}`}>
                            <ProductName>{cart.name}</ProductName>
                            <PricesBox>
                              <ProductQty>
                                {cart.amount}x {cart.weight}
                              </ProductQty>
                              <CloseIcon sx={{ mx: 'auto', my: 'auto' }} />
                              <ProductPrice>R$ {cart.price?.toFixed(2)} </ProductPrice>
                            </PricesBox>
                            <ProductTotal>Total: R$ {item.totalAmount?.toFixed(2)} </ProductTotal>
                          </Link>
                        </CardCenter>
                        <Icon style={{ alignItems: 'flex-start' }}>
                          {/* <button
                            onClick={() => {
                              setProductDetails(prev => {
                                return { ...prev, amount: prev.amount >= 1 ? prev.amount - 1 : 0 };
                              });
                            }}
                          >
                            <RemoveIcon style={{ color: '#3BA032' }} />
                          </button>

                          <ItemUnit>
                            {productDetails.amount.toLocaleString('pt-BR', {
                              minimumIntegerDigits: 2,
                              useGrouping: false,
                            })}
                          </ItemUnit>

                          <button
                            onClick={() =>
                              setProductDetails(prev => {
                                return { ...prev, amount: prev.amount + 1 };
                              })
                            }
                          >
                            <AddIcon style={{ color: '#3BA032' }} />
                          </button> */}
                        </Icon>
                      </ProductItem>
                    ))}
                  </div>
                );
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
          </>
        ) : (
          <NothingFound>não foram encontrados produtos no carrinho</NothingFound>
        )}
      </>
    </Container>
  );
};

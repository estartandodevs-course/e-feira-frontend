/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import _ from 'lodash';
import { useEffect, useMemo } from 'react';
import { Stack, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import {
  // Icon,
  Acess,
  Adress,
  AdressCard,
  AdressContainer,
  AdressTitle,
  ButtonContainer,
  CardCenter,
  Container,
  DeliveryPlace,
  CardRight,
  IconContainer,
  ItemUnit,
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

export const CartComponent = () => {
  const { cart, updateCart } = useCart();

  const cartGrouped = useMemo(() => {
    const newCart = _.groupBy(cart, 'provider_name');
    return Object.entries(newCart).map(([key, value]) => ({
      name: key,
      value,
    }));
  }, [cart]);

  const handleChangeProductCart = (id, amount) => {
    const productInCart = cart.find(item => +item.id === +id);
    updateCart({
      ...productInCart,
      amount: amount,
      totalAmount: productInCart.price * amount,
    });
  };

  const grandTotal = _.sumBy(cart, 'totalAmount');

  // const counts = cart.reduce(function (result, product) {
  //   product.ingredients.forEach(function () {
  //     result[cart.totalAmount] = (result[totalAmount] || 0) + 1;
  //   });
  //   return result;
  // }, {});

  // console.log(handleChangeProductCart.totalAmount);

  // useEffect(() => {
  //   console.log({ cartGrouped, cart });
  // }, [cartGrouped, cart]);

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
              {cartGrouped.map((item, index) => {
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
                                {cart.amount} - {cart.weight}
                              </ProductQty>
                              <CloseIcon sx={{ mx: 'auto', my: 'auto' }} />
                              <ProductPrice>R$ {cart.price?.toFixed(2)} </ProductPrice>
                            </PricesBox>
                            <ProductTotal>Total: R$ {cart.totalAmount?.toFixed(2)} </ProductTotal>
                          </Link>
                        </CardCenter>
                        <CardRight>
                          <button
                            onClick={() => handleChangeProductCart(cart.id, cart.amount >= 1 ? cart.amount - 1 : 0)}
                          >
                            <RemoveIcon style={{ color: '#3BA032' }} />
                          </button>

                          <ItemUnit>
                            {cart.amount.toLocaleString('pt-BR', {
                              minimumIntegerDigits: 2,
                              useGrouping: false,
                            })}
                          </ItemUnit>

                          <button onClick={() => handleChangeProductCart(cart.id, cart.amount + 1)}>
                            <AddIcon style={{ color: '#3BA032' }} />
                          </button>
                        </CardRight>
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
              <SubTotalOrderValue>
                Subtotal:
                <span>R$ {grandTotal.toFixed(2)}</span>
              </SubTotalOrderValue>
              <ShippingPrice>
                Taxa de Entrega:
                <span>R$ {grandTotal.toFixed(2)}</span>
              </ShippingPrice>
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
          <NothingFound>ainda não doi selecionado nenhum produto</NothingFound>
        )}
      </>
    </Container>
  );
};

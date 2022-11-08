import { useMemo } from 'react';
import { useCart } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { Stack, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import {
  Acess,
  Adress,
  AdressCard,
  AdressContainer,
  AdressTitle,
  ButtonContainer,
  CardCenter,
  CardRight,
  Container,
  DeliveryPlace,
  IconContainer,
  ItemUnit,
  KeepBuying,
  NothingFound,
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
                              <ProductQty>{cart.weight} x </ProductQty>

                              <ProductPrice>R$ {cart.price?.toFixed(2)} </ProductPrice>
                            </PricesBox>
                            <ProductTotal>
                              {cart.amount} Un. R$ {cart.totalAmount?.toFixed(2)}{' '}
                            </ProductTotal>
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
                <Link to={`/`}>
                  <Text>
                    Continuar comprando
                    <IconContainer>
                      <ArrowForwardIosIcon className="arrow-icon" fontSize="large" />
                    </IconContainer>
                  </Text>
                </Link>
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
              <PaymentText></PaymentText>
              <PaymentLogo></PaymentLogo>
              <PaymentInfo>Pagamento em dinheiro na entrega</PaymentInfo>
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
                  onClick={() => cart}
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

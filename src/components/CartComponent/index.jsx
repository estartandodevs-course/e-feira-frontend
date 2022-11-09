import { useMemo } from 'react';
import { useCart } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import MapIcon from '../../assets/images/map';
import { Stack, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TextField from '@mui/material/TextField';
import { ApiServer } from '../../services/Api';

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
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

export const CartComponent = () => {
  const { cart, updateCart } = useCart();



  const [address, setAddress] = useState();
  // eslint-disable-next-line
  const form = useFormik({
    initialValues: [
      {
        order: {
          address: 'rua papagio, 555',
          payment_method: 'Dinheiro',
          total_price: 0,
          change: 0,
          delivery_tax: 5,
        },
      },
      {
        order_itens: [
          {
            amount: 0,
            individual_price: 0,
            product_id: 0,
          },
        ],
      },
    ],
  });


  const cartGrouped = useMemo(() => {
    const newCart = _.groupBy(cart, 'provider_name');
    return Object.entries(newCart).map(([key, value]) => ({
      name: key,
      value,
    }));
  }, [cart]);

  const postProduct = id => {
    const data = {
      order: {
        address: '',
        payment_method: 'Dinheiro',
        total_price: cartGrouped[0].value[0].totalAmount,
        change: cartGrouped[0].value[0].change,
        delivery_tax: 5,
      },
      order_itens: [
        {
          amount: cartGrouped[0].value[0].amount,
          individual_price: cartGrouped[0].value[0].price,
          product_id: cartGrouped[0].value[0].id,
        },
      ],
    };

    console.log(id);

    ApiServer.post(`checkout`, data)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleChangeProductCart = (id, amount) => {
    const productInCart = cart.find(item => +item.id === +id);
    updateCart({
      ...productInCart,
      amount: amount,
      totalAmount: productInCart.price * amount,
    });
  };

  const grandTotal = _.sumBy(cart, 'totalAmount');

  const frete = 5;

  function loadGeolocation() {
    navigator.geolocation.getCurrentPosition(function (position) {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      if (lat && lng) {
        loadAddressByGeolocation(lat, lng);
      }
    });
  }

  useEffect(() => {
    loadGeolocation();
  }, []);

  const GOOGLE_PLACES_API_KEY = 'AIzaSyCJ2H3qLvFbfiWqZb6PyJgGBIUUoOpQObU';

  async function loadAddressByGeolocation(lat, lng) {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&inputtype=textquery&fields=formatted_address&key=${GOOGLE_PLACES_API_KEY}`;

    const response = await axios.get(url);

    const results = response.data.results;
    if (results.length > 0) {
      const [firstAddress] = results;
      setAddress(firstAddress.formatted_address);
    }
  }

  return (
    <Container>
      <>
        {address && (
          <AdressContainer>
            <AdressTitle>Endereço de Entrega</AdressTitle>
            <AdressCard>
              <MapIcon className="map-icon" />
              <Adress>
                <p>{address}</p>
              </Adress>
            </AdressCard>
          </AdressContainer>
        )}
        {cart.length > 0 ? (
          <>
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

                          <button onClick={() => handleChangeProductCart(cart[0].id, cart.amount + 1)}>
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
                <span>R$ {frete.toFixed(2)}</span>
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
                  onClick={() => postProduct(cart[0].id)}
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

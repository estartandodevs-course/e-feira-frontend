import { useMemo, useEffect, useState } from 'react';
import { useCart } from '../../contexts/CartContext';
import axios from 'axios';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { Stack, Button, Modal, Box, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { ApiServer } from '../../services/Api';
import efeiraLogo from '../../assets/images/logo_transparent.png';
import {
  Acess,
  Address,
  AddressCard,
  AddressContainer,
  AddressTitle,
  ButtonContainer,
  ButtonMessage,
  CardCenter,
  CardRight,
  Container,
  IconContainer,
  ImgCard,
  ItemUnit,
  KeepBuying,
  Message,
  NothingFound,
  OrderContainer,
  Payment,
  PaymentInfo,
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
import MapIcon from '../../assets/images/map.jsx';
import MoneyIcon from '../../assets/images/money';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const CartComponent = () => {
  const { cart, updateCart } = useCart();

  const [address, setAddress] = useState();
  const [orderNumber, setOrderNumber] = useState();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const cartGrouped = useMemo(() => {
    const newCart = _.groupBy(cart, 'provider_name');
    return Object.entries(newCart).map(([key, value]) => ({
      name: key,
      value,
    }));
  }, [cart]);

  const postProduct = () => {
    const data = {
      order: {
        address: cartGrouped[0].value[0].address,
        payment_method: 'Dinheiro',
        total_price: cartGrouped[0].value[0].totalAmount,
        grand_total: cartGrouped[0].value[0].grandTotal,
        delivery_tax: cartGrouped[0].value[0].freight,
      },
      order_itens: [
        {
          amount: cartGrouped[0].value[0].amount,
          individual_price: cartGrouped[0].value[0].price,
          product_id: cartGrouped[0].value[0].id,
        },
      ],
    };

    ApiServer.post('checkout', data, {
      headers: {
        userid: 1,
      },
    })
      .then(response => {
        setOrderNumber(response.data.id);
        handleOpen();
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

  const total_price = _.sumBy(cart, 'totalAmount');
  const freight = total_price * 0.3;
  const grandTotal = total_price + freight;

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
          <AddressContainer>
            <AddressTitle>Entregar em</AddressTitle>
            <AddressCard>
              <MapIcon className="map-icon" />
              <Address>
                <p>{address}</p>
              </Address>
            </AddressCard>
          </AddressContainer>
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
                <span>R$ {total_price.toFixed(2)}</span>
              </SubTotalOrderValue>
              <ShippingPrice>
                Taxa de Entrega:
                <span>R$ {freight.toFixed(2)}</span>
              </ShippingPrice>
              <TotalOrder>
                Total:
                <span> R$ {grandTotal.toFixed(2)}</span>
              </TotalOrder>
              <Thing></Thing>
            </OrderContainer>

            <Payment>
              <PaymentText>Pagamento</PaymentText>

              <PaymentInfo>
                <MoneyIcon className="money-icon" />
                Pagamento em dinheiro na entrega
              </PaymentInfo>

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
                  >
                    <label>{(cart.inCart = 'Finalizar a Compra')}</label>
                  </Button>
                </Stack>
              </ButtonContainer>
            </Payment>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 250,
                  bgcolor: 'background.paper',
                  border: '2px solid #000',
                  boxShadow: 24,
                  p: 4,
                }}
              >
                <ImgCard sx={{ backgroundColor: 'red' }}>
                  <img src={efeiraLogo} alt="logo" width="120" />
                </ImgCard>
                <DialogContent>
                  <DialogContentText id="dialog-description">
                    <Message>
                      <b>Pedido nr.{orderNumber}</b>
                      <br />O seu pedido foi confirmado com sucesso! <br />
                      Fique de olho no seu e-mail que você receberá uma mensagem com os detalhes da sua compra.
                    </Message>
                  </DialogContentText>
                </DialogContent>
                <DialogActions style={{ justifyContent: 'center' }}>
                  <ButtonMessage>
                    <Button autoFocus className="btn-back" style={{ fontSize: 14, backgroundColor: '#309f5d' }}>
                      <Link onClick={() => setOpen(false)} to={`/`}>
                        Voltar para a tela inicial
                      </Link>
                    </Button>
                  </ButtonMessage>
                </DialogActions>
              </Box>
            </Modal>
          </>
        ) : (
          <NothingFound>ainda não foi selecionado nenhum produto</NothingFound>
        )}
      </>
    </Container>
  );
};

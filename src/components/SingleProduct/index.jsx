import { useEffect, useState } from 'react';
import {
  ButtonContainer,
  Card,
  CardInformation,
  CardPrice,
  CardSubTitle,
  CardTitle,
  Container,
  Icon,
  IconContainer,
  ItemUnit,
  MeetSupplier,
  MeetSupplierLeft,
  MeetSupplierRight,
  TextInfo,
  TextQuestion,
} from './styles';
import { useNavigate, useParams } from 'react-router-dom';
import { Stack, Button } from '@mui/material';
import { useCart } from '../../contexts/CartContext';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import productApi from '../../services/products';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export const SingleProduct = () => {
  const { listProductById } = productApi;
  const [productDetails, setProductDetails] = useState({
    name: '',
    subtitle: '',
    image: '',
    image_alt: '',
    amount: 0,
    price: 0,
    totalAmount: 0,
    provider_id: 0,
    provider_name: '',
  });

  const navigate = useNavigate();
  const { cart, updateCart } = useCart();
  const { id } = useParams();

  const SelectedItem = () => {
    navigate(`/fornecedor/${productDetails.provider_id}`, {
      replace: true,
    });
  };

  useEffect(() => {
    const loadProductData = async () => {
      const res = await listProductById(id);
      if (res.success) {
        const product = res.data[0].product_info[0];
        const productsExists = cart.find(item => item.id === product.id && item.provider_id === product.provider_id);
        return setProductDetails({
          id: product.id,
          name: product.name,
          subtitle: product.subtitle,
          weight: product.weight,
          image: product.image,
          image_alt: product.alt,
          amount: productsExists ? productsExists.amount : 0,
          price: product.price,
          totalAmount: productsExists ? product.price * productsExists.amount : 0,
          provider_id: product.provider_id,
          provider_name: res.data[0].provider_name,
          inCart: productsExists ? true : false,
        });
      }
      return;
    };
    productDetails.name === '' && loadProductData();
  }, [id, cart, productDetails.name]);

  return (
    <Container key={productDetails.id}>
      <Card>
        <img src={productDetails.image} alt={productDetails.alt} />

        <CardTitle>{productDetails.name}</CardTitle>
        <CardSubTitle>{productDetails.subtitle}</CardSubTitle>
      </Card>
      <TextInfo>
        <TextQuestion>Adicionar mais?</TextQuestion>
        <CardPrice>
          <p>R${productDetails.price?.toFixed(2)}</p>
          <Icon style={{ alignItems: 'flex-start' }}>
            <button
              onClick={() => {
                setProductDetails(prev => {
                  const amount = prev.amount >= 1 ? prev.amount - 1 : 0;
                  return { ...prev, amount: amount, totalAmount: prev.price * amount };
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
                  const amount = prev.amount + 1;
                  return { ...prev, amount: amount, totalAmount: prev.price * amount };
                })
              }
            >
              <AddIcon style={{ color: '#3BA032' }} />
            </button>
          </Icon>
        </CardPrice>

        <CardInformation>
          <MeetSupplier onClick={SelectedItem}>
            <MeetSupplierLeft>
              <FavoriteBorderIcon fontSize="large" />
              Conheça o fornecedor
            </MeetSupplierLeft>
            <MeetSupplierRight>
              <IconContainer>
                <ChevronRightIcon fontSize="large" />
              </IconContainer>
            </MeetSupplierRight>
          </MeetSupplier>
        </CardInformation>
      </TextInfo>
      <ButtonContainer>
        <Button description={'Enviar Para Sacola'} />

        <Stack spacing={2} direction="row">
          <Button
            style={{
              width: '100%',
              background: '#3ba032',
              borderRadius: '8px',
              justifyContent: 'center',
              letterSpacing: '0.0125em',
              textTransform: 'uppercase',
              color: '#fff',
              fontWeight: '500',
              fontSize: '16px',
              lineHeight: '120%',
              border: 'none',
              padding: '1rem 1rem',
            }}
            onClick={() => updateCart(productDetails)}
          >
            <label>{productDetails.inCart ? 'Atualizar sacola' : 'Enviar para a sacola'}</label>
          </Button>
        </Stack>
      </ButtonContainer>
    </Container>
  );
};

import React from 'react';
import { useEffect, useState } from 'react';
import {
  ButtonContainer,
  Card,
  CardInformations,
  CardPrice,
  CardSubTitle,
  CardTitle,
  Container,
  Icon,
  IconContainer,
  ItemUnit,
  MeetSupplier,
  PriceCompare,
  TextInfo,
  TextQuestion,
} from './styles';
import { ApiServer } from '../../services/Api';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Stack, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useContentUserActive } from '../../useContent';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RemoveIcon from '@mui/icons-material/Remove';

export const SingleProduct = () => {
  const [productDetails, setProductDetails] = useState({});

  const [itemCount, setItemCount] = useState(0);

  const navigate = useNavigate();

  const { id } = useParams();

  const { userActive, setUserActive } = useContentUserActive();

  const SelectedItem = () => {
    navigate(`/${productDetails.provider_id}`, {
      replace: true,
    });
  };

  const handleAddToCart = checkedItem => {
    const data = {
      checkedItem,
      amount: itemCount,
    };

    setUserActive(prev => {
      const isItemInCart = prev.find(item => item.id === data.checkedItem.id);

      if (isItemInCart) {
        return prev.map(item => (item.id === data.checkedItem.id ? { data } : item));
      }

      return [...prev, { ...data }];
    });
  };
  useEffect(() => {
    ApiServer.get('/products/' + id)
      .then(response => {
        setProductDetails(response.data[0].product_info[0]);
      })
      .catch(error => {
        console.log(error);
      });
    console.log(userActive);
  }, [userActive]);

  // console.log(productDetails);
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
                setItemCount(Math.max(itemCount - 1, 0));
              }}
            >
              <RemoveIcon style={{ color: '#3BA032' }} />
            </button>

            <ItemUnit>
              {itemCount.toLocaleString('pt-BR', {
                minimumIntegerDigits: 2,
                useGrouping: false,
              })}
            </ItemUnit>

            <button
              onClick={() => {
                setItemCount(itemCount + 1);
              }}
            >
              <AddIcon style={{ color: '#3BA032' }} />
            </button>
          </Icon>
        </CardPrice>

        <CardInformations>
          <MeetSupplier>
            <div onClick={SelectedItem}>
              <FavoriteBorderIcon fontSize="large" />
              Conheça o fornecedor
              <IconContainer>
                <ChevronRightIcon fontSize="large" />
              </IconContainer>
            </div>
          </MeetSupplier>

          <PriceCompare>
            <ErrorOutlineIcon fontSize="large" />
            Compare o preço
            <IconContainer>
              <ChevronRightIcon fontSize="large" />
            </IconContainer>
          </PriceCompare>
        </CardInformations>
      </TextInfo>
      <ButtonContainer>
        <Button description={'Enviar Para Sacola'} />

        <Stack spacing={2} direction="row">
          <Button
            style={{
              width: '110%',
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
            onClick={() => handleAddToCart(productDetails)}
          >
            <label>Enviar para sacola</label>
          </Button>
        </Stack>
      </ButtonContainer>
    </Container>
  );
};

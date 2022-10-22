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
import { Button } from '../Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AddIcon from '@mui/icons-material/Add';

import RemoveIcon from '@mui/icons-material/Remove';

export const SingleProduct = () => {
  const [productDetails, setProductDetails] = useState([]);

  const [itemCount, setItemCount] = React.useState(0);
  console.log(itemCount);

  useEffect(() => {
    ApiServer.get('/products/provider-page')
      .then(response => {
        setProductDetails(response.data[0].products[0]);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  console.log(productDetails);
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
          <p>R${productDetails.price}</p>
          <Icon style={{ alignItems: 'flex-start' }}>
            <button
              onClick={() => {
                setItemCount(Math.max(itemCount - 1, 0));
              }}
            >
              {' '}
              <RemoveIcon style={{ color: '#3BA032' }} />
            </button>

            <ItemUnit>
              {' '}
              {itemCount.toLocaleString('pt-BR', {
                minimumIntegerDigits: 2,
                useGrouping: false,
              })}{' '}
            </ItemUnit>

            <button
              onClick={() => {
                setItemCount(itemCount + 1);
              }}
            >
              {' '}
              <AddIcon style={{ color: '#3BA032' }} />
            </button>
          </Icon>
        </CardPrice>

        <CardInformations>
          <MeetSupplier>
            
            <FavoriteBorderIcon fontSize="large" />
            Conheça o fornecedor
            <IconContainer>
              <ChevronRightIcon fontSize="large" />
            </IconContainer>
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
      </ButtonContainer>
    </Container>
  );
};

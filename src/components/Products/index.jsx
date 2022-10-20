import React from 'react';
import { useEffect, useState } from 'react';
import {
  Container,
  Card,
  CardTitle,
  CardSubTitle,
  TextInfo,
  TextQuestion,
  CardPrice,
  CardInformations,
  MeetSupplier,
  PriceCompare,
  IconContainer,
} from './styles';
import { ApiServer } from '../../services/Api';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export const Products = () => {
  const [productDetails, setProductDetails] = useState([]);

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
    <Container>
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
      </Container>
    </Container>
  );
};

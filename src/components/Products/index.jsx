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
} from './styles';
import { ApiServer } from '../../services/Api';

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
            <MeetSupplier> </MeetSupplier>
            <PriceCompare> </PriceCompare>
          </CardInformations>
        </TextInfo>
      </Container>
    </Container>
  );
};

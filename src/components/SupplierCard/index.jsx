import React from 'react';
import { Access, Card, CardImg, CardSubTitle, CardTitle, Container, Main, MainImage } from './styles';
import { useEffect } from 'react';
import { ApiServer } from '../../services/Api';
import { useParams, useLocation } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/pagination';

export const SupplierCard = () => {
  const { id } = useParams();
  const { state } = useLocation();

  useEffect(() => {
    ApiServer.get('home/street-market-latest')
      .then(response => {
        response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <Container id={id}>
      <>
        <Access>{state.item.title}</Access>
        <MainImage src={state.item.image} />

        <Main>
          {/* <Swiper slidesPerView={1.5} spaceBetween={10} loop={true} className="mySwiper"> */}
          {state.item.products.map(item => {
            return (
              <Card key={item.id}>
                <CardImg>
                  <img src={item.image} alt={item.alt} />
                  <CardTitle>{item.name}</CardTitle>
                  <CardSubTitle>{item.subtitle}</CardSubTitle>
                </CardImg>
              </Card>
            );
          })}
          {/* </Swiper> */}
        </Main>
      </>
    </Container>
  );
};

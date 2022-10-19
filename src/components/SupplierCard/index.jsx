import React from 'react';
import { Access, Card, CardImg, CardSubTitle, CardTitle, Container, Main, MainImage } from './styles';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ApiServer } from '../../services/Api';
import { useParams, useLocation } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/pagination';

export const SupplierCard = () => {
  const [setlatestMarket] = useState([]);
  const { id } = useParams();
  const { state } = useLocation();

  useEffect(() => {
    ApiServer.get('home/street-market-latest')
      .then(response => {
        setlatestMarket(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  console.log(id);
  console.log('state ::', state);
  // const selectedSupplier = latestMarket.find(supplier => supplier.id);

  // console.log(selectedSupplier);
  // const newObject = Object.values(latestMarket);
  // console.log(newObject);

  return (
    <Container>
      <>
        <Access>{state.item.title}</Access>
        <MainImage src={state.item.image} />

        <Main>
          <Swiper slidesPerView={1.5} spaceBetween={10} loop={true} className="mySwiper">
            {state.item.products.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <Card>
                    <CardImg>
                      <img src={item.image} alt={item.alt} />
                      <CardTitle>{item.name}</CardTitle>
                      <CardSubTitle>{item.subtitle}</CardSubTitle>
                    </CardImg>
                  </Card>
                </SwiperSlide>
              );
              // }
              // return null;
            })}
          </Swiper>
        </Main>
      </>
    </Container>
  );
};

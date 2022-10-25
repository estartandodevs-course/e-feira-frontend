import React from 'react';
import { Access, Card, CardImg, CardSubTitle, CardTitle, Container, Main, MainImage } from './styles';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ApiServer } from '../../services/Api';
import { useParams } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';

export const SupplierCard = () => {
  const { id } = useParams();

  const [provider, setProvider] = useState({ products: [[]] });

  useEffect(() => {
    ApiServer.get('/provider-page/' + id)
      .then(response => {
        setProvider(response.data[0]);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <Container id={id}>
      <>
        <Access>{provider.name}</Access>
        <MainImage src={provider.url} />

        <Main>
          <Swiper slidesPerView={1.5} spaceBetween={10} loop={true} className="mySwiper">
            {provider.products[0].map(item => {
              return (
                <SwiperSlide key={item.id}>
                  <Card>
                    <CardImg>
                      <img src={item.image} alt={item.alt} />
                      <CardTitle>{item.name}</CardTitle>
                      <CardSubTitle>{item.subtitle}</CardSubTitle>
                    </CardImg>
                  </Card>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Main>
      </>
    </Container>
  );
};

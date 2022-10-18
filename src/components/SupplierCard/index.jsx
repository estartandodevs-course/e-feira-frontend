import React from 'react';
import { Access, Card, CardImg, CardSubTitle, CardTitle, Container, Main, Title } from './styles';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ApiServer } from '../../services/Api';
import 'swiper/css';
import 'swiper/css/pagination';

export const SupplierCard = () => {
  const [latestMarket, setlatestMarket] = useState([]);

  useEffect(() => {
    ApiServer.get('home/latest-streetMarket')
      .then(response => {
        setlatestMarket(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <Title>Última banca</Title>

      {latestMarket.length > 0 &&
        latestMarket.map(item => (
          <>
            <Access>{item.title}</Access>

            <Main>
              <Swiper slidesPerView={1.5} spaceBetween={10} loop={true} className="mySwiper">
                {item.products.map((item, index) => {
                  // if (item.title === 'Vendinha do seu Francisco') {
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
        ))}
    </Container>
  );
};

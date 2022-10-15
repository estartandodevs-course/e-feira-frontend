import React from 'react';
import {
Access,
Card,
CardImg,
CardSubTitle,
CardTitle,
Container,
Market,
Title,
} from './styles';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

export const LatestMarket = () => {
  const [latestMarket, setlatestMarket] = useState([]);

  const apiUrl = 'https://private-ea557-efeira1.apiary-mock.com/home/latest-streetMarket';

  function pullLastMarket() {
   
    fetch(apiUrl)
      .then(response => response.json())
      .then(responseData => {
        setlatestMarket(responseData);
      })
      .catch(error => {
        console.error(error);
      });
  }

  useEffect(() => {
    pullLastMarket();
  }, []);

  return (
    <Container>
      <Title>Última banca</Title>
      <Access>
        {/*  // aqui vai verificar qual é o ultima banca que foi visualizada, vista //  */}
        Vendinha do seu Francisco
      </Access>
      {latestMarket?.length > 0 ? (
        <Market>
          <Swiper slidesPerView={1.5} spaceBetween={10} loop={true} className="mySwiper">
            {latestMarket[0].products.map((item, index) => {
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
        </Market>
      ) : null}
    </Container>
  );
};

import React from 'react';
import { Access, Card, CardImg, CardSubTitle, CardTitle, Container, Main, Title } from './styles';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ApiServer } from '../../services/Api';
import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';

export const Latest = () => {
  const [latestMarket, setlatestMarket] = useState([]);
  const navigate = useNavigate();

  const SelectedItem = item => {
    navigate(`/fornecedor/${item.id}`, {
      replace: true,
      state: { item },
    });
  };

  useEffect(() => {
    ApiServer.get('home/street-market-latest')
      .then(response => {
        setlatestMarket(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <Title>Últimas Bancas</Title>

      {latestMarket.length > 0 &&
        latestMarket.map(item => (
          <Main key={item.id}>
            <Access onClick={() => SelectedItem(item)}>{item.title}</Access>

            <Swiper slidesPerView={1.5} spaceBetween={10} loop={true} className="mySwiper">
              {item.products.map(item => {
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
        ))}
    </Container>
  );
};

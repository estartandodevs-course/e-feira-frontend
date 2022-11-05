import React from 'react';
import { Access, Card, CardBox, CardImg, CardSubTitle, CardTitle, Container, Main, Title } from './styles';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ApiServer } from '../../services/Api';
import { useNavigate, Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';

export const Latest = () => {
  const [latestMarket, setLatestMarket] = useState([]);
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
        setLatestMarket(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <Title>Bancas</Title>

      {latestMarket.length > 0 &&
        latestMarket.map((item, index) => (
          <Main key={index}>
            <Access onClick={() => SelectedItem(item)}>{item.title}</Access>

            <Swiper slidesPerView={1.5} spaceBetween={10} loop={true} className="mySwiper">
              {item.products[0].map(item => {
                return (
                  <SwiperSlide key={item.id}>
                    <Card>
                      <CardBox>
                        <CardImg>
                          <Link to={`/produtos/${item.id}`}>
                            <img src={item.image} alt={item.alt} />
                          </Link>
                        </CardImg>

                        <CardTitle>{item.name}</CardTitle>
                        <CardSubTitle>{item.subtitle}</CardSubTitle>
                      </CardBox>
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

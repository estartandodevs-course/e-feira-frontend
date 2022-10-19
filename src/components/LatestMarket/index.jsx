import React from 'react';
import { Access, Card, CardImg, CardSubTitle, CardTitle, Container, Main, Title } from './styles';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ApiServer } from '../../services/Api';
import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';

export const LatestMarket = () => {
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
      <Title>Última banca</Title>

      {latestMarket.length > 0 &&
        latestMarket.map(item => (
          <>
            <Access onClick={() => SelectedItem(item)}>{item.title}</Access>

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

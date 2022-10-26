import React from 'react';
import {
  Access,
  Card,
  CardDescription,
  CardImg,
  CardLeft,
  CardSubTitle,
  CardTitle,
  ContactInfo,
  Container,
  Main,
  MainImage,
  SupplierDescription,
} from './styles';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ApiServer } from '../../services/Api';
import { useParams } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

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
      <MainImage src={provider.url} />
      <Access>{provider.name}</Access>

      <SupplierDescription>{provider.description}</SupplierDescription>
      <ContactInfo>
        {provider.phoneNumber?.map((item, index) => (
          <>
            <LocalPhoneOutlinedIcon />
            <p key={index}>{item}</p>
          </>
        ))}
      </ContactInfo>
      <Swiper
        noSwiping={true}
        allowTouchMove={false}
        navigation={false}
        // autoHeight={true}
        slidesPerView={1}
        spaceBetween={10}
        // direction="vertical"
        loop={true}
        className="mySwiper"
      >
        <Main>
          {provider.products[0].map(item => {
            return (
              <SwiperSlide key={item.id}>
                <Card className="cardBox">
                  <CardLeft>
                    <CardImg>
                      <img src={item.image} alt={item.alt} />
                    </CardImg>
                  </CardLeft>
                  <CardDescription>
                    <CardTitle>{item.name}</CardTitle>
                    <CardSubTitle>{item.subtitle}</CardSubTitle>
                  </CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Main>
      </Swiper>
    </Container>
  );
};

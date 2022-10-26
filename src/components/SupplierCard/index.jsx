import React from 'react';
import {
  Access,
  Card,
  CardDescription,
  CardImg,
  CardLeft,
  CardRight,
  CardSubTitle,
  CardTitle,
  ContactInfo,
  ContactPhone,
  Container,
  ItemPrice,
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
    <>
      <MainImage src={provider.url} />
      <Container>
        <Access>{provider.name}</Access>

        <SupplierDescription>{provider.description}</SupplierDescription>
        <ContactInfo>
          {provider.phoneNumber?.map((item, index) => (
            <ContactPhone key={index}>
              <LocalPhoneOutlinedIcon />
              <a href="tel:${item}"> {item}</a>
            </ContactPhone>
          ))}
        </ContactInfo>
        <>
          <Swiper
            width={450}
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
                      <CardRight>
                        <CardDescription>
                          <CardTitle>{item.name}</CardTitle>
                          <CardSubTitle>{item.subtitle}</CardSubTitle>
                          <ItemPrice>R${item.price}</ItemPrice>
                        </CardDescription>
                      </CardRight>
                    </Card>
                  </SwiperSlide>
                );
              })}
            </Main>
          </Swiper>
        </>
      </Container>
    </>
  );
};

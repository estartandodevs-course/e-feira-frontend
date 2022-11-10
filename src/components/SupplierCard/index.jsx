import { useEffect, useState } from 'react';
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
  HeaderButton,
  ItemPrice,
  Main,
  MainImage,
  SupplierDescription,
} from './styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ApiServer } from '../../services/Api';
import { useParams, useLocation, Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';

export const SupplierCard = () => {
  const { pathname } = useLocation();

  let backButton =
    pathname === '/' ? null : (
      <Link to="/">
        <ArrowBackIosNewOutlinedIcon fontSize="large" />
      </Link>
    );

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
      <HeaderButton>{backButton}</HeaderButton>
      <MainImage src={provider.url} />
      <Container>
        <Access>{provider.name}</Access>

        <SupplierDescription>{provider.description}</SupplierDescription>
        <ContactInfo>
          {provider.phoneNumber?.map((item, index) => (
            <ContactPhone key={index}>
              <LocalPhoneOutlinedIcon />
              <Link to="tel:${item}"> {item}</Link>
            </ContactPhone>
          ))}
        </ContactInfo>
        <>
          <Swiper
            width={450}
            noSwiping={true}
            allowTouchMove={false}
            navigation={false}
            slidesPerView={1}
            spaceBetween={10}
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
                          <Link to={`/produtos/${item.id}`}>
                            <img src={item.image} alt={item.alt} />
                          </Link>
                        </CardImg>
                      </CardLeft>
                      <CardRight>
                        <CardDescription>
                          <CardTitle>{item.name}</CardTitle>
                          <CardSubTitle>{item.subtitle}</CardSubTitle>
                          <ItemPrice>R$ {item.price.toFixed(2)}</ItemPrice>
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

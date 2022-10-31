import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useEffect, useState } from 'react';
import {
  Card,
  CardDescription,
  CardImg,
  CardLeft,
  CardRight,
  CardSubTitle,
  CardTitle,
  Container,
  ItemPrice,
  Main,
} from './styles';
import { Link } from 'react-router-dom';
import productsApi from '../../services/products';

export const CategoriesPage = () => {
  const [productsCategories, setProductsCategories] = useState([]);
  useEffect(() => {}, []);
  return (
    <>
      <Container>
        <Swiper
          width={450}
          noSwiping={true}
          allowTouchMove={false}
          navigation={false}
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          className="mySwiperCategories"
        >
          <Main>
            {productsCategories.map(item => {
              return (
                <SwiperSlide key={item.id}>
                  <Card>
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
                        <ItemPrice> </ItemPrice>
                      </CardDescription>
                    </CardRight>
                  </Card>
                </SwiperSlide>
              );
            })}
          </Main>
        </Swiper>
      </Container>
    </>
  );
};
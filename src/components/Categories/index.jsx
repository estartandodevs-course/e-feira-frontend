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
  // PageTitle,
} from './styles';
import { Link, useParams } from 'react-router-dom';
import { ApiServer } from '../../services/Api';

export const CategoriesPage = () => {
  const { id } = useParams();
  const [productsCategories, setProductsCategories] = useState([]);

  useEffect(() => {
    ApiServer.get('/products')
      .then(response => {
        setProductsCategories(response.data.filter(item => item.category_id == id));
      })
      .catch(error => {
        console.log(error);
      });
  });

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
          {productsCategories.length > 0 ? (
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
                          <ItemPrice>R$ {item.price} </ItemPrice>
                        </CardDescription>
                      </CardRight>
                    </Card>
                  </SwiperSlide>
                );
              })}
            </Main>
          ) : null}
        </Swiper>
      </Container>
    </>
  );
};

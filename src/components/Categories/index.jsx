import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link, useParams } from 'react-router-dom';
import { ApiServer } from '../../services/Api';
import 'swiper/css';
import 'swiper/css/pagination';
import { Box } from '@mui/material';
import {
  Card,
  CardBottom,
  CardDescription,
  CardImg,
  CardLeft,
  CardRight,
  CardSubTitle,
  CardTitle,
  Container,
  ItemPrice,
  PageTitle,
} from './styles';

export const CategoriesPage = () => {
  const { id } = useParams();
  const [productsCategories, setProductsCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    ApiServer.get('/products')
      .then(response => {
        setProductsCategories(response.data.filter(item => item.category_id == id));
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
  });

  return (
    <>
      <div style={{ display: loading ? 'block' : 'none' }}>
        <PageTitle>Carregando...</PageTitle>
      </div>
      <div style={{ display: loading ? 'none' : 'block' }}>
        <Container>
          <Swiper
            width={400}
            noSwiping={true}
            allowTouchMove={false}
            navigation={false}
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            className="mySwiperCategories"
            // breakpoints={{
            //   300: {
            //     width: 50,
            //   },
            // }}
          >
            {productsCategories.length > 0 ? (
              <Box>
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
                            <CardBottom>
                              <CardSubTitle>{item.subtitle}</CardSubTitle>
                              <ItemPrice>R$ {item.price.toFixed(2)} </ItemPrice>
                            </CardBottom>
                          </CardDescription>
                        </CardRight>
                      </Card>
                    </SwiperSlide>
                  );
                })}
              </Box>
            ) : (
              <PageTitle>no momento não encontramos produtos disponiveis nesta categoria</PageTitle>
            )}
          </Swiper>
        </Container>
      </div>
    </>
  );
};

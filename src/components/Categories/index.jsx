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
  HeaderButton,
  ItemPrice,
  Main,
  PageTitle,
} from './styles';
import { Link, useLocation } from 'react-router-dom';
import { ApiServer } from '../../services/Api';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';

export const CategoriesPage = () => {
  const [productsCategories, setProductsCategories] = useState([]);

  const { pathname } = useLocation();

  let backButton =
    pathname === '/' ? null : (
      <Link to="/">
        <ArrowBackIosNewOutlinedIcon fontSize="large" />
      </Link>
    );

  useEffect(() => {
    ApiServer.get('/products/')
      .then(response => {
        setProductsCategories(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <HeaderButton>
        {backButton}
        <PageTitle>
          <Link to-={`/`}>Categorias</Link>
        </PageTitle>
      </HeaderButton>

      <Container>
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
          className="mySwiperCategories"
        >
          <Main>
            {productsCategories.map(item => {
              return (
                <SwiperSlide key={item.category_id}>
                  <Card>
                    <CardLeft>
                      <CardImg>
                        <Link to={`/produtos/}`}>
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

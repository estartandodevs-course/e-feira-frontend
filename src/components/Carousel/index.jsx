import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CategoriesTitles, Container, CategoriesCard, Card, CardTitle, CardImg } from './styles';
import { ApiServer } from '../../services/Api';
import { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';

export const CategoriesCarousel = () => {
  const [showCategories, setCategories] = useState([]);

  useEffect(() => {
    ApiServer.get('home/categories')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <CategoriesTitles> Categorias </CategoriesTitles>

      {showCategories?.length > 0 ? (
        <CategoriesCard>
          <Swiper slidesPerView={4.5} loop={true} spaceBetween={12} className="mySwiper">
            {showCategories.map(item => {
              if (item.type === 'categories-icon') {
                return (
                  <SwiperSlide key={item.id}>
                    <Card>
                      <CardImg>
                        <img src={item.image} alt={item.alt} />
                        <CardTitle>{item.name}</CardTitle>
                      </CardImg>
                    </Card>
                  </SwiperSlide>
                );
              }
              return null;
            })}
          </Swiper>
        </CategoriesCard>
      ) : null}
    </Container>
  );
};

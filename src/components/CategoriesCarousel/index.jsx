import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import data from '../../mocks/productCategories'
import { CategoriesTitles, Container, CategoriesCard, Card, CardTitle, CardImg } from './styles'
import "swiper/css";
import "swiper/css/pagination";

export const CategoriesCarousel = () => {
  const { dataCategories } = data; 
  return (
    <Container> 
      <CategoriesTitles> Categorias </CategoriesTitles>
       
        {dataCategories.length > 0 ? (
          <CategoriesCard>
            <Swiper
              slidesPerView={4}
              spaceBetween={12}
              className="mySwiper">
              
              {dataCategories.map((item) => {
                if (item.type === 'categories-icon'){
                  return (
                    <SwiperSlide key={item.id}>

                      <Card>
                        <CardImg>
                          <img 
                            src={item.image} alt={item.alt }/> 
                          <CardTitle>
                            {item.name}
                          </CardTitle> 
                        </CardImg>
                      </Card>

                    </SwiperSlide>
                  );
                }
                return null; 
              })}

            </Swiper>
          </CategoriesCard>
        ) : null }  
        
    </Container>
  )
}

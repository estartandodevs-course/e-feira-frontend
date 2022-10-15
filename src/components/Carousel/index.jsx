import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { CategoriesTitles, Container, CategoriesCard, Card, CardTitle, CardImg } from './styles'
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from 'react';

export const CategoriesCarousel = () => {

  const [showCategories, setCategories] = useState([]);

  const apiUrl = 'https://private-ea557-efeira1.apiary-mock.com/home/categories';

  function pullHCategories() {
    fetch(apiUrl)
      .then(response => response.json())
      .then(responseData => {
        setCategories(responseData )


      })
      .catch(error => {
        console.error(error);
      });
  }

  useEffect(() => {
    pullHCategories();
  }, []);

  // const { dataCategories } = data; 
  return (
    <Container> 
      <CategoriesTitles> Categorias </CategoriesTitles>
       
        {showCategories?.length > 0 ? (
          <CategoriesCard>
            <Swiper
            slidesPerView={4.5}
            loop={true}
              spaceBetween={12}
              className="mySwiper">
              
              {showCategories.map((item) => {
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

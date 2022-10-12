/* eslint-disable react/prop-types */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SliderBox  } from './styles';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import { useEffect, useState } from 'react';

const SlidesComponent = () => {

const [showHighlight, setHighlight] = useState([]);

  const apiUrl = 'https://private-ea557-efeira1.apiary-mock.com/home/highlights';

  function pullHighlights() {
    fetch(apiUrl)
      .then(response => response.json())
      .then(responseData => {
        setHighlight(responseData )
      })
      .catch(error => {
        console.error(error);
      });
  }

  useEffect(() => {
    pullHighlights();
  }, []);

  return (
    <>
      {showHighlight?.length > 0 ? (
        <SliderBox>
          <Swiper
            spaceBetween={30}
            loop={true}
            pagination={{
              el: '.swiper-custom-pagination',
              clickable: true,
            }}
            modules={[Pagination]}
            className="swiperSection"
          >
            {showHighlight.map((item, index) => (
              <SwiperSlide key={index}>
                
                <img src={item.url} alt="" />
              </SwiperSlide>
            ))}
            <div className="swiper-custom-pagination" />
          </Swiper>
        </SliderBox>
      ) : null}
    </>
  );
};

export { SlidesComponent };

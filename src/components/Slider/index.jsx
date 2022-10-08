/* eslint-disable react/prop-types */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import 'swiper/css/navigation';

const SlidesComponent = ({ slides }) => {
  return (
    <>
        <Swiper navigation={true} className="swiperSection"> 
          
          <SwiperSlide><img src={slides[0].url} alt="" /></SwiperSlide>
          <SwiperSlide><img src={slides[1].url} alt="" /></SwiperSlide>
          <SwiperSlide><img src={slides[2].url} alt="" /></SwiperSlide>
        
        </Swiper>

    </>
  );
};



export { SlidesComponent }; 
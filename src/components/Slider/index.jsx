import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import 'swiper/css/navigation';

const SlidesComponent = ({ Slides }) => {
  return (
    <>
        <Swiper navigation={true} className="swiperSection"> 
          
          <SwiperSlide><img src={Slides[0].url} alt="" /></SwiperSlide>
          <SwiperSlide><img src={Slides[1].url} alt="" /></SwiperSlide>
          <SwiperSlide><img src={Slides[2].url} alt="" /></SwiperSlide>
        
        </Swiper>

    </>
  );
};



export { SlidesComponent }; 
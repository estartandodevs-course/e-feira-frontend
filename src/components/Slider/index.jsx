/* eslint-disable react/prop-types */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SliderBox } from './styles';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';

const SlidesComponent = ({ slides }) => {
  return (
    <>
      <SliderBox>
        <Swiper
          spaceBetween={30}
          loop={true}
          pagination={{
            el: '.swiper-custom-pagination',
            // dynamicBullets: true,
            clickable: true,
          }}
          modules={[Pagination]}
          className="swiperSection"
        >
          <SwiperSlide>
            <img src={slides[0].url} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slides[1].url} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slides[2].url} alt="" />
          </SwiperSlide>
        <div className="swiper-custom-pagination"/>
        </Swiper>
      </SliderBox>
    </>
  );
};

export { SlidesComponent };

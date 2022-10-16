import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SliderBox } from './styles';
import { Pagination } from 'swiper';
import { useState, useEffect } from 'react';
import { ApiServer } from '../../services/Api';
import 'swiper/css';
import 'swiper/css/pagination';

const HighlightsComponent = () => {
  const [showHighlight, setHighlight] = useState([]);

  useEffect(() => {
    ApiServer.get('home/highlights')
      .then(response => {
        setHighlight(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {showHighlight?.length > 0 ? (
        <SliderBox>
          <Swiper
            spaceBetween={15}
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

export { HighlightsComponent };

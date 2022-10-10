import React from 'react';	
import { LastMarketTitle, LastMarketAcess, MarketCard, Card, CardImg, CardTitle, CardSubTitle, Container } from './styles';
import MarketData  from '../../mocks/streetMarket'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";


export const StreetMarket = () => {
  const { dataMarket } = MarketData
  return (
    <Container>
      <LastMarketTitle>Última banca</LastMarketTitle>
      <LastMarketAcess>
       
        {/*  // aqui vai verificar qual é o ultima banca que foi visualizada, vista //  */}
        Vendinha do seu Francisco
      </LastMarketAcess>
      {dataMarket.length > 0 ? (
        <MarketCard>
          <Swiper
          slidesPerView={1.5}
          spaceBetween={10}
          className="mySwiper">
          

        {dataMarket.map((item) => {
          if (item.type === 'market-category') {
            return(
              <SwiperSlide key={item.id}>
                <Card>
                  <CardImg>
                    <img src={item.image} alt={item.alt} />
                    <CardTitle>
                      {item.name}
                    </CardTitle>
                    <CardSubTitle>
                      {item.subtitle}
                     </CardSubTitle>
                  </CardImg>
                </Card>
              </SwiperSlide>
            );
          }
          return null; 
        })}
        </Swiper>
        </MarketCard>
      ) : null} 
      
       
        
      
 
    </Container> 
  );
};
import React from 'react';	
import { LastMarketTitle, LastMarketAcess, MarketCard, Card, CardImg, CardTitle, CardSubTitle, Container } from './styles';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";


export const StreetMarket = () => {

  
  
const [latestMarket, setlatestMarket] = useState([]);

const apiUrl = 'https://private-ea557-efeira1.apiary-mock.com/home/latest-streetMarket';

function pullLastMarket() {
  fetch(apiUrl)
    .then(response => response.json())
    .then(responseData => {
      setlatestMarket(responseData)
      // console.log(responseData)
    })
    .catch(error => {
      console.error(error);
    });
}

useEffect(() => {
  pullLastMarket();
}, []);
  
  return (
    <Container>
      <LastMarketTitle>Última banca</LastMarketTitle>
      <LastMarketAcess>
       
        {/*  // aqui vai verificar qual é o ultima banca que foi visualizada, vista //  */}
        Vendinha do seu Francisco
      </LastMarketAcess>
      {latestMarket?.length > 0 ? (
        <MarketCard>
          <Swiper
          slidesPerView={1.5}
          spaceBetween={10}
          className="mySwiper">
          

            {latestMarket[0].products.map((item, index) => {
              console.log(item)
          // if (item.title === 'Vendinha do seu Francisco') {
            return(
              <SwiperSlide key={index}>
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
          // }
          // return null; 
        })}
        </Swiper>
        </MarketCard>
      ) : null} 
      
       
        
      
 
    </Container> 
  );
};
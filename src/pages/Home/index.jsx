import { ContainerStyle, CategoriesCarousel, CategoriesTitles, CardCarousel, CardTitle } from './styles';
import { useEffect } from 'react';
import { useSplash } from '../../contexts/SplashProvider';
import { SlidesComponent } from '../../components/Slider/';
import { slides } from '../../mocks/slides';
import  data from '../../mocks/productCategories';
import { Swiper, SwiperSlide } from 'swiper/react';

const sleep = (ms = 1000) => new Promise(resolve => setTimeout(resolve, ms));

const Home = () => {
  const { dataCategories } = data;
  const { hideSplash, isShown } = useSplash();


  useEffect(() => {
    (async () => {
      // Simulating some background work
      await sleep(2000);
      // As soon as the backgorund work finishes, hide the splash and display the home screen
      hideSplash();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isShown ? null : (
    <ContainerStyle>
      <div>
        <SlidesComponent slides={slides} />
      </div>

      <CategoriesCarousel>
        <CategoriesTitles>Categorias</CategoriesTitles>

        <>
          {dataCategories.length > 0 ? (
            <CardCarousel>
              <Swiper 
              slidesPerView={5}
               
               className="mySwiper">

                {dataCategories.map(item => {
                  if (item.type === 'categories-icon') {
                    return (
                      <SwiperSlide key={item.id}>
                        <CardTitle>
                          <h3>{item.name}</h3>
                        </CardTitle>

                        <img src={item.image}></img>
                      </SwiperSlide>
                    );
                  }
                  return null;
                })}
              </Swiper>
            </CardCarousel>
          ) : null}
        </>
      </CategoriesCarousel>
    </ContainerStyle>
  );
};

export default Home;

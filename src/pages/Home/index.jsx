import { ContainerStyle } from './styles';
import { useEffect } from 'react';
import { useSplash } from '../../contexts/SplashProvider';
import { Highlights } from '../../components/Highlights';
import { CategoriesCarousel } from '../../components/Carousel';
import { Latest } from '../../components/Latest';
import Navbar from '../../components/Navbar';

const Home = () => {
  const sleep = (ms = 1000) => new Promise(resolve => setTimeout(resolve, ms));

  const { hideSplash, isShown } = useSplash();

  // SlashWindow
  useEffect(() => {
    (async () => {
      await sleep(2000);
      hideSplash();
    })();
  }, []);

  return isShown ? null : (
    <>
      <ContainerStyle>
        <Highlights />
        <CategoriesCarousel />
        <Latest />
        <Navbar />
      </ContainerStyle>
    </>
  );
};

export default Home;

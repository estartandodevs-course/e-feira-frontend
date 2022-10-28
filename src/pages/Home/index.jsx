import { ContainerStyle } from './styles';
import { useEffect } from 'react';
import { useSplash } from '../../contexts/SplashProvider';
import { Highlights } from '../../components/Highlights';
import { CategoriesCarousel } from '../../components/Carousel';
import { Latest } from '../../components/Latest';
import Navbar from '../../components/Navbar';
import { CartState } from '../../contexts/Context';

const Home = () => {
  const sleep = (ms = 1000) => new Promise(resolve => setTimeout(resolve, ms));

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

  const { state } = CartState();

  console.log(state);

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

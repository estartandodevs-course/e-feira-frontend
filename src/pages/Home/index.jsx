import { ContainerStyle } from './styles';
import { useEffect } from 'react';
import { useSplash } from '../../contexts/SplashProvider';
import { HighlightsComponent } from '../../components/Highlights';
import { slides } from '../../mocks/slides';
import { CategoriesCarousel } from '../../components/Carousel';
import { LatestMarket } from '../../components/LatestMarket';
import { LabelBottomNavigation } from '../../components/Navbar/index';

const sleep = (ms = 1000) => new Promise(resolve => setTimeout(resolve, ms));

const Home = () => {
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
        <HighlightsComponent slides={slides} />
      </div>
      <CategoriesCarousel />
      <LatestMarket />
      {/* <LabelBottomNavigation /> */}
    </ContainerStyle>
  );
};

export default Home;

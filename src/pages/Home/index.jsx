import { IntroSlogan, ContainerStyle } from './styles';
import { useEffect } from 'react';
import { useSplash } from '../../contexts/SplashProvider';

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
      <IntroSlogan>A sua feira preferida a um click de você</IntroSlogan>;
    </ContainerStyle>
  );
};

export default Home;

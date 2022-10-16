import { useEffect } from 'react';
import { useSplash } from '../../contexts/SplashProvider';


const sleep = (ms = 1000) => new Promise(resolve => setTimeout(resolve, ms));

const SplashScreen = () => {
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
    <>

    </>
  );
};

export default SplashScreen;

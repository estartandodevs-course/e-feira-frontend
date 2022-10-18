import { ContainerStyle } from './styles';
import { useEffect } from 'react';
import { useSplash } from '../../contexts/SplashProvider';
import { SupplierCard } from '../../components/SupplierCard';
import Navbar from '../../components/Navbar';

const sleep = (ms = 1000) => new Promise(resolve => setTimeout(resolve, ms));

const Supplier = () => {
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
      <ContainerStyle>
        <SupplierCard />
        <Navbar />
      </ContainerStyle>
    </>
  );
};

export default Supplier;

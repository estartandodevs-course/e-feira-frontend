import React from 'react';
import { useEffect } from 'react';
import { useSplash } from '../../contexts/SplashProvider';
import Navbar from '../../components/Navbar';
import { Products } from '../../components/Products';

const sleep = (ms = 1000) => new Promise(resolve => setTimeout(resolve, ms));

const ProductsDetails = () => {
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
      <Products />
      <Navbar />
    </>
  );
};

export default ProductsDetails;

import { useEffect } from 'react';
import { ContainerStyle } from './styles';
import { useSplash } from '../../contexts/SplashProvider';
import { Highlights } from '../../components/Highlights';
import { CategoriesCarousel } from '../../components/Carousel';
import { Latest } from '../../components/Latest';
import Navbar from '../../components/Navbar';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';

const Home = () => {
  const sleep = (ms = 1000) => new Promise(resolve => setTimeout(resolve, ms));

  const { hideSplash, isShown } = useSplash();

  const MySwal = withReactContent(Swal);

  MySwal.fire({
    title: <strong>Good job!</strong>,
    html: <i>You clicked the button!</i>,
    icon: 'success',
  });

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

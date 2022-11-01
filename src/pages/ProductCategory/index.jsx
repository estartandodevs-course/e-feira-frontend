import { CategoriesPage } from '../../components/Categories';
import { ContainerStyle } from './styles';
// import { Helmet } from 'react-helmet';

const ProductCategory = () => {
  return (
    <>
      <ContainerStyle>
        {/* <Helmet>
          <title>Produtos</title>
        </Helmet> */}
        <CategoriesPage />
      </ContainerStyle>
    </>
  );
};

export default ProductCategory;

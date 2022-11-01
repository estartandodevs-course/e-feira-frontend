import { Routes, Route } from 'react-router-dom';
import { SplashProvider } from '../contexts/SplashProvider';
import { FullLayout } from '../pages/Layout/FullLayout';
import { NoHeaderLayout } from '../pages/Layout/NoHeaderLayout.jsx';
import { PageHeaderLayout } from '../pages/Layout/PageHeaderLayout';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import ProductCategory from '../pages/ProductCategory';
import ProductDetails from '../pages/ProductsDetails';
import SupplierPage from '../pages/SupplierPage';
import Search from '../pages/Search';

const Router = () => {
  return (
    <Routes>
      <>
        <Route element={<FullLayout />}>
          <Route
            path="/"
            element={
              <>
                <SplashProvider>
                  <Home />
                </SplashProvider>
              </>
            }
          />
        </Route>
        <Route element={<PageHeaderLayout />}>
          <Route
            // title={title}
            path="/produtos/:id"
            element={
              <>
                <ProductDetails />
              </>
            }
          />
          <Route
            path="/Carrinho"
            element={
              <>
                <Cart />
              </>
            }
            title="Carrinho"
          />
          <Route
            path="/categoria/:id"
            element={
              <>
                <ProductCategory />
              </>
            }
          />
          <Route path="/buscar" element={<Search />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
        <Route element={<NoHeaderLayout />}>
          <Route
            path="/fornecedor/:id"
            element={
              <>
                <SupplierPage />
              </>
            }
          />
        </Route>
      </>
    </Routes>
  );
};

export default Router;

import { Routes, Route } from 'react-router-dom';
import { SplashProvider } from '../contexts/SplashProvider';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import Layout from '../pages/Layout';
import LayoutNoHeader from '../pages/LayoutNoHeader';
import ProductDetails from '../pages/ProductsDetails';
import SupplierPage from '../pages/SupplierPage';

const Router = () => {
  return (
    <Routes>
      <>
        <Route element={<Layout />}>
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
          <Route
            path="/produtos/:id"
            element={
              <>
                <ProductDetails />
              </>
            }
          />
          <Route path="/cart" element={<Cart />} />
        </Route>
        <Route element={<LayoutNoHeader />}>
          <Route path="/fornecedor/:id" element={<SupplierPage />} />
        </Route>
      </>
    </Routes>
  );
};

export default Router;

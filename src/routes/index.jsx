import { Routes, Route } from 'react-router-dom';
import Layout from '../pages/Layout';
import Home from '../pages/Home';
import SupplierPage from '../pages/SupplierPage';
import ProductDetails from '../pages/ProductsDetails';
import { SplashProvider } from '../contexts/SplashProvider';

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path="/"
          element={
            <SplashProvider>
              <Home />
            </SplashProvider>
          }
        />
        <Route path="/fornecedor/:id" element={<SupplierPage />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Route>
    </Routes>
  );
};

export default Router;

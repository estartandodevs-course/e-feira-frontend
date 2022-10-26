import { Routes, Route } from 'react-router';
import Layout from '../pages/Layout';
import Home from '../pages/Home';
import SupplierPage from '../pages/SupplierPage';
import ProductDetails from '../pages/ProductsDetails';
import Cart from '../pages/Cart';
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
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  );
};

export default Router;

import { Routes, Route } from 'react-router-dom';
import Layout from '../pages/Layout';
import Home from '../pages/Home';
import SupplierPage from '../pages/SupplierPage';
import ProductDetails from '../pages/ProductsDetails';
import Cart from '../pages/Cart';
import { SplashProvider } from '../contexts/SplashProvider';
import { Header } from '../components/Header';

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path="/"
          element={
            <>
              <SplashProvider>
                <Header />
                <Home />
              </SplashProvider>
            </>
          }
        />
        <Route path="/fornecedor/:id" element={<SupplierPage />} />
        <Route
          path="/produtos/:id"
          element={
            <>
              <Header />
              <ProductDetails />
            </>
          }
        />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  );
};

export default Router;

import { Header } from '../components/Header';
import { PageHeader } from '../components/PageHeader';
import { Routes, Route } from 'react-router-dom';
import { SplashProvider } from '../contexts/SplashProvider';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import Layout from '../pages/Layout';
import Navbar from '../components/Navbar';
import ProductCategory from '../pages/ProductCategory';
import ProductDetails from '../pages/ProductsDetails';
import SupplierPage from '../pages/SupplierPage';
import { CartComponent } from '../components/CartComponent';
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
                  <Header />
                  <Home />
                  <Navbar />
                </SplashProvider>
              </>
            }
          />
          <Route
            path="/produtos/:id"
            element={
              <>
                <PageHeader title="Item" />
                <ProductDetails />
                <Navbar />
              </>
            }
          />
          <Route
            path="/CartXX"
            element={
              <>
                <PageHeader title="Item" />
                <CartComponent />
                <Navbar />
              </>
            }
          />
          <Route
            path="/fornecedor/:id"
            element={
              <>
                <SupplierPage />
                <Navbar />
              </>
            }
          />
          <Route
            path="/categorias"
            element={
              <>
                <PageHeader title="Categorias" />
                <ProductCategory />
                <Navbar />
              </>
            }
          />

          <Route path="/cart" element={<Cart />} />
        </Route>
      </>
    </Routes>
  );
};

export default Router;

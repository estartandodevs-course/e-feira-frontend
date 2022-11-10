import { Routes, Route } from 'react-router-dom';
import { FullLayout } from '../pages/Layout/FullLayout';
import { NoHeaderLayout } from '../pages/Layout/NoHeaderLayout.jsx';
import { PageHeaderLayout } from '../pages/Layout/PageHeaderLayout';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import ProductCategory from '../pages/ProductCategory';
import ProductDetails from '../pages/ProductsDetails';
import SupplierPage from '../pages/SupplierPage';
import Search from '../pages/Search';
import Orders from '../pages/Orders';

const Router = () => {
  return (
    <Routes>
      <>
        <Route path="/" element={<FullLayout />}>
          <Route
            index
            element={
              <>
                <Home />
              </>
            }
          />
        </Route>

        <Route element={<PageHeaderLayout />}>
          <Route
            path="/produtos/:id"
            element={
              <>
                <ProductDetails />
              </>
            }
          />

          <Route
            path="/pedidos"
            element={
              <>
                <Orders />
              </>
            }
          />

          <Route
            path="/carrinho"
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

import { Routes, Route } from 'react-router';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Supplier from '../pages/Supplier';
import ProductDetails from '../pages/ProductsDetails';

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/fornecedor" element={<Supplier />} />
        <Route path="/products" element={<ProductDetails />} />
      </Route>
    </Routes>
  );
};

export default Router;

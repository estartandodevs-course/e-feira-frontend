import { Routes, Route } from 'react-router';
import Layout from '../components/Layout';
import Home from '../pages/Home';

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default Router;

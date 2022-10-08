import { Routes, Route } from 'react-router';
import Layout from '../components/Layout';
import Home from '../pages/index';

const Router = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  );
};

export default Router;

import { Outlet } from 'react-router-dom';
import { PageWrapper, PageContent } from './styles';
import { Header } from '../Header/';

// eslint-disable-next-line react/prop-types
const Layout = () => {
  return (
    <PageWrapper>
      <Header />
      <PageContent><Outlet/></PageContent>
    </PageWrapper>
  );
};
export default Layout;

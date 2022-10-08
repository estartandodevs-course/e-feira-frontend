import { PageWrapper, PageContent } from './styles';
import { Header } from '../Header/';

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <PageWrapper>
      <Header />
      <PageContent>{children}</PageContent>
    </PageWrapper>
  );
};
export default Layout;

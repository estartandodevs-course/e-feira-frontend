import { Outlet } from 'react-router-dom';
import { PageWrapper, PageContent } from './styles';
import { Header } from '../Header/';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { green } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: green[600],
    },
  },
});

// eslint-disable-next-line react/prop-types
const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <PageWrapper>
        <Header />
        <PageContent>
          <Outlet />
        </PageContent>
      </PageWrapper>
    </ThemeProvider>
  );
};
export default Layout;

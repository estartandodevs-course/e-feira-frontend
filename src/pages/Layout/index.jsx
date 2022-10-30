import React from 'react';
import { Outlet } from 'react-router-dom';
import { PageWrapper, PageContent } from './styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { green } from '@mui/material/colors';
// import Context from '../../contexts/Context';

const theme = createTheme({
  palette: {
    primary: {
      main: green[600],
    },
  },
});

const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <PageWrapper>
        <React.StrictMode>
          <PageContent>
            <Outlet />
          </PageContent>
        </React.StrictMode>
      </PageWrapper>
    </ThemeProvider>
  );
};
export default Layout;

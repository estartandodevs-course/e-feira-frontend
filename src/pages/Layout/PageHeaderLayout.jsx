import React from 'react';
import { Outlet } from 'react-router-dom';
import { PageWrapper, PageContent } from './styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { green } from '@mui/material/colors';
import Navbar from '../../components/Navbar';
import { PageHeader } from '../../components/PageHeader';

const theme = createTheme({
  palette: {
    primary: {
      main: green[600],
    },
  },
});

export const PageHeaderLayout = () => {
  return (
    <ThemeProvider theme={theme}>
      <PageWrapper>
        <React.StrictMode>
          <PageHeader />
          <PageContent>
            <Outlet />
          </PageContent>
          <Navbar />
        </React.StrictMode>
      </PageWrapper>
    </ThemeProvider>
  );
};

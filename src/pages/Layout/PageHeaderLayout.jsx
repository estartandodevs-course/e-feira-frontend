import React from 'react';
import { Outlet } from 'react-router-dom';
import { PageWrapper, PageContent } from './styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { green } from '@mui/material/colors';
import { PageHeader } from '../../components/PageHeader';
import Navbar from '../../components/Navbar';

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
        <PageHeader />
        <PageContent>
          <Outlet />
        </PageContent>
        <Navbar />
      </PageWrapper>
    </ThemeProvider>
  );
};

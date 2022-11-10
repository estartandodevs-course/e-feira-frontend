import React from 'react';
import { Header } from '../../components/Header';
import { Outlet } from 'react-router-dom';
import { PageWrapper, PageContent } from './styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { green } from '@mui/material/colors';
import Navbar from '../../components/Navbar';

const theme = createTheme({
  palette: {
    primary: {
      main: green[600],
    },
  },
});

export const FullLayout = () => {
  return (
    <ThemeProvider theme={theme}>
      <PageWrapper>
        <Header />
        <PageContent>
          <Outlet />
        </PageContent>
        <Navbar />
      </PageWrapper>
    </ThemeProvider>
  );
};

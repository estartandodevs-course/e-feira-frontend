import React from 'react';
import Router from './routes';
import GlobalStyle from './assets/styles/globalStyles';
import ScrollToTop from './components/ScrollToTop';
import CartContext from './contexts/CartContext';
import { BrowserRouter } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material/styles';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <BrowserRouter>
        <CartContext>
          <GlobalStyle />
          <Router />
          <ScrollToTop />
        </CartContext>
      </BrowserRouter>
    </StyledEngineProvider>
  );
}

export default App;

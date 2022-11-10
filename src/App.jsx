import React from 'react';
import Router from './routes';
import GlobalStyle from './assets/styles/globalStyles';
import ScrollToTop from './components/ScrollToTop';
import CartContext from './contexts/CartContext';
import { BrowserRouter } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import { SplashProvider } from './contexts/SplashProvider';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <SplashProvider>
        <BrowserRouter>
          <React.StrictMode>
            <CartContext>
              <GlobalStyle />
              <Router />
              <ScrollToTop />
            </CartContext>
          </React.StrictMode>
        </BrowserRouter>
      </SplashProvider>
    </StyledEngineProvider>
  );
}

export default App;

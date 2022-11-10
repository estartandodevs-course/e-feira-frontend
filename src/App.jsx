import React from 'react';
import Router from './routes';
import GlobalStyle from './assets/styles/globalStyles';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import CartContext from './contexts/CartContext';
import { StyledEngineProvider } from '@mui/material/styles';
import { SplashProvider } from './contexts/SplashProvider';

function App() {
  return (
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <React.StrictMode>
          <CartContext>
            <GlobalStyle />
            <SplashProvider>
              <Router />
            </SplashProvider>
            <ScrollToTop />
          </CartContext>
        </React.StrictMode>
      </StyledEngineProvider>
    </BrowserRouter>
  );
}

export default App;

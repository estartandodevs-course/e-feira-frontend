import React from 'react';
import Router from './routes';
import GlobalStyle from './assets/styles/globalStyles';
import ScrollToTop from './components/ScrollToTop';
import CartContext from './contexts/CartContext';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <CartContext>
        <GlobalStyle />
        <Router />
        <ScrollToTop />
      </CartContext>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import Router from './routes';
import GlobalStyle from './assets/styles/globalStyles';
import ScrollToTop from './components/ScrollToTop';
import { BrowserRouter } from 'react-router-dom';
import { ContentProvider } from './contexts/useContext';
import CartContext from './contexts/CartContext';

function App() {
  return (
    <BrowserRouter>
      <CartContext>
        <ContentProvider>
          <GlobalStyle />
          <Router />
          <ScrollToTop />
        </ContentProvider>
      </CartContext>
    </BrowserRouter>
  );
}

export default App;

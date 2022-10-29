import React from 'react';
import Router from './routes';
import GlobalStyle from './assets/styles/globalStyles';
import ScrollToTop from './components/ScrollToTop';
import { BrowserRouter } from 'react-router-dom';
import { ContentProvider } from './useContext';
import { CartState } from './contexts/Context';

function App() {
  const { state } = CartState();

  console.log(state);
  return (
    <BrowserRouter>
      <ContentProvider>
        <GlobalStyle />
        <Router />
        <ScrollToTop />
      </ContentProvider>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import Router from './routes';
import GlobalStyle from './assets/styles/globalStyles';
import ScrollToTop from './components/ScrollToTop';
import { BrowserRouter } from 'react-router-dom';
import { ContentProvider } from './contexts/useContext';
import Context from './contexts/Context';

function App() {
  return (
    <BrowserRouter>
      <Context>
        <ContentProvider>
          <GlobalStyle />
          <Router />
          <ScrollToTop />
        </ContentProvider>
      </Context>
    </BrowserRouter>
  );
}

export default App;

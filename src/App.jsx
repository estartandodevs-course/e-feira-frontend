import React from 'react';
import Router from './routes';
import GlobalStyle from './assets/styles/globalStyles';
import ScrollToTop from './components/ScrollToTop';
import { ContentProvider } from './useContext';
import { BrowserRouter } from 'react-router-dom';

function App() {
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

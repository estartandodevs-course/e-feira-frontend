import React from 'react';
import Router from './routes';
import GlobalStyle from './assets/styles/globalStyles';
import ScrollToTop from './components/ScrollToTop';
import { ContentProvider } from './useContext';

function App() {
  return (
    <ContentProvider>
      <GlobalStyle />
      <Router />
      <ScrollToTop />
    </ContentProvider>
  );
}

export default App;

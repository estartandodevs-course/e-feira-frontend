import React from 'react';
import Router from './routes';
import GlobalStyle from './assets/styles/globalStyles';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <GlobalStyle />

      <Router />
      <ScrollToTop />
    </>
  );
}

export default App;

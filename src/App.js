import React from 'react';
import Router from './routes';
import GlobalStyle from './assets/styles/globalStyles';
import { SplashProvider } from './contexts/SplashProvider';

function App() {
  return (
    <>
      <GlobalStyle />
      <SplashProvider>
        <Router />
      </SplashProvider>
    </>
  );
}

export default App;

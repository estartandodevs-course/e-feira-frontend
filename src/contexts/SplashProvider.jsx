import Logo from '../assets/images/logo_transparent.png';
const { createContext, useState, useContext } = require('react');

const SplashContext = createContext({
  showSplash: () => {},
  hideSplash: () => {},
  isShown: true,
});

export const SplashProvider = ({ children }) => {
  const [isShown, setIsShown] = useState(true);
  const [isAlreadyShown, setIsAlreadyShown] = useState(false);

  return (
    <SplashContext.Provider
      value={{
        showSplash: () => {
          setIsShown(true);
        },
        hideSplash: () => {
          setIsAlreadyShown(true);
          setIsShown(false);
        },
        isShown,
      }}
    >
      {isShown && !isAlreadyShown ? (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img src={Logo} alt="" />
        </div>
      ) : null}
      {children}
    </SplashContext.Provider>
  );
};

export const useSplash = () => {
  const context = useContext(SplashContext);

  if (!context) {
    throw new Error('Must be in SplashProvider!');
  }

  return context;
};

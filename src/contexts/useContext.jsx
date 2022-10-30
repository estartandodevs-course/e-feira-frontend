import { createContext, useMemo, useState } from 'react';

export const UserContext = createContext({});

export const ContentProvider = ({ children }) => {
  const [userActive, setUserActive] = useState([]);
  const value = useMemo(() => ({ userActive, setUserActive }), [userActive, setUserActive]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

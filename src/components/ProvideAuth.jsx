import useProvideAuth from 'customHooks/useProvideAuth';
import React, { createContext } from 'react';

export const authContext = createContext();
const ProvideAuth = ({ children }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export default ProvideAuth;

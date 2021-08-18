import { authContext } from 'components/ProvideAuth';
import { useContext } from 'react';

const useAuth = () => {
  return useContext(authContext);
};

export default useAuth;

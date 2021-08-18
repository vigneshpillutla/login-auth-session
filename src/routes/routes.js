import {
  LoginPage,
  SignUpPage,
  HomePage,
  PrivateComp1,
  PrivateComp2,
  PrivateComp3,
} from 'components';

const routes = [
  {
    path: '/',
    component: HomePage,
    exact: true,
    private: true,
  },
  {
    path: '/p1',
    component: PrivateComp1,
    private: true,
  },
  {
    path: '/p2',
    component: PrivateComp2,
    private: true,
  },
  {
    path: '/p3',
    component: PrivateComp3,
    private: true,
  },
  {
    path: '/login',
    component: LoginPage,
  },
  {
    path: '/signUp',
    component: SignUpPage,
  },
];

export default routes;

import { lazy } from 'react';
import AppLoader from '../features/suspense/AppLoader';

const Signup = AppLoader(lazy(() => import('../pages/Auth/Register')));
const NotFound = AppLoader(lazy(() => import('../pages/Auth/Login')));

export const publicRoutes = [
  {
    path: '/register',
    element: <Signup />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

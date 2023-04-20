import React, { lazy } from 'react';
import AppLoader from '../features/suspense/AppLoader';

export const Dashboard = AppLoader(
  lazy(() => import('../pages/Dashboard/Index'))
);

export const Login = AppLoader(lazy(() => import('../pages/Auth/Login')));
export const Register = AppLoader(lazy(() => import('../pages/Auth/Register')));

export const FlowChart = AppLoader(
  lazy(() => import('../components/FlowCustom'))
);

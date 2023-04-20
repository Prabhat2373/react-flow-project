import * as Lazyelement from '../../src/routes/LazyLoaded';

import DashboardIcon from '../assets/icons/DashboardIcon';

export const routes = [
  {
    path: '/',
    exact: true,
    id: 'dashboard',
    iconClass: DashboardIcon,
    displayName: 'Dashboard',
    element: <Lazyelement.FlowChart />,
    subMenu: [
      {
        path: '/user',
        exact: true,
        id: 'profile',
        element: <Lazyelement.Register />,
        displayName: 'profile',
        iconClass: DashboardIcon,
        isHidden: false,
      },
      {
        path: '/user/create',
        exact: true,
        id: 'user-create',
        element: <Lazyelement.Dashboard />,
        displayName: 'profile Edit',
        isHidden: false,
      },
    ],
  },
  {
    path: '/files',
    exact: true,
    id: 'files',
    iconClass: DashboardIcon,
    displayName: 'files',
    element: <Lazyelement.Dashboard />,
  },
];

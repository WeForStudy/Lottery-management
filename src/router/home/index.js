import HomePage from 'pages/home'
import DashBoardRoutes from './dashboard'
import UserRoutes from './user'
import AdminRouters from './admin'
export default [
  {
    path: '/home',
    component: HomePage,
    name: 'Home',
    children: [
      ...UserRoutes,
      ...DashBoardRoutes,
      ...AdminRouters
    ],
  },
]

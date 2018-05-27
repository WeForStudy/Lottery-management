import HomePage from 'pages/home'
import DashBoardRoutes from './dashboard'
import UserRoutes from './user'
export default [
  {
    path: '/home',
    component: HomePage,
    name: 'Home',
    children: [
      ...UserRoutes,
      ...DashBoardRoutes,
    ],
  },
]

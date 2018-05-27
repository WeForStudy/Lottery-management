import LoginPage from 'pages/login'
import DashBoardRoutes from './dashboard'
import UserRoutes from './user'
export default [
  {
    path: '/',
    component: LoginPage,
    name: 'Login',
    children: [
      ...UserRoutes,
      ...DashBoardRoutes,
    ],
  },
]

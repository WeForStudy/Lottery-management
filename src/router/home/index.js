import HomePage from 'pages/home'
import DashBoardRoutes from './dashboard'
import UserRoutes from './user'
import BusinessRoutes from './business'

export default [
  { 
    path: '/', 
    component: HomePage,
    name: 'home',
    children: [
      ...UserRoutes,
      ...DashBoardRoutes,
      ...BusinessRoutes,
    ],
  },
]

import { lazy } from "react";
import { Navigate } from 'react-router-dom'

const Home = lazy(() => import('../pages/Home'))
const Test = lazy(() => import('../pages/Test'))

const routes = [
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/test',
    element: <Test />
  },
  {
    path: '/',
    element: <Navigate to='/home'></Navigate>
  }
]

export default routes;
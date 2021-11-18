import { lazy } from 'react'

// ** Document title
const TemplateTitle = '%s - LLA'

// ** Default Route
const DefaultRoute = '/home'

// ** Merge Routes
const Routes = [
  {
    path: '/home',
    component: lazy(() => import('../../views/Home'))
  },
  {
    path: '/second-page',
    component: lazy(() => import('../../views/SecondPage'))
  },
  {
    path: '/add-word',
    component: lazy(() => import('../../views/AddWord'))
  },
  {
    path: '/items',
    className: 'ecommerce-application', // re-using these css styles from the demo
    component: lazy(() => import('../../views/Items'))
  },
  {
    path: '/collections',
    className: 'collections',
    component: lazy(() => import('../../views/Collections'))
  },
  {
    path: '/login',
    component: lazy(() => import('../../views/Login')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/error',
    component: lazy(() => import('../../views/Error')),
    layout: 'BlankLayout'
  }
]

export { DefaultRoute, TemplateTitle, Routes }

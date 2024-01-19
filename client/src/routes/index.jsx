import Home from '@p/Home';
import Details from '@p/Details';
const publicRoutes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/details/:gender',
        component: Details
    },
   
]
const privateRoutes = [
  
]
export {publicRoutes, privateRoutes}
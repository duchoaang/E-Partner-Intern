import Home from '@p/Home';
import Details from '@p/Details';
import Plan from '@p/Plan';
const publicRoutes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/details/:gender',
        component: Details
    },
    {
        path: '/plan',
        component: Plan
    },
   
]
const privateRoutes = [
  
]
export {publicRoutes, privateRoutes}
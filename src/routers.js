import Home from './pages/home.vue';
import Xin from './pages/xin.vue';

const routers = [{
                path: '/',
                component: Home
        },
        {
                path: '/girl',
                name: 'home',
                component: Xin
        }
]
export default routers
import Home from './pages/index/index.vue';
import Xin from './pages/xin/xin.vue';

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
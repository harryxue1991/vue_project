import Home from './pages/home.vue';
import Xin from './pages/xin.vue';

const routers = [
        {
                path: '/xin',
                name: 'home',
                component: Xin
        },
        {
                path: '/',
                component: Home
        }
]
export default routers
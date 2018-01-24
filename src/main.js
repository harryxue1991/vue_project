import './styles/main.scss';
import 'element-ui/lib/theme-chalk/index.css'

// import './utils/global';    //一些方法

import Vue from 'vue';
import Vuex from 'vuex';
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import routers from './routers'
import store from './store/store'

import App from './app';

import {post,get,patch,put} from './utils/http';

Vue.prototype.$post=post;
Vue.prototype.$get=get;
Vue.prototype.$patch=patch;
Vue.prototype.$put=put;


Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(Vuex)

const router = new VueRouter({
        mode: 'history',
        routes: routers
})

new Vue({
        el: '#app',
        router,
        store,
        render: h => h(App)
});

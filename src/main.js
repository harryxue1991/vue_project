import './style/main.scss';
import 'element-ui/lib/theme-chalk/index.css'

import Vue from 'vue';
import Vuex from 'vuex';
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import routers from './routers'
import store from './store'

import App from './app';

import axios from 'axios';
import {post,get,patch,put} from './http';

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

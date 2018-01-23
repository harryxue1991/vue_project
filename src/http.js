import axios from 'axios';
import { Message } from 'element-ui';

// 全局的 axios 默认值
axios.defaults.timeout = 5000;  //请求话费了超过 `timeout` 的时间，请求将被中断
axios.defaults.baseURL = 'http://127.0.0.1:8899/';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

//http request 拦截器
axios.interceptors.request.use(
        config => {
                // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
                config.data = JSON.stringify(config.data);
                config.headers = {
                        'Content-Type': 'application/x-www-form-urlencoded'
                }
                // if(token){
                //   config.params = {'token':token}
                // }
                return config;
        },
        error => {
                return Promise.reject(err);
        }
);

//http response 拦截器
axios.interceptors.response.use(
        response => {
                if (response.data.errCode == 2) {
                        router.push({
                                path: "/login",
                                querry: {
                                        redirect: router.currentRoute.fullPath
                                } //从哪个页面跳转
                        })
                }
                return response;
        },
        error => {
                return Promise.reject(error)
        }
)

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function get(url, params = {}) {
        return new Promise((resolve, reject) => {
                axios.get(url, {
                                params: params
                        })
                        .then(response => {
                                resolve(response.data);
                        })
                        .catch(err => {
                                reject(err)
                        })
        })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data = {}) {
        return new Promise((resolve, reject) => {
                axios.post(url, data)
                        .then(response => {
                                resolve(response.data);
                        }, err => {
                                reject(err)
                        })
        })
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch(url, data = {}) {
        return new Promise((resolve, reject) => {
                axios.patch(url, data)
                        .then(response => {
                                resolve(response.data);
                        }, err => {
                                reject(err)
                        })
        })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url, data = {}) {
        return new Promise((resolve, reject) => {
                axios.put(url, data)
                        .then(response => {
                                resolve(response.data);
                        }, err => {
                                reject(err)
                        })
        })
}
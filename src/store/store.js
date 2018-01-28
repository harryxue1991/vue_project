import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'
import actions from './actions'

import members from './modules/members'
import products from './modules/products'

Vue.use(Vuex)

const store = new Vuex.Store({
        actions,
        modules: {
                members,
                products
        },
        state: {
                name: '薛辛超',
                age: '18',
                sex: '男',
                likes: [
                        {"id":"1","fruits":"apple","girl":"辛"},
                        {"id":"2","fruits":"banner","girl":"丝"}
                ]
        },
        mutations: {
                [types.ADD_LIKE](state, msg) {
                        state.likes.push(msg)
                },
                [types.ADD_AGE](state) {
                        state.age++;
                },
                [types.REDUCE_AGE](state,num) {
                        state.age--;
                        state.age -= num;
                }
        },
        getters: {
                doneTodos: state => {  //过滤器, 过滤likes中gitl为'丝'的项目
                        return state.likes.filter(todo => todo.girl == '丝')
                },
                getTodoById: state => (id) => {
                        return state.likes.find(todo => todo.id == id)
                }
        }
})

export default store
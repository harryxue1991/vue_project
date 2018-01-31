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
                all:{}
        },
        mutations: {
                [types.INIT](state,msg) {
                        state.all = msg
                },
                [types.ADD_LIKE](state, msg) {
                        state.all.likes.push(msg)
                },
                [types.ADD_AGE](state) {
                        state.all.age++;
                },
                [types.REDUCE_AGE](state,num) {
                        state.all.age--;
                        state.all.age -= num;
                }
        },
        getters: {
                doneTodos: state => {  //过滤器, 过滤likes中gitl为'丝'的项目
                        if( state.all.likes != null) 
                                return state.all.likes.filter(todo => todo.fruits == 'apple')
                        else 
                                return []
                },
                getTodoById: state => (id) => {
                        return state.all.likes.find(todo => todo.id == id)
                }
        }
})

export default store
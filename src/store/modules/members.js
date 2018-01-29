import * as types from '../mutation-types'

// initial state
const state = {
        name:"我是会员内容名称",
        member: [
                {'name':'薛辛超','age':'18'},
                {'name':'张金怡','age':'28'},
                {'name':'徐学健','age':'27'},
                {'name':'朱佳良','age':'27'},
        ]
}

// mutations
const mutations = {

}

// getters
const getters = {
        allProducts: state => state.member,
}

// actions
const actions = {
        getAllProducts({commit}) {
                
        }
}

export default {
        namespaced: true,
        state,
        getters,
        actions,
        mutations
}
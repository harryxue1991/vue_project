import * as types from '../mutation-types'

// initial state
const state = {
  all: []
}

// mutations
const mutations = {

}

// getters
const getters = {
  allProducts: state => state.all
}

// actions
const actions = {
  getAllProducts ({ commit }) {
    
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
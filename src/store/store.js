import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
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
                addLikes(state, msg) {
                        state.likes.push(msg)
                },
                addAge(state) {
                        state.age++;
                }
        },
        getters: {
                doneTodos: state => {  //过滤器, 过滤likes中gitl为'丝'的项目
                        return state.likes.filter(todo => todo.girl == '丝')
                },
                getTodoById: (state) => (id) => {
                        return state.likes.find(todo => todo.id == id)
                },
                // addTodo: state => {
                //         return state.likes.push({'id':'100',"fruits":"哇哈哈","girl":"两仪"})
                // }
        },
        actions: {
                increment ({ commit }) {
                        commit('addAge')
                },
                incrementAsync ({ commit },msg) {
                        // 延时1秒  
                        setTimeout(() => {
                                commit('addLikes',msg)
                        }, 1000)
                }
        }        
})

export default store
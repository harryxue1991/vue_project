import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
        state: {
                name: '薛辛超',
                age: '18',
                sex: '男',
                likes: [
                        {"fruits":"apple","girl":"辛"},
                        {"fruits":"banner","girl":"丝"}
                ]
        },
        mutations: {
                newLikes(state, msg) {
                        state.links = msg
                }
        },
        getters: {
                doneTodos: state => {  //过滤器, 过滤likes中gitl为'丝'的项目
                        return state.todos.filter(todo => todo.girl == '丝')
                }
        }
})

export default store
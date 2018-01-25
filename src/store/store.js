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
                },
                reduceAge(state,num) {
                        state.age--;
                        state.age += num;
                }
        },
        getters: {
                doneTodos: state => {  //过滤器, 过滤likes中gitl为'丝'的项目
                        return state.likes.filter(todo => todo.girl == '丝')
                },
                getTodoById: (state) => (id) => {
                        return state.likes.find(todo => todo.id == id)
                }
        },
        actions: {
                increment ({ commit }) {
                        setTimeout(() => {
                                commit('addAge')
                        },0)
                },
                incrementAsync ({ commit },msg) {
                        return new Promise((resolve, reject) => {
                                setTimeout(() => {
                                        commit('addLikes',msg)
                                        resolve('添加成功')
                                }, 1000)
                        })
                },
                
                async actionA ({ commit },num) {
                        commit('reduceAge', await timeout(num));
                },
                async actionB ({ dispatch, commit },num) {
                        await dispatch('actionA',num) // 等待 actionA 完成
                        commit('addAge');
                        return '完成'
                }
                      
        }        
})

const timeout = function (num) {
        return new Promise((resolve) => {
                setTimeout(function () {
                        resolve(num);
                }, 1000);
        });
}

export default store
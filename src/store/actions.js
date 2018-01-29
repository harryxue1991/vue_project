const timeout = function (num) {
        return new Promise((resolve) => {
                setTimeout(function () {
                        resolve(num);
                }, 1000);
        });
}
const all = {
        name: '薛辛超',
        age:'18',
        sex: '男',
        likes: [
                {"id":"1","fruits":"apple","girl":"辛"},
                {"id":"2","fruits":"banner","girl":"丝"}
        ]
}

const actions = {
        getAll({commit}) {
                setTimeout(() => {
                        commit('INIT',all);
                },1000)
        },
        increment ({ commit }) {
                setTimeout(() => {
                        commit('ADD_AGE')
                },1000)
        },
        incrementAsync ({ commit },msg) {
                return new Promise((resolve, reject) => {
                        setTimeout(() => {
                                commit('ADD_LIKE',msg)
                                resolve('添加成功')
                        }, 1000)
                })
        },
        async actionA ({ commit },num) {
                commit('REDUCE_AGE', await timeout(num));
        },
        async actionB ({ dispatch, commit },num) {
                await dispatch('actionA',num) // 等待 actionA 完成
                commit('ADD_AGE');
                return '完成'
        }
}
export default actions;
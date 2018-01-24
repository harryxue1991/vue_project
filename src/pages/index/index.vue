<template>
        <div  id="Home">
                <Header></Header>
                <div class="main">
                        <div>
                                <span>跳转链接:</span>
                                <router-link  to="girl" class="link">跳转到girl</router-link>
                        </div>
                        <div class="content">vuex 测试</div>
                        <div class="modular">
                                <div class="input0">
                                        <el-input v-model="fruits" placeholder="输入水果"></el-input>
                                        <el-input v-model="girl" placeholder="输入girl"></el-input>
                                </div>
                                <div>
                                        <div v-for="(item,index) in mylike" :key="index">
                                                <div>
                                                        <span>我是</span>
                                                        <span>{{myName}}</span>
                                                        <span>年龄</span>
                                                        <span>{{myAge}}</span>
                                                        <span>id:</span>
                                                        <span v-text="item.id" class="likesId"></span>
                                                        <span v-text="item.fruits"></span>
                                                        <span v-text="item.girl"></span>
                                                </div>
                                        </div>
                                </div>
                                <el-button type="primary" @click="addMsg">store添加数据</el-button>
                        </div>
                        <div class="modular">
                                <div class="input0">
                                        <el-input v-model="num" placeholder="输入上面的id"></el-input>
                                </div>
                                <el-button type="primary" @click="getStore">getter查询数据</el-button><span>测试store里gitter方法查询</span>
                                <div v-if="getFruits != null">
                                        <span v-text="getFruits.fruits"></span>
                                        <span v-text="getFruits.girl"></span>
                                </div>
                        </div>
                        <div class="modular">
                                <el-button type="primary" @click="addAge">异步action 增加年龄</el-button>
                                <el-button type="primary" @click="getMsgAction">异步action 增加数据</el-button>
                        </div>
                        <div class="modular">
                                <el-button type="primary" @click="getMsg">获取服务器数据</el-button>
                                <div>
                                        <div v-text="name"></div>
                                        <div v-text="age"></div>
                                </div>
                        </div>
                </div>
                <Footer :theme="theme"></Footer>
        </div>
</template>
<script>
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
export default {
        data(){
                return{
                        // 传给子元素footer
                        theme:"个人空间首页",

                        name:'',
                        age:'',
                        // ------------处理store
                        fruits:'',
                        girl:'',
                        num:'',
                        getFruits: {}
                }
        },
        components: {
                Header,
                Footer
        },
        computed: {  //将store映射到组件
                mylike() {                             //mylike 可以直接在html 中使用, 可以定义为数组或字符串
                        return this.$store.state.likes
                },
                myName() {
                        return this.$store.state.name
                },
                myAge() {
                        return this.$store.state.age
                }
        },
        mounted(){

        },
        methods:{
                // 使用axios请求数据
                getMsg() {
                        this.$get('xin')
                        .then((response) => {
                                this.name = response.name;
                                this.age = response.age;
                        })
                },
                // 在store中添加属性
                addMsg: function() {
                        if(this.girl == '' || this.fruits == '') {
                                this.$message.error('请输入内容')
                        }else{
                                this.$store.commit('addLikes', {id: this.mylike.length+1,'fruits':this.fruits,'girl':this.girl})
                                this.fruits = '';
                                this.girl = '';
                        }
                },
                // 在store中使用gitter功能查询
                getStore() {
                        this.getFruits = this.$store.getters.getTodoById(this.num);
                },
                addAge() {
                        this.$store.dispatch('increment')
                },
                // 异步操作修改store
                getMsgAction() {
                        if(this.girl == '' || this.fruits == '') {
                                this.$message.error('请输入内容')
                        }else{
                                this.$store.dispatch('incrementAsync', {id: this.mylike.length+1,'fruits':this.fruits,'girl':this.girl})
                                this.fruits = '';
                                this.girl = '';
                        }
                }

        },
}
</script>
<style lang="scss" scoped>
@import "../../styles/common.scss";
@import "./style.scss";
</style>
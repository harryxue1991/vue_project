<template>
        <div  id="Home">
                <Header></Header>
                <div class="main">
                        <div>
                                <router-link  to="girl" class="link">跳转到girl</router-link>
                        </div>
                        <div class="content">home的 内容</div>
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
                                                        <span v-text="item.fruits"></span>
                                                        <span v-text="item.girl"></span>
                                                </div>
                                        </div>
                                </div>
                                <el-button type="primary" @click="addMsg">store添加数据</el-button>
                        </div>
                        <div class="modular">
                                <div class="input0">
                                        <el-input v-model="num" placeholder="getter查询数据"></el-input>
                                </div>
                                <el-button type="primary" @click="getStore">getter查询数据</el-button><span>store里的数据id</span>
                                <div v-if="getFruits != null" v-text="getFruits.fruits"></div>
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
                        theme:"个人空间首页",

                        radio:"1",
                        name:'',
                        age:'',
                        // ------------------
                        fruits:'',
                        girl:'',
                        num:'1',
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
                }
        },
        mounted(){

        },
        methods:{
                getMsg() {
                        this.$get('xin')
                        .then((response) => {
                                this.name = response.name;
                                this.age = response.age;
                        })
                },
                addMsg: function() {
                        if(this.girl == '' || this.fruits == '') {
                                this.$message.error('请输入内容')
                        }else{
                                this.changeState({'fruits':this.fruits,'girl':this.girl});
                        }
                },
                changeState(arr) {
                        this.$store.commit('newLikes', this.mylike.push(arr))
                },
                getStore() {
                        this.getFruits = this.$store.getters.getTodoById(this.num);
                }
        },
}
</script>
<style lang="scss" scoped>
@import "../../styles/common.scss";
@import "./style.scss";
</style>
<template>
        <div  id="Home">
                <Header :activeIndex="activeIndex"></Header>
                <div class="main">
                        <div>
                                <span>跳转链接:</span>
                                <router-link  to="girl" class="link">跳转到girl</router-link>
                        </div>
                        <div class="content">vuex 测试</div>
                        <div class="modular">
                                <div>
                                        <span>试用过滤器</span>
                                        <span>{{price | currency}}</span>
                                </div>
                        </div>
                        <div class="modular">
                                <div class="title">store 列表</div>
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
                        </div>
                        <div class="modular">
                                <div class="input0">
                                        <el-input v-model="fruits" placeholder="输入水果"></el-input>
                                        <el-input v-model="girl" placeholder="输入girl"></el-input>
                                </div>
                                <el-button type="primary" @click="addMsg">store添加数据</el-button>
                                <el-button type="primary" @click="getMsgAction">异步action 增加数据</el-button>
                        </div>
                        <div class="modular">
                                <div class="input0">
                                        <el-input v-model="num" placeholder="输入上面的id"></el-input>
                                </div>
                                <el-button type="primary" @click="getStore">getter查询数据</el-button><span>测试store里gitter方法查询</span>
                                <el-button type="primary" @click="getStoreGril">getter过滤girl</el-button>
                                <div v-if="getFruits != null">
                                        <span v-text="getFruits.fruits"></span>
                                        <span v-text="getFruits.girl"></span>
                                </div>
                                <div v-if="getGirl != null">
                                        <span v-text="getGirl.fruits"></span>
                                        <span v-text="getGirl.girl"></span>
                                </div>
                        </div>
                        <div class="modular">
                                <el-button type="primary" @click="$store.commit('ADD_AGE')">增加年龄</el-button>
                                <el-button type="primary" @click="increment">异步action 增加年龄</el-button>
                                <el-button type="primary" @click="reduceAge">异步action 减少年龄</el-button>
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
import { mapState,mapMutations,mapGetters,mapActions } from 'vuex'
export default {
        data(){
                return{
                        activeIndex:'/',
                        theme:"个人空间首页",
                        price: '1221221',
                        name:'',
                        age:'',
                        // ------------处理store
                        fruits:'',
                        girl:'',
                        num:'',
                        getFruits: {},
                        getGirl: {}
                }
        },
        components: {
                Header,
                Footer
        },
        computed: {
                ...mapGetters(['doneTodos','getTodoById']),
                ...mapState({  //将store映射到组件
                        mylike: state => state.all.likes,
                        myName: state => state.all.name,
                        myAge:state => state.all.age,
                })
        },
        mounted(){

        },
        methods:{
                ...mapMutations(['ADD_LIKE']), 
                ...mapActions(['increment','incrementAsync','actionA','actionB']),
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
                                this.ADD_LIKE({id: this.mylike.length+1,'fruits':this.fruits,'girl':this.girl});
                                this.fruits = '';
                                this.girl = '';
                        }
                },

                // 在store中使用gitter功能查询
                getStoreGril() {
                        this.getGirl = this.doneTodos[0];  //this.doneTodos 返回的是数组
                },
                getStore() {
                        this.getFruits = this.getTodoById(this.num);

                },
                reduceAge() {
                        this.actionB(1).then((res) => {
                                console.log(res)
                        })
                },
                getMsgAction() {
                        if(this.girl == '' || this.fruits == '') {
                                this.$message.error('请输入内容')
                        }else{
                                this.incrementAsync({id: this.mylike.length+1,'fruits':this.fruits,'girl':this.girl}).then((res) => {
                                        console.log(res)
                                })
                                this.fruits = '';
                                this.girl = '';
                        }
                }
        }
}
</script>
<style lang="scss" scoped>
@import "../../styles/common.scss";
@import "./style.scss";
</style>
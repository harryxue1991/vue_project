<template>
        <div  id="Xin">
                <Header></Header>
                <div class="main">
                        <div class="content">薛辛超的内容</div>
                        <router-link  to="/">返回</router-link>

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
                </div>
                <Footer></Footer>
        </div>
</template>
<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
export default {
        data(){
                return{

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

        },
}
</script>
<style lang="scss" scoped>
#Xin {
        height: 100%;
        .main {
                min-height: calc(100% - 162px);
        }
        .content {
                color: pink;
                font-size: 22px;
        }
}
</style>
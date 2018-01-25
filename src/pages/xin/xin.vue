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
                <Footer :theme="theme"></Footer>
        </div>
</template>
<script>
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
export default {
        data(){
                return{
                        theme:"辛超的秘密",
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
@import "../../styles/common.scss";
@import "./style.scss";
</style>
<template>
        <div  id="Xin">
                <Header></Header>
                <div class="main">
                        <div class="content">薛辛超的内容</div>
                        <router-link  to="/">哈哈</router-link>
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
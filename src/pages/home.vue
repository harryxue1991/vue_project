<template>
        <div  id="Home">
                <Header></Header>
                <div class="main">
                        <div class="content">home的 内容</div>
                        <router-link  to="xin">预览</router-link>
                        <el-radio v-model="radio" label="1">选项1</el-radio>
                        <el-radio v-model="radio" label="2">选项2</el-radio>
                        <el-button type="primary" @click="getMsg">按钮</el-button>
                        <div>
                                <div v-text="name"></div>
                                <div v-text="age"></div>
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
                        radio:'1',
                        name:'',
                        age:''
                }
        },
        components: {
                Header,
                Footer
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
                }
        },
}
</script>
<style lang="scss" scoped>
@import "../style/common.scss";
#Home {
        height: 100%;
        .main {
                min-height: calc(100% - 162px);
        }
        .content {
                color: $blue;
                font-size: 22px;
                width: px2rem(1000);
        }
}
</style>
<template>
        <div  id="Footer">
                <div class="main">
                        <div class="head">
                                <span>Copyright</span>
                                <span class="year">©</span>
                                <span>{{myName}}</span>
                                <span>-</span>
                                <span>All rights reserved</span>
                                <span class="iconfont icon-love"></span>
                        </div>
                        <div class="foot">
                                <span class="theme">由 vue 搭建的页面</span>
                                <span>主题 - {{theme}}</span>
                        </div>
                </div>
        </div>
</template>
<script>

export default {
        props: ['theme'],
        data(){
                return{

                }
        },
        computed: {  //将store映射到组件
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
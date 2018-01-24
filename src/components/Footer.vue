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
@import "../style/common.scss";
#Footer {
        height: $H-footer;
        background-color: #f5f5f5;
        color: $C-content;
        box-sizing: border-box;
        .main {
                width: 1200px;
                margin: 0 auto;
                text-align: center;
                .head {
                        padding-top: 20px;
                }
                .year {
                        margin-right: 10px;
                }
                .foot {
                        margin-top: 15px;
                        .theme {
                                margin-right: 15px;
                        }
                }
        }
}
</style>
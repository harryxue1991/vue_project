<template>
        <div  id="Header">
                <el-menu
                        :default-active="activeIndex"
                        class="el-menu-demo"
                        mode="horizontal"
                        @select="handleSelect"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b">
                        
                        <el-menu-item index="1">首页</el-menu-item>
                        <el-submenu index="2">
                                <template slot="title">我的工作台</template>
                                <el-menu-item index="2-1">
                                        <a href="http://www.baidu.com" target="_blank">百度</a>
                                </el-menu-item>
                                <el-menu-item index="2-2">
                                        <a href="http://www.zhaikexueyuan.com" target="_blank">宅客学院</a>
                                </el-menu-item>
                        </el-submenu>
                </el-menu>
        </div>
</template>
<script>

export default {
        data(){
                return{
                        activeIndex: '1'
                }
        },
        mounted(){

        },
        methods:{
                handleSelect(key, keyPath) {
                        // console.log(key, keyPath);
                }
        },
}
</script>
<style lang="scss" scoped>
@import "../../styles/common.scss";
@import "./style.scss";
</style>
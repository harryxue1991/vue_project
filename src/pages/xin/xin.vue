<template>
        <div  id="Xin">
                <Header :activeIndex="activeIndex"></Header>
                <div class="main">
                        <div class="content">{{myName}}的内容</div>
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
                        <div class="main_content">
                                <div>
                                        <span>{{memberName}}</span>
                                </div>
                                <div v-for="(item,index) in myMember" :key='index'>
                                        <div v-text="item.name"></div>
                                        <div v-text="item.age"></div>
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
                        activeIndex:'/girl',
                        theme:"辛超的秘密",
                        // ---------------------
                        myMember: []
                }
        },
        components: {
                Header,
                Footer
        },
        computed: {
                ...mapGetters('members',['allProducts']),
                ...mapState({
                        mylike: state => state.all.likes,
                        myName: state => state.all.name,
                        myAge:state => state.all.age,
                }),
                ...mapState('members',{
                        memberName: state => state.name,
                }),
        },
        mounted(){
                this.getMember();
        },
        methods:{
                getMember() {
                        // this.myMember = this.$store.getters['members/allProducts'];
                        this.myMember = this.allProducts;
                }
        },
}
</script>
<style lang="scss" scoped>
@import "../../styles/common.scss";
@import "./style.scss";
</style>
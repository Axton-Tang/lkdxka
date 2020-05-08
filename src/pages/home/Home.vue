<template>
    <div class="wrapper">
        <img class="wrapper-back" src="https://lkdxka.oss-cn-shenzhen.aliyuncs.com/home/%E8%83%8C%E6%99%AF.jpg">
        <home-header></home-header>
        <home-icons></home-icons>
        <home-introduce :introShow="introShow"></home-introduce>
        <home-recommend @clickMini="handleClickMini"
                        @clickOther="handleClickOther"
        ></home-recommend>
        <home-official></home-official>s
        <home-cooperation></home-cooperation>
        <home-footer @clickDeveloper="handleDeveloper"></home-footer>
        <home-pop :miniShow="miniShow"
                  @popClose="handleClickMini"
                  :otherShow="otherShow"
                  @otherClose="handleClickOther"
                  :developerShow="developerShow"
                  @developerClose="handleDeveloper"
        ></home-pop>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeIcons from './components/Icons'
import HomeIntroduce from './components/Introduce'
import HomeRecommend from './components/recommend'
import HomeOfficial from './components/Official'
import HomeCooperation from './components/Cooperation'
import HomeFooter from './components/Footer'
import HomePop from './components/Pop'

export default {
    name: 'Home',
    components: {
        HomeHeader,
        HomeIcons,
        HomeIntroduce,
        HomeRecommend,
        HomeOfficial,
        HomeCooperation,
        HomeFooter,
        HomePop
    },
    data () {
        return {
            introShow :0,
            miniShow : false,
            otherShow :false,
            developerShow :false
        }
    },
    methods : {
        handleClickMini (){
            this.miniShow=!this.miniShow;
        },
        handleClickOther (){
            this.otherShow=!this.otherShow;
        },
        handleDeveloper (){
            this.developerShow = !this.developerShow;
        },
        handleScroll (){
            this.miniShow=false;
            this.otherShow=false;
            this.developerShow=false
            this.introShow++;
        }
    },
    mounted () {
        window.addEventListener('scroll', this.handleScroll)
    },
    destroyed() {
        window.removeEventListener('scroll',this.handleScroll)
    }
}
</script>

<style lang="stylus" scoped>

    .wrapper-back
        position fixed
        width 100%
        height 100%
        top 0
        bottom 0
        right 0
        left 0

</style>

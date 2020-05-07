<template>
    <div class="wrapper">
        <img class="wrapper-back" src="https://lkdxka.oss-cn-shenzhen.aliyuncs.com/home/%E8%83%8C%E6%99%AF.jpg">
        <home-header></home-header>
        <home-icons></home-icons>
        <home-introduce></home-introduce>
        <home-recommend @clickMini="handleClickMini"></home-recommend>
        <home-official></home-official>
        <home-cooperation></home-cooperation>
        <home-footer></home-footer>

        <transition name="fade"
                    enter-active-class="animated fadeIn"
                    leave-active-class="animated fadeOut"

        >
            <div class="pop-wrapper"
                 v-show='show'
                 @click="closeMini"
            >
                <div class="pop-back"></div>
                <div class="pop-mini-program">
                    <div class="content-wrap">
                        <span class="iconfont iconfont-cancel">&#xe69b;</span>
                        <div class="content-title">小程序版</div>
                        <p class="content">
                            请在微信小程序中搜索“林大课表”即可使用
                        </p>
                        <p class="extry">
                            注：小程序仅为测试版本，请以教务网课表为主准！
                        </p>
                    </div>
                </div>
            </div>
        </transition>
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

export default {
    name: 'Home',
    components: {
        HomeHeader,
        HomeIcons,
        HomeIntroduce,
        HomeRecommend,
        HomeOfficial,
        HomeCooperation,
        HomeFooter
    },
    data () {
        return {
            show : false
        }
    },
    methods : {
        handleClickMini (){
            this.show=true
        },
        closeMini (){
            this.show=false
        }
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
    .pop-wrapper
        position fixed
        top 0
        right 0
        bottom 0
        left 0
        .pop-back
            position absolute
            height 100%
            width 100%
            background #000000
            opacity .2
            z-index 100
        .pop-mini-program
            position relative
            width 85%
            height 4rem
            background #fff
            margin 0 auto
            top 40%
            border-radius .26rem
            z-index 999
            .content-wrap
                position relative
                top .3rem
                .iconfont-cancel
                    position absolute
                    right .3rem
                .content-title
                    font-size .42rem
                    text-align center
                .content
                    float left
                    font-size .32rem
                    letter-spacing .1rem
                    line-height .5rem
                    padding .5rem 1.5rem
                .extry
                    color #cacaca
                    font-size .24rem
                    text-align center

</style>

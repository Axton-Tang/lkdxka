<template>
    <div class="wrapper">
        <div class="wrapper-back"></div>
        <home-header  @asideClick="handleAsideClick"></home-header>

        <home-introduce :introShow="introShow"
                        class="introduce"
        ></home-introduce>
        <home-icons></home-icons>
        <home-recommend></home-recommend>
        <home-official></home-official>
        <home-cooperation></home-cooperation>
        <home-footer class="footer" @clickDeveloper="handleDeveloper"></home-footer>

        <transition name="fade"
                    enter-active-class="animated fadeIn"
                    leave-active-class="animated fadeOut"

        >
            <div class="go-top"
                 v-if="backFlag"
                 @click="backTop"

            >
                <div class="iconfont">&#xe6fa;</div>
            </div>
        </transition>

        <home-aside :asideShow="asideShow"
                    @closeAside="handleAsideClick"
        ></home-aside>

        <home-pop
                  :developerShow="developerShow"
                  @developerClose="handleDeveloper"
        ></home-pop>
        <Department></Department>
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
import HomeAside from './components/Aside'
import Department from '../introduce/Department'

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
        HomePop,
        HomeAside,
        Department
    },
    data () {
        return {
            introShow :0,
            developerShow :false,
            backFlag : false,
            asideShow : false
        }
    },
    methods : {

        handleDeveloper (){
            this.developerShow = !this.developerShow;
        },
        handleScroll (){
            this.miniShow=false;
            this.otherShow=false;
            this.developerShow=false;
            this.asideShow=false;
            this.introShow++;
        },
        handleAsideClick(){
            this.asideShow=!this.asideShow;
        },

        backTop () {
            let timer = setInterval(function () {
                var top = document.body.scrollTop || document.documentElement.scrollTop;
                var speed = top / 4;
                if (document.body.scrollTop!=0) {
                    document.body.scrollTop -= speed;
                }else {
                    document.documentElement.scrollTop -= speed;
                }
                if (top === 0) {
                    clearInterval(timer);
                }
            },30);
        },
        // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
        scrollToTop () {
            const that = this
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            that.scrollTop = scrollTop;
            //判断滚动超出一定距离后在让返回顶部按钮出现
            if (that.scrollTop > 100) {
              that.backFlag = true
            }else {
              that.backFlag = false
            }
        }
 },
    mounted () {
        let that = this;
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('scroll', this.scrollToTop);
    },
    destroyed() {
        let that = this;
        window.removeEventListener('scroll',this.handleScroll);
        window.removeEventListener('scroll',this.scrollToTop);
    }
}
</script>

<style lang="stylus" scoped>
    @import "~styles/varibles.styl"
    .wrapper
        overflow hidden
        .wrapper-back
            position fixed
            width 100%
            height 100%
            top 0
            bottom 0
            right 0
            left 0
            background fff
        .introduce
            overflow visible
        .go-top
            position fixed
            right .3rem
            bottom .8rem
            width .8rem
            height .8rem
            background white
            border-radius .06rem
            box-shadow 0 0 .05rem  $themeColor
            .iconfont
                color $themeColor
                font-size .8rem
</style>

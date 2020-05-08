<template>
    <div class="wrapper">
        <div class="part-mini">
            <transition name="fade"
                        enter-active-class="animated fadeIn"
                        leave-active-class="animated fadeOut"

            >
                <div class="pop-wrapper"
                     v-show='miniShow'
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
                                注：小程序仅为测试版本，请以教务网课表为准！
                            </p>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
        <div class="part-course-other">
            <transition name="fade"
                        enter-active-class="animated fadeIn"
                        leave-active-class="animated fadeOut"

            >
                <div class="pop-wrapper"
                     v-show='otherShow'
                     @click="closeOther"
                >
                    <div class="pop-back"></div>
                    <div class="pop-mini-program">
                        <div class="content-wrap">
                            <span class="iconfont iconfont-cancel">&#xe69b;</span>
                            <div class="content-title">温馨提示</div>
                            <p class="content">
                                暂无IOS版，如需使用课表可以采用“日历导入”
                            </p>
                            <a href="https://ics.ldkb.xyz/#/">
                                <div class="commit-wrapper">
                                    <div class="commit">好 的</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
        <div class="part-developer">
            <transition name="fade"
                        enter-active-class="animated fadeIn"
                        leave-active-class="animated fadeOut"

            >
                <div class="pop-wrapper"
                     v-show='developerShow'
                     @click="closeDeveloper"
                >
                    <div class="pop-back"></div>
                    <div class="pop-mini-program">
                        <div class="content-wrap">
                            <span class="iconfont iconfont-cancel">&#xe69b;</span>
                            <div class="content-title">开发者</div>
                            <p class="content" style="text-align: center">
                                <br> Axton Tang <br><br>
                                QQ： 873948360</p>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HomePop',
        props : {
            miniShow : Boolean,
            otherShow : Boolean,
            developerShow :Boolean
        },
        methods : {
            closeMini (){
                this.$emit('popClose');
            },
            closeOther (){
                this.$emit('otherClose');
            },
            closeDeveloper (){
                this.$emit('developerClose');
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .pop-wrapper
        position fixed
        top 0
        right 0
        bottom 0
        left 0
        z-index 99
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
                top .4rem
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
                    padding .35rem 1.2rem
                .extry
                    color #cacaca
                    font-size .24rem
                    text-align center
                .commit-wrapper
                    float left
                    width 70%
                    height .7rem
                    background #31a693
                    opacity .8
                    border-radius .1rem
                    text-align center
                    margin 0 1.05rem
                    .commit
                        color #ffffff
                        font-size .34rem
                        height .7rem
                        line-height .7rem

</style>

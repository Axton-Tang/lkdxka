<template>
    <div class="wrapper">
        <div class="header">
            <div class="sign"></div>
            <div class="header-content">综合推荐</div>
            <span class="iconfont header-icon">&#xe641;</span>
        </div>
        <div class="part-one">
            <div class="img-wrapper">
                <a href="http://www.ldkb.xyz">
                    <img class="img-content" src="https://lkdxka.oss-cn-shenzhen.aliyuncs.com/home/fe-%E6%9E%97%E5%A4%A7%E8%AF%BE%E8%A1%A8.jpg">
                </a>
            </div>
            <div class="download-wrapper">
                <div class="android">
                    <a href="https://apk.ldkb.xyz">
                        <div class="android-content">
                            <span class="iconfont android-icon">&#xe665;</span>
                            安卓版
                        </div>
                    </a>
                </div>
                <div class="mini-program"
                     @click="handleMiniClick"
                >
                    <div class="mini-program-content">
                        <span class="iconfont">&#xe61f;</span>
                        小程序
                    </div>
                </div>
                <div class="other">其他</div>
            </div>
        </div>
        <div class="part-two">
            <div class="img-wrapper">
                <a href="https://pan.baidu.com/s/1pzaHGmB9-QWNh2IOjmdzSw">
                    <img class="img-content" src="https://lkdxka.oss-cn-shenzhen.aliyuncs.com/home/%E5%B0%8F%E5%8F%AF%E7%88%B1%E8%A1%A8%E6%83%85%E5%8C%85.jpg">
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HomeRecommend',
        methods : {
            handleMiniClick () {
                this.$emit('clickMini');
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .wrapper
        position relative
        float left
        padding-top .25rem
        width 100%
        overflow hidden
        .header
            margin-left .25rem
            padding-bottom .55rem
            .sign
                float left
                width .15rem
                height .36rem
                background #48aca0
            .header-content
                float left
                margin-left .3rem
                font-size .36rem
            .header-icon
                float left
                margin-left .3rem
                color #48aca0
        .part-one
            position relative
            .img-wrapper
                clear both
                width 100%
                height 0
                padding-bottom 56.667%
                overflow hidden
                margin 0 auto
                text-align center
                .img-content
                    width 95%
                    border-radius .26rem
                    margin-top .1rem
                    box-shadow 0 0 .07rem  #333333
            .download-wrapper
                position absolute
                width 95%
                bottom .55rem
                color white
                left .8rem
                .android
                    float left
                    .android-content
                        width 1.5rem
                        height .5rem
                        line-height .45rem
                        color #2c67af
                        background #ffffff
                        box-shadow 0 0 .07rem  #333333
                        text-align center
                        border-radius .06rem
                .mini-program
                    float left
                    margin-left .3rem
                    .mini-program-content
                        width 1.5rem
                        height .5rem
                        line-height .45rem
                        color #44B64A
                        background #ffffff
                        box-shadow 0 0 .07rem  #333333
                        text-align center
                        border-radius .06rem
                .other
                    float left
                    margin-left .25rem
                    height .5rem
                    line-height .5rem
                    font-size .2rem
        .part-two
            .img-wrapper
                clear both
                width 100%
                height 0
                padding-bottom 56.667%
                overflow hidden
                margin 0 auto
                text-align center
                .img-content
                    width 95%
                    border-radius .26rem
                    margin-top .1rem
                    box-shadow 0 0 .07rem  #333333

</style>

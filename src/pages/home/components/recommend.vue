<template>
    <div class="wrapper">
        <div class="header">
            <div class="sign"></div>
            <div class="header-content">综合推荐</div>
            <span class="iconfont header-icon">&#xe641;</span>
        </div>
        <div class="part-one">
            <div class="img-wrapper">
                <router-link to="/LkdCourse">
                    <img class="img-content" src="https://lkdxka.oss-cn-shenzhen.aliyuncs.com/zip/%E6%9E%97%E5%A4%A7%E8%AF%BE%E8%A1%A8%EF%BC%88%E5%8E%8B%E7%BC%A9%E5%90%8E%EF%BC%89.jpg">
                </router-link>
            </div>
        </div>
        <div class="part-two">
            <div class="img-wrapper">
                <a href="https://pan.baidu.com/s/1pzaHGmB9-QWNh2IOjmdzSw">
                    <img class="img-content" src="https://lkdxka.oss-cn-shenzhen.aliyuncs.com/zip/%E5%B0%8F%E5%8F%AF%E7%88%B1%E8%A1%A8%E6%83%85%E5%8C%85%EF%BC%88%E5%8E%8B%E7%BC%A9%E5%90%8E%EF%BC%89.jpg">
                </a>
            </div>
        </div>
        <div class="edge"></div>
    </div>
</template>

<script>
    export default {
        name: 'HomeRecommend'
    }
</script>

<style lang="stylus" scoped>
    @import "~styles/varibles.styl"
    .wrapper
        position relative
        float left
        width 100%
        overflow hidden
        .header
            padding .25rem 0 .55rem .28rem

            .sign
                float left
                width .15rem
                height .36rem
                background $themeColor
            .header-content
                float left
                margin-left .3rem
                font-size .36rem
            .header-icon
                float left
                margin-left .3rem
                color $themeColor
        .part-one
            position relative
            top .1rem
            .img-wrapper
                clear both
                width 100%
                height 0
                padding-bottom 56.667%
                overflow hidden
                margin 0 auto
                text-align center
                .img-content
                    width 93%
                    border-radius .26rem
                    margin-top .1rem
                    box-shadow 0 0 .07rem #8b8b8b
        .part-two
            .img-wrapper
                clear both
                width 100%
                height 0
                padding-bottom 56.667%
                overflow hidden
                margin .1rem auto
                text-align center
                .img-content
                    width 93%
                    border-radius .26rem
                    margin-top .1rem
                    box-shadow 0 0 .07rem  #8b8b8b
        .edge
            width 100%
            height .15rem
            margin .05rem 0
            background $grayBack
</style>

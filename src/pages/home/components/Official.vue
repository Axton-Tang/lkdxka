<template>
    <div class="wrapper">
        <div class="header">
            <div class="sign"></div>
            <div class="header-content">官方号</div>
            <span class="iconfont header-icon">&#xe656;</span>
        </div>
        <div class="inner-wrap">
            <div class="img-wrapper">
                <img class="img-content01" src="https://lkdxka.oss-cn-shenzhen.aliyuncs.com/home/%E5%AE%98%E6%96%B9%E5%8F%B7-%E5%85%AC%E4%BC%97%E5%8F%B7.jpg">
            </div>
            <div class="img-wrapper">
                <img class="img-content02" src="https://lkdxka.oss-cn-shenzhen.aliyuncs.com/home/%E5%AE%98%E6%96%B9%E5%8F%B7-%E5%AE%98Q.jpg">
            </div>
        </div>
        <div class="edge"></div>
    </div>
</template>

<script>
    export default {
        name: 'HomeOfficial'
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
                font-size .35rem
                color $themeColor
        .inner-wrap
            position relative
            overflow hidden
            width 100%
            top .1rem
            margin-bottom .1rem
            .img-wrapper
                width 50%
                height 0
                padding-bottom 65%
                float left
                .img-content01
                    width 91%
                    margin-top .1rem
                    margin-left .25rem
                    border-radius .26rem
                    box-shadow 0 0 .07rem $themeColor

                .img-content02
                    width 91%
                    float right
                    margin-top .1rem
                    margin-right .25rem
                    border-radius .26rem
                    box-shadow 0 0 .07rem  $themeColor
        .edge
            width 100%
            height .15rem
            margin .05rem 0
            background #f1f1f3
</style>

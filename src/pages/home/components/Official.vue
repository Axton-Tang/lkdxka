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
    </div>
</template>

<script>
    export default {
        name: 'HomeOfficial'
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
            margin-left .28rem
            padding-bottom .5rem
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
                font-size .35rem
                color #48aca0
        .inner-wrap
            position relative
            overflow hidden
            width 100%
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
                    box-shadow 0 0 .07rem #999999

                .img-content02
                    width 91%
                    float right
                    margin-top .1rem
                    margin-right .25rem
                    border-radius .26rem
                    box-shadow 0 0 .07rem  #999999
</style>

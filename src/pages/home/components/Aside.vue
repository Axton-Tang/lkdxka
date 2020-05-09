<template>
    <div class="wrapper">
        <div class="back-wrapper"></div>
        <div class="content-wrapper">
            <div class="info info01">首页</div>
            <div class="info">文章精选</div>
            <a href="http://www.expoon.com/26877/panorama">
                <div class="info">全景校园</div>
            </a>
            <div class="info">智能客服</div>
            <div class="info">我要吐槽</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HomeAside'
    }
</script>

<style lang="stylus" scoped>
    .wrapper
        position fixed
        top 0
        right 0
        bottom 0
        left 0
        z-index 101
        overflow hidden
        .back-wrapper
            overflow hidden
            width 100%
            height 100%
            background #000000
            opacity .2
        .content-wrapper
            position fixed
            right 0
            top 1.15rem
            bottom 0
            width 55%
            background #ffffff
            .info
                height 1.2rem
                line-height 1.2rem
                font-size .32rem
                padding-left .6rem
            .info01
                background #4CBCB0
                opacity .4
                color #fff
</style>

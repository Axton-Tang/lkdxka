<template>
    <div class="wrapper">
        <div class="img-wrapper">
            <img class="logo" src="https://lkdxka.oss-cn-shenzhen.aliyuncs.com/home/%E5%B0%8F%E4%BD%93%E7%A7%AF.png">
        </div>
        <router-link to="/">
            <div class="title">林科大小可爱</div>
        </router-link>
        <div class="icon-more">
            <span class="iconfont">&#xe631;</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HomeHeader'
    }
</script>

<style lang="stylus" scoped>
    .wrapper
        position fixed
        top 0
        left 0
        right 0
        width 100%
        height 0
        box-shadow 0 0 .2rem 0 #666
        padding-bottom 1.15rem
        background #4CBCB0
        z-index 99
        .img-wrapper
            position absolute
            top .05rem
            height 1.05rem
            width 1.05rem
            line-height .92rem
            .logo
                width 100%
        .title
            position absolute
            left 1.2rem
            height 1.23rem
            line-height 1.23rem
            font-size .35rem
            color #fff
        .icon-more
            position absolute
            right .3rem
            top .35rem
            .iconfont
                font-size .45rem
                color #fff
</style>

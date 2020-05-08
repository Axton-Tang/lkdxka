<template>
    <div class="wrapper">
        <div class="icon-wrapper">
            <div class="iconfont">&#xe601;</div>
        </div>
        <div class="title">林科大小可爱</div>
    </div>
</template>

<script>
    export default {
        name: 'FixHeader',
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
        .icon-wrapper
            position absolute
            top .4rem
            left .3rem
            width .6rem
            height .6rem
            color #ffffff
            .iconfont
                font-size .37rem
        .title
            position relative
            height 1.23rem
            line-height 1.23rem
            font-size .35rem
            color #fff
            text-align center
</style>

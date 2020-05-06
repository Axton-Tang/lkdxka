<template>
    <div class="wrapper">
        <div class="content-wrapper">
            <div class="mail-wrapper">
                <span class="iconfont">&#xe625;</span>
                邮箱：lkdxka@163.com
                <hr>
            </div>
        </div>
        <div class="detail-wrapper"></div>
    </div>
</template>

<script>
    export default {
        name: 'HomeFooter'
    }
</script>

<style lang="stylus" scoped>
    .wrapper
        position relative
        float left
        top .5rem
        width 100%
        height 0
        padding-bottom 45%
        background #333
        opacity .9
        .mail-wrapper
            position absolute
            top .5rem
            left .5rem
            color #ffffff
            font-size .32rem
</style>

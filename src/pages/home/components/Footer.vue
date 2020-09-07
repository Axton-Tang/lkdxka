<template>
    <div class="wrapper">
        <div class="banquan">© 2018-2020 lkdxka.com 版权所有</div>
        <div>觅漾工作室旗下品牌 开发者：<a href="https://www.axton-tang.top/" target="_blank">Axton Tang</a></div>
    </div>
</template>

<script>
    export default {
        name: 'HomeFooter'
    }
</script>

<style lang="stylus" scoped>
    @import "~styles/varibles.styl"
    .wrapper
        display: flex;
        flex-direction: column;
        align-items: center;
        width 100%
        margin-top .5rem
        padding .4rem 0
        background #f8fafc
        color #93999f
        box-shadow 0 2px 12px 0 rgba(0, 0, 0, 0.2)
        .banquan 
            text-align center
            padding 0 .8rem
        div
            line-height .6rem
            a
                display inline-block
                position relative
                z-index 1
                color $themeColor
</style>

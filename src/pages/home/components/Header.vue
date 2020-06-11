<template>
    <div class="wrapper">
        <div class="img-wrapper">
            <img class="logo" src="https://lkdxka.oss-cn-shenzhen.aliyuncs.com/home/%E5%B0%8F%E4%BD%93%E7%A7%AF.png">
        </div>
        <router-link to="/">
            <div class="title">林科大小可爱</div>
        </router-link>
        <div class="icon-more" @click="handleAsideClick">
            <span class="iconfont">&#xe631;</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HomeHeader',
        methods :{
            handleAsideClick(){
                this.$emit('asideClick');
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~styles/varibles.styl"
    .wrapper
        position fixed
        top 0
        left 0
        right 0
        width 100%
        height 0
        box-shadow 0 0 .1rem 0 #bfc1c2
        padding-bottom 1rem
        background #fff
        z-index 999
        .img-wrapper
            position absolute
            top .05rem
            left .15rem
            height .9rem
            width .9rem
            line-height .92rem
            .logo
                width 100%
        .title
            position absolute
            left 1.2rem
            height 1.1rem
            line-height 1.1rem
            font-size .33rem
            color #686868
        .icon-more
            position absolute
            right .35rem
            top .35rem
            .iconfont
                font-size .38rem
                color $themeColor
</style>

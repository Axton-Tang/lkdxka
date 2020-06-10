<template>
    <div class="wrapper" @click="handleBack">
        <div class="icon-wrapper">
            <div class="iconfont">&#xe601;</div>
        </div>
        <div class="title">林科大小可爱</div>
    </div>
</template>

<script>
    export default {
        name: 'FixHeader',
        methods :{
            handleBack (){
                this.$router.go(-1);
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
        z-index 99
        .icon-wrapper
            position absolute
            top .32rem
            left .3rem
            width .6rem
            height .6rem
            color $themeColor
            .iconfont
                font-size .37rem
        .title
            position relative
            height 1rem
            line-height 1rem
            font-size .35rem
            color #686868
            text-align center
</style>

<template>
    <div class="wrapper">
        <img class="wrapper-back" src="https://lkdxka.oss-cn-shenzhen.aliyuncs.com/home/%E8%83%8C%E6%99%AF.jpg">
        <home-header></home-header>
        <home-icons></home-icons>
        <div class="content"></div>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeIcons from './components/Icons'

export default {
    name: 'Home',
    components: {
        HomeHeader,
        HomeIcons
    }
}
</script>

<style lang="stylus" scoped>
    .wrapper
        overflow hidden
        .wrapper-back
            position fixed
            width 100%
            height 100%
            top 0
            bottom 0
            right 0
            left 0
        .content
            padding-bottom 20rem
</style>

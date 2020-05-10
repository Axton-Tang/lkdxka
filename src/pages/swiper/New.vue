<template>
    <div class="wrapper">
        <router-link to="/">
            <fix-header class="header"></fix-header>
        </router-link>
        <div class="info">
            该区域暂未开放，敬请期待！
        </div>
    </div>
</template>

<script>
    import FixHeader from '../FixHeader'
    export default {
        name: 'SwiperNew',
        components :{
            FixHeader
        }
    }
</script>

<style lang="stylus" scoped>
    .wrapper
        position absolute
        top 7rem
        width 100%
        height 2rem
        .header
            position fixed
            top 0
            height 0
        .info
            position relative
            font-size .36rem
            text-align center
</style>

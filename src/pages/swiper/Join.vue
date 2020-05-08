<template>
    <div class="wrapper">
        <router-link to="/">
            <fix-header></fix-header>
        </router-link>
        <iframe
            id="iframeContain"
            name="iframeContain"
            seamless
            scrolling="yes"
            src="http://lkdxkanet.mikecrm.com/OsW9BKr"
        >
            您当前的浏览器不支持页面上的功能，请升级您当前的浏览器版本或使用谷歌浏览器访问当前页面
        </iframe>

    </div>
</template>

<script>
    import FixHeader from '../FixHeader'
    export default {
        name: 'SwiperJoin',
        components :{
            FixHeader
        }

    }
</script>

<style lang="stylus" scoped>
    #iframeContain{
        position absolute
        top 1.15rem
        width: 100%;
        height: 800px;
    }
</style>

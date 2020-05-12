<template>
    <div>
        <div class="back"></div>
        <div class="wrapper">
            <router-link to="/">
                <fix-header class="header"></fix-header>
            </router-link>
            <div class="first-wrapper">
                <img class="first-content" src="https://lkdxka.oss-cn-shenzhen.aliyuncs.com/home/%E5%90%88%E4%BD%9C%E5%AE%A3%E4%BC%A0.jpg">
                <div class="content-wrapper">
                    <div class="content">
                        <img class="inner" src="https://lkdxka.oss-cn-shenzhen.aliyuncs.com/home/%E5%90%88%E4%BD%9C%E5%AE%A3%E4%BC%A0%E5%86%85%E5%9B%BE.jpg">
                    </div>
                    <div class="code-wrapper">
                        <img class="code" src="https://lkdxka.oss-cn-shenzhen.aliyuncs.com/home/%E5%95%86%E5%8A%A1%E5%90%88%E4%BD%9C%E4%BA%8C%E7%BB%B4%E7%A0%81.jpg">
                        <h2 class="info">微信扫码，联系外联负责人</h2>
                    </div>
                    <fix-footer class="footer"></fix-footer>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FixHeader from '../FixHeader'
    import FixFooter from '../FixFooter'
    export default {
        name: 'Propo',
        components :{
            FixHeader,
            FixFooter
        }
    }
</script>

<style lang="stylus" scoped>
    .back
        position fixed
        top 0
        right 0
        bottom 0
        left 0
        background #e1e6ff
        opacity .4
    .wrapper
        position relative
        float left
        .header
            position fixed
            top 0
            height 0
        .first-wrapper
            position relative
            margin-top 1.15rem
            width 100%
            height 0
            padding-bottom 60.88%
            .first-content
                width 100%
            .content-wrapper
                position absolute
                top 3.4rem
                width 100%
                height 0
                padding-bottom 95%
                .content
                    position relative
                    width 88%
                    background #fff
                    margin 0 auto
                    border-radius .1rem
                    box-shadow 0 0 .07rem  #ccc
                    .inner
                        width 100%
                        border-radius .1rem

                .footer
                    position relative
                    float left
                    padding-bottom 48%
                .code-wrapper
                    position relative
                    width 50%
                    height 0
                    padding-bottom 25%
                    margin .9rem auto 1.3rem auto
                    text-align center
                    .code
                        width 60%
                    .info
                        position relative
                        margin .4rem 0
                        font-size .32rem
                        color #6c6d6e
</style>

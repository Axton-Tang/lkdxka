<template>
    <div>
        <div class="back"></div>
        <div class="wrapper">
            <router-link to="/">
                <fix-header class="header"></fix-header>
            </router-link>
            <div class="first-wrapper">
                <img class="first-content" src="https://lkdxka.oss-cn-shenzhen.aliyuncs.com/home/%E5%95%86%E5%8A%A1%E5%90%88%E4%BD%9C.jpg">
                <div class="content-wrapper">
                    <div class="content">
                        <div class="title-wrapper">
                            <div class="title">外联负责人</div>
                            <div class="line-wrapper">
                                <div class="line"></div>
                            </div>
                        </div>
                        <div class="inner-wrapper">
                            <div class="inner-img-wrapper">
                                <img class="inner-img" src="https://lkdxka.oss-cn-shenzhen.aliyuncs.com/home/%E5%95%86%E5%8A%A1%E5%90%88%E4%BD%9C%E4%BA%8C%E7%BB%B4%E7%A0%81.jpg">
                                <div class="wechat">微信号： Cxx11_</div>
                            </div>
                        </div>
                    </div>
                    <div class="info">
                        添加好友，进行合作洽谈！
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
        name: 'Business',
        components :{
            FixHeader,
            FixFooter
        }
    }
</script>

<style lang="stylus" scoped>
    .back
        position absolute
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
                top 3.8rem
                width 100%
                height 0
                padding-bottom 95%
                .content
                    position relative
                    width 90%
                    height 0
                    padding-bottom 90%
                    background #fff
                    margin 0 auto
                    border-radius .06rem
                    box-shadow 0 0 .07rem  #ccc
                    .title-wrapper
                        position absolute
                        float left
                        width 100%
                        height 0
                        padding-bottom 20%
                        top .5rem
                        .title
                            position relative
                            text-align center
                            font-size .4rem
                        .line-wrapper
                            position relative
                            width 100%
                            top .4rem
                            .line
                                margin 0 auto
                                width 20%
                                height .15rem
                                border-radius 2rem
                                background #4cbcb0
                    .inner-wrapper
                        position absolute
                        float left
                        width 100%
                        height 0
                        padding-bottom 50%
                        top 2rem
                        .inner-img-wrapper
                            position relative
                            width 50%
                            margin 0 auto
                            .inner-img
                                position relative
                                width 100%
                        .wechat
                            position relative
                            top .5rem
                            font-size .32rem
                            text-align center
                            color #a2a2a2
                .info
                    position relative
                    top .5rem
                    margin-bottom .5rem
                    text-align center
                    font-size .32rem
                    color #a2a2a2
                .footer
                    position relative
                    float left
                    padding-bottom 48%

</style>

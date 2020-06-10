<template>
    <div>
        <div class="back"></div>
        <div class="wrapper">
            <router-link to="/">
                <fix-header class="header"></fix-header>
            </router-link>
            <div class="first-wrapper">
                <img class="first-content" src="https://lkdxka.oss-cn-shenzhen.aliyuncs.com/home/%E6%88%91%E8%A6%81%E6%8A%95%E7%A8%BF%E5%86%85%E5%AE%B9.jpg">
                <div class="content-wrapper">
                    <div class="content">
                        <div class="inner">
                            <h1 class="h1-info">征稿要求</h1>
                            <h2 class="h2-info">
                                <div class="circle"></div>
                                内容要求
                            </h2>
                            <p class="p-info">要求投稿主题必须与林科大的所见所闻所思所感有关。</p>
                            <h2 class="h2-info">
                                <div class="circle"></div>
                                字数
                            </h2>
                            <p class="p-info">800-1500（优秀稿件可忽视）</p>
                            <h2 class="h2-info">
                                <div class="circle"></div>
                                稿酬
                            </h2>
                            <p class="p-info">1、基础稿费30元，推送24小时后就结算。根据稿件质量上涨10-100元。
                                <br> <br> 2、文章发布24小时内，根据阅读量和好看点击，阅读量大于1000，奖励20元，大于2000，奖励50元。大于4000，奖励100元。（不累计奖励）</p>
                            <h2 class="h2-info">
                                <div class="circle"></div>
                                投稿邮箱
                            </h2>
                            <p class="p-info">lkdxka@163.com （此邮箱仅限于审稿）<br>
                                文末请附上笔名，微信，个人简介。<br>
                                过稿三天内回复，没回复为退稿，作者可自行处理。</p>
                            <h2 class="h2-info">
                                <div class="circle"></div>
                                特别注意
                            </h2>
                            <p class="p-info">1、只接受原创首发稿件，抄袭，洗文不接受。一稿多投，多个平台发表过经发现不予过稿。推文版权归《林科大小可爱》公众号所有，发表30天后，在公众号允许下原作者可将稿件投稿至其它平台。<br>
                                <br>  2、关注公众号，征稿要求或稿费等后期可能会调整。在菜单栏看最新征稿消息，征稿要求都以公众号最新发布的约稿函为准。</p>
                        </div>
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
        name: 'Contribution',
        components :{
            FixHeader,
            FixFooter
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~styles/varibles.styl"
    .back
        position fixed
        top 0
        right 0
        bottom 0
        left 0
        background #f1f1f3
        opacity .4
    .wrapper
        position relative
        .header
            position fixed
            top 0
            height 0
        .first-wrapper
            position relative
            margin-top 1rem
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
                        padding .5rem .5rem
                        .h1-info
                            font-size .4rem
                        .h2-info
                            margin 1rem 0 .5rem 0
                            font-size .35rem
                            color $themeColor
                            .circle
                                float left
                                width .2rem
                                height .2rem
                                margin-top .06rem
                                margin-right .2rem
                                background $themeColor
                                border-radius 1rem
                        .p-info
                            font-size .28rem
                            line-height .5rem
                            color #8c8c8c

                .footer
                    position relative
                    float left
                    padding-bottom 48%

</style>

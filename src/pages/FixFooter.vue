<template>
    <div class="wrapper">
        <div class="content-wrapper">
            <div class="mail-wrapper">
                <span class="iconfont">&#xe625;</span>
                邮箱：lkdxka@163.com
            </div>
            <div class="row-line"></div>
            <div class="detail-wrapper">
                <div class="detail">
                    <p>Copyright © 2018 - 2020 LKDXKA All Rights Reserved.</p>
                    <p>湖南庠序文化传媒有限公司 &nbsp;&nbsp;觅漾工作室&nbsp;&nbsp;&nbsp;&nbsp;旗下品牌</p>
                    <p class="pop-detail">开发者 ： 觅漾工作室技术部  &nbsp;
                        Axton Tang
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HomeFooter',
    }
</script>

<style lang="stylus" scoped>
    .wrapper
        position relative
        float left
        top .5rem
        bottom 0
        width 100%
        height 0
        padding-bottom 54%
        background #2E2F33
        color #6C6D6E
        .content-wrapper
            position relative
            .mail-wrapper
                position absolute
                top .5rem
                left .5rem
                font-size .32rem
            .row-line
                position absolute
                float left
                top 1.25rem
                width 90%
                height 0
                padding-bottom .02rem
                margin 0 .45rem
                background #6C6D6E
                opacity .8
            .detail-wrapper
                position absolute
                float left
                width 100%
                margin-top 1.5rem
                .detail
                    position flex
                    text-align center
                    font-size .26rem
                    height .6rem
                    line-height .6rem
</style>

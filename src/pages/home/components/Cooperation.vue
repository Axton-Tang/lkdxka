<template>
    <div class="wrapper">
        <div class="header">
            <div class="sign"></div>
            <div class="header-content">建立合作</div>
            <span class="iconfont header-icon">&#xe68e;</span>
        </div>
        <div class="inner-wrap">
            <router-link to="/contribution">
                <div class="img-wrapper">
                    <img class="img-content01" src="https://lkdxka.oss-cn-shenzhen.aliyuncs.com/home/%E6%8A%95%E7%A8%BF%E5%B0%81%E9%9D%A2.jpg">
                </div>
            </router-link>
            <div class="img-wrapper">
                <img class="img-content02" src="https://lkdxka.oss-cn-shenzhen.aliyuncs.com/home/%E5%95%86%E5%8A%A1%E5%90%88%E4%BD%9C%E5%92%8C%E5%85%AC%E7%9B%8A%E5%AE%A3%E4%BC%A0.jpg">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HomeCooperation'
    }
</script>

<style lang="stylus" scoped>
    .wrapper
        position relative
        float left
        width 100%
        overflow hidden
        .header
            margin-left .28rem
            padding-bottom .5rem
            .sign
                float left
                width .15rem
                height .36rem
                background #48aca0
            .header-content
                float left
                margin-left .3rem
                font-size .36rem
            .header-icon
                float left
                margin-left .3rem
                font-size .4rem
                color #48aca0
        .inner-wrap
            position relative
            overflow hidden
            width 100%
            .img-wrapper
                width 50%
                height 0
                padding-bottom 33%
                float left
                .img-content01
                    width 91%
                    margin-top .1rem
                    margin-left .25rem
                    border-radius .26rem
                    box-shadow 0 0 .07rem #999999

                .img-content02
                    width 91%
                    float right
                    margin-top .1rem
                    margin-right .25rem
                    border-radius .26rem
                    box-shadow 0 0 .07rem  #999999
</style>

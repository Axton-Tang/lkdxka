<template>
    <div class="out-wrapper">
        <fix-header class="header"></fix-header>
        <div class="inner-wraper">
            <div class="head-img-wraper">
                <img class="head-img" src="https://lkdxka.oss-cn-shenzhen.aliyuncs.com/home/%E5%9B%A2%E9%98%9F%E7%AE%80%E4%BB%8B%E9%A6%96%E5%9B%BE.jpg">
            </div>
            <div class="introduce-wrapper">
                <div class="introduce-title-wrapper">
                    <div class="title-square"></div>
                    <div class="title">团队介绍</div>
                </div>
                <div class="introduce">林科大小可爱团队成立于2018年7月，由一群热爱传媒事业的学长学姐们组建而成，
                    是一家服务于林科大的独立的创新创业校园媒体。团队旨在丰富同学们的校园文化生活，
                    提供便利的校园生活服务。同时，是大学生提升自我、展现才能、开阔眼界的舞台。
                    经过近两年来的努力和发展，团队已经具备一定规模和实力。从最初的4人团队发展至
                    三大部门20余人的卓越团队。今后，我们将为大家提供更多更优质的服务。</div>
            </div>
            <div class="introduce-wrapper">
                <div class="introduce-title-wrapper">
                    <div class="title-square"></div>
                    <div class="title">发展历程</div>
                </div>
                <div class="introduce">河南略知网络科技有限公司成立于2017年7月，立足中原，辐射全国，是一家专注于知识付费与内容变现的技术服务商，旗下拥有略知SaaS云平台、海豚知道、教培班长等多款产品，与河南博物院、大象融媒集团、车轮等6万余家企业机构建立了合作伙伴关系，累计服务全国超2000万用户，获得硅谷知名创投机构PNP战略投资。
                    2018年2月，略知SaaS云平台正式上线，让客户零门槛拥有专属知识店铺，为自媒体、知识付费、教育培训等行业提供内容变现一体化解决方案，帮助内容创业者及企业机构打造独立品牌，建立自己的私域流量池。</div>
            </div>
            <div class="introduce-wrapper">
                <div class="introduce-title-wrapper">
                    <div class="title-square"></div>
                    <div class="title">核心数据</div>
                </div>
                <div class="introduce">河南略知网络科技有限公司成立于2017年7月，立足中原，辐射全国，是一家专注于知识付费与内容变现的技术服务商，旗下拥有略知SaaS云平台、海豚知道、教培班长等多款产品，与河南博物院、大象融媒集团、车轮等6万余家企业机构建立了合作伙伴关系，累计服务全国超2000万用户，获得硅谷知名创投机构PNP战略投资。
                    2018年2月，略知SaaS云平台正式上线，让客户零门槛拥有专属知识店铺，为自媒体、知识付费、教育培训等行业提供内容变现一体化解决方案，帮助内容创业者及企业机构打造独立品牌，建立自己的私域流量池。</div>
            </div>
            <div class="introduce-wrapper">
                <div class="introduce-title-wrapper">
                    <div class="title-square"></div>
                    <div class="title">团队文化</div>
                </div>
                <div class="introduce">河南略知网络科技有限公司成立于2017年7月，立足中原，辐射全国，是一家专注于知识付费与内容变现的技术服务商，旗下拥有略知SaaS云平台、海豚知道、教培班长等多款产品，与河南博物院、大象融媒集团、车轮等6万余家企业机构建立了合作伙伴关系，累计服务全国超2000万用户，获得硅谷知名创投机构PNP战略投资。
                    2018年2月，略知SaaS云平台正式上线，让客户零门槛拥有专属知识店铺，为自媒体、知识付费、教育培训等行业提供内容变现一体化解决方案，帮助内容创业者及企业机构打造独立品牌，建立自己的私域流量池。</div>
            </div>
            <div class="introduce-wrapper">
                <div class="introduce-title-wrapper">
                    <div class="title-square"></div>
                    <div class="title">团队优势</div>
                </div>
                <div class="introduce">河南略知网络科技有限公司成立于2017年7月，立足中原，辐射全国，是一家专注于知识付费与内容变现的技术服务商，旗下拥有略知SaaS云平台、海豚知道、教培班长等多款产品，与河南博物院、大象融媒集团、车轮等6万余家企业机构建立了合作伙伴关系，累计服务全国超2000万用户，获得硅谷知名创投机构PNP战略投资。
                    2018年2月，略知SaaS云平台正式上线，让客户零门槛拥有专属知识店铺，为自媒体、知识付费、教育培训等行业提供内容变现一体化解决方案，帮助内容创业者及企业机构打造独立品牌，建立自己的私域流量池。</div>
            </div>
        </div>
        <fix-footer class="footer"></fix-footer>
    </div>
</template>

<script>
    import FixHeader from '../FixHeader'
    import FixFooter from '../FixFooter'
    export default {
        name: 'IntroduceStory',
        components : {
            FixHeader,
            FixFooter
        }
    }
</script>

<style lang="stylus" scoped>
    .out-wrapper
        width 100%
        height 100%
        .header
            position fixed
            top 0
            height 0
        .inner-wraper
            position relative
            float left
            top 1.15rem
            width 100%
            .head-img-wraper
                width 100%
                height 0
                padding-bottom 60.66%
                .head-img
                    width 100%
            .introduce-wrapper
                position relative
                top .5rem
                width 100%
                text-align center
                .introduce-title-wrapper
                    .title-square
                        float left
                        width .4rem
                        height .4rem
                        background #4cbcb0
                    .title
                        float left
                        margin-left .4rem
                        font-size .38rem
                        font-weight 600
                .introduce
                    position relative
                    float left
                    margin .5rem .8rem
                    text-align left
                    word-wrap break-word
                    font-size .3rem
                    line-height .6rem
                    color #6c6d6e
        .footer
             position relative
             float left
             margin-top 1.5rem
             padding-bottom 48%
</style>

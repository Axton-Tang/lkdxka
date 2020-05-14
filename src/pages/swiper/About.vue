<template>
    <div class="wrapper">
        <router-link to="/">
            <fix-header></fix-header>
        </router-link>
        <router-link to="/story">
            <div class="develop-wrapper">
                <img class="develop-content" src="https://lkdxka.oss-cn-shenzhen.aliyuncs.com/home/%E5%85%B3%E4%BA%8E%E6%88%91%E4%BB%AC/%E5%8F%91%E5%B1%95%E5%8E%86%E7%A8%8B.png">
            </div>
        </router-link>
        <div class="title-wrapper">
            <div class="iconfont">&#xe6b5;</div>
            <div class="title">部门介绍</div>
            <div class="title-two">Introduction</div>
        </div>
        <div class="introduce-wrapper" @click="handleClickYunying">
            <div class="content">
                <div class="content-head">运营部</div>
                <p class="small-info">运营部下设策划组、官Q组、外联组。在这里可以尽情放飞你的idea！ </p>
            </div>
            <div class="img-wrapper">
                <img class="img-content" src="https://lkdxka.oss-cn-shenzhen.aliyuncs.com/home/%E5%85%B3%E4%BA%8E%E6%88%91%E4%BB%AC/%E8%BF%90%E8%90%A5%E9%83%A8.jpg">
            </div>
        </div>
        <div class="line"></div>
        <div class="introduce-wrapper" @click="handleClickBianji">
            <div class="content">
                <div class="content-head">编辑部</div>
                <p class="small-info">编辑部下设美术组、视频组、文案组。如果你文采奕奕、酷爱设计，这就是你绽放的舞台！ </p>
            </div>
            <div class="img-wrapper">
                <img class="img-content" src="https://lkdxka.oss-cn-shenzhen.aliyuncs.com/home/%E5%85%B3%E4%BA%8E%E6%88%91%E4%BB%AC/%E7%BC%96%E8%BE%91%E9%83%A8%20.jpeg">
            </div>
        </div>
        <div class="line"></div>
        <div class="introduce-wrapper" @click="handleClickJishu">
            <div class="content">
                <div class="content-head">技术部</div>
                <p class="small-info">技术部下设开发组和产品组。在技术大佬的帮助下，可以大胆的开发你自己的产品！</p>
            </div>
            <div class="img-wrapper">
                <img class="img-content" src="https://lkdxka.oss-cn-shenzhen.aliyuncs.com/home/%E5%85%B3%E4%BA%8E%E6%88%91%E4%BB%AC/%E6%8A%80%E6%9C%AF%E9%83%A8.jpg">
            </div>
        </div>
        <fix-footer class="footer"></fix-footer>
        <department-b></department-b>
    </div>

</template>

<script>
    import FixHeader from '../FixHeader'
    import FixFooter from '../FixFooter'
    import DepartmentB from '../introduce/DepartmentB'

    export default {
        name: 'About',
        components :{
            FixHeader,
            FixFooter,
            DepartmentB
        },
        methods:{
            handleClickYunying (){
                this.$bus.emit("clickYunyingB");
            },
            handleClickBianji (){
                this.$bus.emit("clickBianjiB");
            },
            handleClickJishu (){
                this.$bus.emit("clickJishuB");
            }
        }
    }
</script>

<style lang="stylus" scoped>

    .wrapper
        position relative
        float left
        overflow hidden
        .develop-wrapper
            position relative
            margin-top 1.15rem
            width 100%
            height 0
            padding-bottom 42.5556%
            text-align center
            .develop-content
                width 93%
                border-radius .26rem
                margin-top .3rem
                box-shadow 0 0 .07rem  #333333
        .title-wrapper
            position relative
            float left
            margin 0 .3rem
            margin-top .3rem
            height 1.2rem
            line-height 1.2rem
            font-size .38rem
            width 100%
            .iconfont
                float left
                margin-right .2rem
                color #4CBCB0
                font-size .38rem
            .title
                float left
                font-weight 600
                margin-right .2rem
            .title-two
                margin-top .06rem
                font-size .32rem
                color #bfc1c2
                font-weight 600
        .line
            position relative
            float left
            width 92%
            height .03rem
            background #f1f1f1
            margin-left .36rem
        .introduce-wrapper
            position relative
            width 93%
            height 0
            padding-bottom 20%
            float left
            overflow hidden
            margin .2rem 0 .3rem .3rem
            .content
                float left
                width 68%
                .content-head
                    font-size .35rem
                    letter-spacing .2rem
                    font-weight 600
                    margin .05rem 0
                .small-info
                    margin .15rem auto
                    font-size .26rem
                    color #9d9fa0
                    line-height .3rem
                    letter-spacing .05rem
                    margin-right .2rem
            .img-wrapper
                float right
                width 32%
                height 100%
                .img-content
                    width 100%
                    border-radius .16rem
        .footer
            position relative
            float left
</style>

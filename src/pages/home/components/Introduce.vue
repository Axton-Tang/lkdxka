<template>
    <div class="wrapper">
        <div class="intro-back"></div>
        <div class="back-info">你这么可爱，还来看我！</div>
        <div class="img-wrapper" @click="closeDepart">
            <img class="img-content" src="https://lkdxka.oss-cn-shenzhen.aliyuncs.com/zip/%E4%BA%86%E8%A7%A3%E6%88%91%E4%BB%AC%E7%9A%84%E6%95%85%E4%BA%8B%EF%BC%88%E5%8E%8B%E7%BC%A9%E5%90%8E%EF%BC%89.jpg">
        </div>
        <div class="info-wrapper">
            <router-link to="/story">
                <div class="info1-wrapper">
                    <div class="info1">了解团队故事</div>
                </div>
            </router-link>
            <div class="info2-wrapper">
                <div class="info-wrapper-inner1" @click="handleInfoClick">
                    部门介绍
                    <span class="iconfont">&#xe64a;</span>
                </div>
                <transition name="fade"
                            enter-active-class="animated fadeIn"
                            leave-active-class="animated fadeOut"
                >
                    <div class="info-wrapper-inner2"
                         v-show="show"
                    >
                       <ul class="inner2-text">
                           <li @click="handleClickYunying">运营部</li>
                           <li @click="handleClickBianji">编辑部</li>
                            <li @click="handleClickJishu">技术部</li>
                       </ul>
                    </div>
                </transition>
            </div>
        </div>
        <div class="edge"></div>
    </div>
</template>

<script>

    export default {
        name: 'HomeIntrocuce',
        props :['introShow'],
        data (){
            return {
                show : false,
            }
        },
        methods : {
            handleInfoClick (){
                this.show=!this.show;
            },
            closeDepart(){
                this.show=false;
            },
            handleClickYunying (){
                this.$bus.emit("clickYunying");
            },
            handleClickBianji (){
                this.$bus.emit("clickBianji");
            },
            handleClickJishu (){
                this.$bus.emit("clickJishu");
            }
        },

        watch :{
            introShow: function () {
                this.show=false;
            }
        }

    }
</script>

<style lang="stylus" scoped>
    @import "~styles/varibles.styl"
    .wrapper
        position relative
        z-index 2
        .intro-back
            position absolute
            width 100%
            padding-bottom 50%
            border-radius .5rem
            background-image linear-gradient(to bottom right,#02ea94, #B3F7F6);
            z-index -100
            vertical-align middle
        .back-info
            position absolute
            top  1.45rem
            color #fff
            left 50%
            transform translate(-50%)
            font-size .32rem
        .img-wrapper
            width 100%
            height 0
            padding-bottom 55.667%
            overflow hidden
            margin  0 auto
            padding-top 2.3rem
            text-align center
            z-index 100
            .img-content
                width 93%
                border-radius .26rem
                box-shadow 0 0 .07rem  #333333
        .info-wrapper
            position absolute
            width 4.6rem
            top 5.3rem
            right .2rem
            color white
            z-index 1000
            .info1-wrapper
                float left
                .info1
                    width 2rem
                    height .5rem
                    line-height .5rem
                    color $themeColor
                    background #ffffff
                    box-shadow 0 0 .07rem  $themeColor
                    text-align center
                    border-radius .06rem
            .info2-wrapper
                float left
                margin-left .3rem
                .info-wrapper-inner1
                    width 1.8rem
                    height .5rem
                    line-height .5rem
                    color #ffffff
                    background $themeColor
                    box-shadow 0 0 .07rem  #333333
                    text-align center
                    border-radius .06rem
                    .iconfont
                        font-size .24rem

                .info-wrapper-inner2
                    width 100%
                    height 80%
                    padding-bottom 1.2rem
                    background #ffffff
                    opacity .95
                    border-radius .06rem
                    box-shadow 0 0 .05rem 0 $themeColor
                    z-index 100
                    .inner2-text
                        color $themeColor
                        text-align center
                        letter-spacing .05rem
                        font-size .28rem
                        height .6rem
                        line-height .6rem
        .edge
            width 100%
            height .15rem
            margin .1rem 0
            background #f1f1f3
</style>

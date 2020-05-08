<template>
    <div class="wrapper">
        <div class="img-wrapper">
            <img class="img-content" src="https://lkdxka.oss-cn-shenzhen.aliyuncs.com/home/fe-%E4%BA%86%E8%A7%A3%E5%93%81%E7%89%8C%E6%95%85%E4%BA%8B.jpg">
        </div>
        <div class="info-wrapper">
            <router-link to="/story">
                <div class="info1-wrapper">
                    <div class="info1">了解品牌故事</div>
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
                           <router-link to="/story">
                               <li>运营部</li>
                           </router-link>
                           <router-link to="/story">
                               <li>编辑部</li>
                           </router-link>
                           <router-link to="/story">
                                <li>技术部</li>
                           </router-link>
                       </ul>
                    </div>
                </transition>
            </div>
        </div>
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
                this.show= !this.show;
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

    .wrapper
        position relative
        float left
        z-index 2
        .img-wrapper
            width 100%
            height 0
            padding-bottom 56.667%
            overflow hidden
            margin 0 auto
            text-align center
            .img-content
                width 95%
                border-radius .26rem
                margin-top .1rem
                box-shadow 0 0 .07rem  #333333
        .info-wrapper
            position absolute
            width 95%
            top 3.35rem
            left 2.8rem
            color white
            .info1-wrapper
                float left
                .info1
                    width 2rem
                    height .5rem
                    line-height .5rem
                    color #44a397
                    background #ffffff
                    box-shadow 0 0 .07rem  #333333
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
                    background #44a397
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
                    z-index 100
                    .inner2-text
                        color #31a693
                        text-align center
                        letter-spacing .05rem
                        font-size .28rem
                        height .6rem
                        line-height .6rem
</style>

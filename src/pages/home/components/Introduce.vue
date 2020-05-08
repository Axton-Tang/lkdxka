<template>
    <div class="wrapper">
        <div class="img-wrapper">
            <img class="img-content" src="https://lkdxka.oss-cn-shenzhen.aliyuncs.com/home/fe-%E4%BA%86%E8%A7%A3%E5%93%81%E7%89%8C%E6%95%85%E4%BA%8B.jpg">
        </div>
        <router-link to="/story">
            <div class="info1-wrapper">
                <div class="info1">了解品牌故事</div>
            </div>
        </router-link>
        <div class="info2-wrapper">
            <div class="info-wrapper-inner1" @click="handleInfoClick">
                <div class="info2">部门介绍</div>
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
        .info1-wrapper
            position absolute
            overflow hidden
            top 3.2rem
            left 35%
            width 25%
            height 12%
            background white
            border-radius .06rem
            box-shadow 0 0 .2rem #333333
            .info1
                text-align center
                margin auto auto
                height .55em
                line-height .55rem
                color #31a693
                font-size 100%
        .info2-wrapper
            position absolute
            top 3.2rem
            left  65%
            width 25%
            height 50%
            .info-wrapper-inner1
                width 100%
                height 25%
                background #31a693
                border-radius .06rem
                box-shadow 0 0 .2rem #333333
                .info2
                    position relative
                    float left
                    left .28rem
                    height .55rem
                    line-height .55rem
                    color white
                    font-size 100%
                .iconfont
                    position relative
                    float left
                    left .43rem
                    height .55rem
                    line-height .55rem
                    color white
                    font-size .25rem
            .info-wrapper-inner2
                position absolute
                width 100%
                height 80%
                padding-bottom .1rem
                background #ffffff
                opacity .95
                border-radius .06rem
                z-index 2
                .inner2-text
                    color #31a693
                    text-align center
                    letter-spacing .05rem
                    font-size .28rem
                    height .6rem
                    line-height .6rem
</style>

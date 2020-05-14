<template>
    <div class="wrapper">
        <transition name="fade"
                    enter-active-class="animated fadeIn"
                    leave-active-class="animated fadeOut"

        >
            <div class="back-wrapper"
                 v-if="asideShow"
                 @click="closeAside"
            >
                <div class="back"></div>
            </div>
        </transition>

        <transition name="fade"
                    enter-active-class="animated slideInRight"
                    leave-active-class="animated slideOutRight"

        >
            <div class="content-wrapper" v-if="asideShow">
                <div class="info"
                     @click="selected(1)"
                     :class="{active:active == 1}"
                >首页</div>
                <a class="a"  href="http://mp.weixin.qq.com/mp/homepage?__biz=MzUxODkyNjczNQ==&hid=1&sn=f71bac6c0988a2811a978d4aaf2a4025&scene=18#wechat_redirect">
                    <div :class="{active:active == 2}"
                         @click="selected(2)"
                         class="info"

                    >文章精选</div>
                </a>
                <a class="a" href="http://www.expoon.com/26877/panorama">
                    <div :class="{active:active == 3}"
                         @click="selected(3)"
                         class="info"

                    >全景校园</div>
                </a>
                <router-link to="/chat"
                             class="a"
                >
                    <div
                         class="info"
                         :class="{active:active == 4}"
                         @click="selected(4)"

                    >智能客服</div>
                </router-link>
                <a class="a" href="https://support.qq.com/product/151881">
                    <div :class="{active:active == 5}"
                         @click="selected(5)"
                         class="info"

                    >我要反馈</div>
                </a>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'HomeAside',
        props :{
            asideShow :Boolean
        },
        data (){
            return{
                active : '1'
            }
        },
        methods : {
            closeAside (){
                this.$emit('closeAside');
            },
            selected (flag) {
                this.active=flag;
                if (flag===1){
                    this.closeAside();
                }
                if(flag===4){
                    this.active=1;
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .wrapper
        z-index 200
        .back-wrapper
            position fixed
            top 0
            right 0
            bottom 0
            left 0
            z-index 120
            overflow hidden
            .back
                height 100%
                width 100%
                background #000000
                opacity .2
        .content-wrapper
            position fixed
            z-index 120
            right 0
            top 1.15rem
            bottom 0
            width 55%
            background #ffffff
            .a
                color #000000
            .info
                height 1.2rem
                line-height 1.2rem
                font-size .32rem
                padding-left .6rem
            .active
                background #4CBCB0
                color #ffffff
                opacity .4
                font-size  .38rem

</style>

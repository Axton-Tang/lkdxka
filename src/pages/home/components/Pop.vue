<template>
    <div class="wrapper">
        <div class="part-developer">
            <transition name="fade"
                        enter-active-class="animated fadeIn"
                        leave-active-class="animated fadeOut"

            >
                <div class="pop-wrapper"
                     v-show='developerShow'
                     @click="closeDeveloper"
                >
                    <div class="pop-back"></div>
                    <div class="pop-mini-program">
                        <div class="content-wrap">
                            <span class="iconfont iconfont-cancel">&#xe69b;</span>
                            <div class="content-title">开发者</div>
                            <p class="content" style="text-align: center">
                                <br> Axton Tang <br><br>
                                QQ： 873948360</p>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HomePop',
        props : {
            developerShow :Boolean
        },
        methods : {
            closeDeveloper (){
                this.$emit('developerClose');
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .pop-wrapper
        position fixed
        top 0
        right 0
        bottom 0
        left 0
        z-index 99
        .pop-back
            position absolute
            height 100%
            width 100%
            background #000000
            opacity .2
            z-index 100
        .pop-mini-program
            position relative
            width 85%
            height 4rem
            background #fff
            margin 0 auto
            top 40%
            border-radius .26rem
            z-index 999
            .content-wrap
                position relative
                top .4rem
                .iconfont-cancel
                    position absolute
                    right .3rem
                .content-title
                    font-size .42rem
                    text-align center
                .content
                    position absolute
                    float left
                    font-size .32rem
                    letter-spacing .1rem
                    line-height .5rem
                    left 50%
                    transform translateX(-50%)
</style>

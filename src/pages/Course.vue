<template>
    <div class="wrapper">
        <router-link to="/">
            <fix-header></fix-header>
        </router-link>
        <div class="wrapper-inner">
            <div class="title-wrapper">
                <div class="title">林大课表</div>
            </div>
            <div class="content-wrapper">
                <a href="https://ldkb.xyz/">
                    <div class="content">
                        <div class="item">
                            <span class="iconfont icon-left-1">&#xe611;</span>官 网
                            <span class="iconfont icon-right">&#xe65d;</span>
                        </div>
                    </div>
                </a>
                <div class="gray-line"></div>
                <a href="https://www.coolapk.com/apk/com.nixiaobai.ldkb">
                    <div class="content border-bottom">
                        <div class="item">
                            <span class="iconfont icon-left-2">&#xe665;</span>安 卓 版 下 载
                            <span class="info">推荐使用！</span>
                            <span class="iconfont icon-right">&#xe65d;</span>
                        </div>
                    </div>
                </a>
                <a href="https://ldkb.nixiaobai.com/#/">
                    <div class="content border-bottom">
                        <div class="item">
                            <span class="iconfont icon-left-3">&#xe6f3;</span>网 页 版
                            <span class="iconfont icon-right">&#xe65d;</span>
                        </div>
                    </div>
                </a>
                <div class="content" @click="handleClickMini">
                    <div class="item">
                        <span class="iconfont icon-left-4">&#xe61f;</span>小 程 序 版
                        <span class="iconfont icon-right" v-show="showRow1">&#xe65d;</span>
                        <span class="iconfont icon-right" v-show="showRow2">&#xe600;</span>
                    </div>
                </div>
                <div class="mini-wrapper" v-show="show">
                    <div class="mini">请在微信小程序中搜索 “林大课表” 即可使用</div>
                </div>
                <a href="https://ics.ldkb.xyz/#/">
                    <div class="content border-top">
                        <div class="item">
                            <span class="iconfont icon-left-5">&#xe688;</span>其 他
                            <span class="iconfont icon-right">&#xe65d;</span>
                        </div>
                    </div>
                </a><br><br>
                <p class="other">课表仅供参考，一切以教务网课表为准！</p>
            </div>
        </div>
    </div>

</template>

<script>
    import FixHeader from './FixHeader'

    export default {
        name: 'Course',
        components :{
            FixHeader,
        },
        data(){
            return{
                show:false,
                showRow1: true,
                showRow2: false
            }
        },
        methods: {
            handleClickMini(){
                this.show=!this.show;
                this.showRow1=!this.showRow1;
                this.showRow2=!this.showRow2;
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~styles/varibles.styl"
    .wrapper
        position fixed
        width 100%
        height 100%
        background $grayBack
        .wrapper-inner
            position relative
            top 1rem
            .title-wrapper
                position relative
                width 100%
                height 1rem
                background #fff
                .title
                    position absolute
                    top 50%
                    transform translateY(-50%)
                    font-size .38rem
                    font-weight 600
                    left .5rem
            .content-wrapper
                position relative
                top .15rem
                .gray-line
                    position relative
                    width 100%
                    height .15rem
                    background $grayBack
                .content
                    position relative
                    background #fff
                    width 100%
                    height 1rem
                    font-size .35rem
                    color #333333
                    .item
                        position absolute
                        width 100%
                        top 50%
                        left .5rem
                        transform translateY(-50%)
                        .info
                            font-size .33rem
                            color #9d9fa0
                            position absolute
                            right 1.5rem
                            height .45rem
                            line-height .45rem
                        .iconfont
                            font-size .4rem
                            margin-right .2rem
                            font-weight 600
                        .icon-left-1
                            color #1a02fd
                        .icon-left-2
                            color #82BE24
                        .icon-left-3
                            color #3D93F2
                        .icon-left-4
                            color $themeColor
                        .icon-left-5
                            font-size .35rem
                            color #FFB74D
                        .icon-right
                            position absolute
                            right .5rem
                            color #ccc
                .mini-wrapper
                    position relative
                    width 100%
                    height 1.5rem
                    background #fff
                    .mini
                        position absolute
                        font-size .35rem
                        color #9d9fa0
                        word-wrap:break-word;
                        word-break:break-all;
                        text-align center
                        line-height .6rem
                        top 50%
                        padding .2rem .5rem
                        transform translateY(-50%)
                .other
                    position absolute
                    left .5rem
                    color #9d9fa0
</style>

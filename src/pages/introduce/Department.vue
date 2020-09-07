<template>
    <div class="wrapper">
        <div class="part-one">

            <div @click="closePop" v-show='show01'>
                <div class="pop-back"></div>
            </div>

            <transition name="fade"
                        enter-active-class="animated bounceInUp"
                        leave-active-class="animated bounceOutDown"

            >
                <div class="pop-wrapper"
                     v-show='show01'
                >
                    <div class="pop-mini-program">
                        <div class="content-wrap">
                            <span class="iconfont iconfont-cancel" @click="closePop">&#xe69b;</span>
                            <div class="content-title">运 营 部</div>
                            <div class="content">
                                <div class="info-title">部门简介</div>
                                <div class="info">
                                    为了团队高效化运作，2019年3月，运营部从编辑部中分离出来。现在，运营部主要负责团队日常运营（包括各种和官Q）、活动策划和外联工作等。
                                </div>
                                <div class="result-title">部门成果  <span style="font-size: .3rem">(部分)</span></div>
                                <div class="result" style="line-height: .46rem">
                                    <p class="p">1. 建立2000余人新生答疑群，为19级新生提供各类答疑服务。帮助近50个社团公益迎新宣传。</p>
                                    <p class="p">2. 林科大小可爱综合粉丝达到9000+，QQ空间访客量达到24万。</p>
                                    <p class="p">3. 外联： 与元气音乐节合作，成为汤达人元气音乐节·长沙站组委会官方授权的互动送票平台。</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>

        <div class="part-two">

            <div @click="closePop" v-show='show02'>
                <div class="pop-back"></div>
            </div>

            <transition name="fade"
                        enter-active-class="animated bounceInUp"
                        leave-active-class="animated bounceOutDown"

            >
                <div class="pop-wrapper"
                     v-show='show02'
                >
                    <div class="pop-mini-program">
                        <div class="content-wrap">
                            <span class="iconfont iconfont-cancel" @click="closePop">&#xe69b;</span>
                            <div class="content-title">编 辑 部</div>
                            <div class="content">
                                <div class="info-title">部门简介</div>
                                <div class="info">编辑部是团队成立最早的部门,是微信公众号推文制作的核心部门。主要负责日常推文、活动文案编辑，海报视频制作等。</div>
                                <div class="result-title">部门成果  <span style="font-size: .3rem">(部分)</span></div>
                                <div class="result">
                                    <p class="p">1. 公众号推文阅读量达到25万.暑假发送30余篇萌新推文，帮助新生了解学校，获得一大批新生赞赏。</p>
                                    <p class="p">2. 林科大小可爱表情包上线，累积下载量达5400+，累积发送量达8000+ .</p>
                                    <p class="p">3. 小可爱新头像制作，萌萌哒的形象有没有打动打你呢？</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>

        <div class="part-three">

            <div @click="closePop" v-show='show03'>
                <div class="pop-back"></div>
            </div>

            <transition name="fade"
                        enter-active-class="animated bounceInUp"
                        leave-active-class="animated bounceOutDown"

            >
                <div class="pop-wrapper"
                     v-show='show03'
                >
                    <div class="pop-mini-program">
                        <div class="content-wrap">
                            <span class="iconfont iconfont-cancel" @click="closePop">&#xe69b;</span>
                            <div class="content-title">技 术 部</div>
                            <div class="content">
                                <div class="info-title">部门简介</div>
                                <div class="info">由于团队发展需要以及为了提供给热爱计算机技术的同学一个展现自我的平台，2020年3月，技术部成立。主要负责软件制作、网站设计、小程序开发等。</div>
                                <div class="result-title"><br> 部门成果</div>
                                <div class="result">
                                    1. 林大课表APP开发，支持全校课表一键导入，受到林科大学子广泛好评！<br>
                                    2. 2020高考志愿分析系统，使用人数达1600余人<br>
                                    3. H5版表白墙
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'Department',
        data (){
            return{
                show01 :false,
                show02 :false,
                show03: false
            }
        },
        methods : {
            Yunying (){
                this.show01=!this.show01;
            },
            Bianji (){
                this.show02=!this.show02;
            },
            Jishu (){
                this.show03=!this.show03;
            },
            closePop (){
                this.show01=false;
                this.show02=false;
                this.show03=false;
            }
        },
        created() {
            this.$bus.on("clickYunying",this.Yunying);
            this.$bus.on("clickBianji",this.Bianji);
            this.$bus.on("clickJishu",this.Jishu);
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~styles/varibles.styl"
    .pop-back
        position fixed
        top 0
        right 0
        bottom 0
        left 0
        width 100%
        height 100%
        background #000000
        opacity .1
        z-index 50
    .pop-wrapper
        position fixed
        top 25%
        right 0
        bottom -10%
        left 0
        z-index 51
        .pop-mini-program
            position relative
            width 100%
            height 100%
            background #fff
            margin 0 auto
            border-radius .26rem
            word-wrap break-word
            box-shadow 0 0 .15rem  #9d9fa0
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
                    position relative
                    float left
                    width 90%
                    font-size .32rem
                    letter-spacing .1rem
                    line-height .5rem
                    padding .35rem .35rem
                    margin 0 .1rem
                    .info-title
                        color $themeColor
                        font-size .34rem
                        font-weight 600
                        line-height 1rem
                    .info
                        letter-spacing .05rem
                    .result-title
                        color $themeColor
                        font-size .34rem
                        font-weight 600
                        line-height 1rem
                    .result
                        letter-spacing .05rem
                        .p
                            margin .1rem 0
</style>

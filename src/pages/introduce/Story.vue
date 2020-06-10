<template>
    <div class="out-wrapper">
        <fix-header class="header"></fix-header>
        <div class="inner-wraper">
            <div class="head-img-wraper">
                <img class="head-img" src="https://lkdxka.oss-cn-shenzhen.aliyuncs.com/zip/%E5%9B%A2%E9%98%9F%E4%BB%8B%E7%BB%8D%EF%BC%88%E5%8E%8B%E7%BC%A9%E5%90%8E%EF%BC%89.jpg">
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
                    <div class="edge"></div>
                    <br><br>
                    <div class="title-square"></div>
                    <div class="title">发展历程</div>
                </div>
                <div class="table-box">
                    <transition>
                        <div class="table-head">
                            <div class="row-head"></div>
                            <p class="d one"></p>
                            <p class="d two"></p>
                            <p class="d three"></p>
                        </div>
                    </transition>
                    <table>
                        <tbody><tr>
                            <td class="column-left"></td>
                            <td class="column-right">
                                <p class="time">2020.06 <i class="dian active"></i></p>
                                <p>林科大小可爱官网上线</p>
                            </td>
                        </tr>
                        <tr>
                            <td class="column-left">
                                <p class="time">2020.03 <i class="dian"></i></p>
                                <p>成立技术部 <br>正式开始招募热爱计算机技术成员</p>
                            </td>
                            <td class="column-right"></td>
                        </tr>
                        <tr>
                            <td class="column-left"></td>
                            <td class="column-right">
                                <p class="time">2020.02 <i class="dian active"></i></p>
                                <p>林大课表全面升级为4.0版 <br>支持全校课表一键导入</p>
                            </td>
                        </tr>
                        <tr>
                            <td class="column-left">
                                <p class="time">2020.01 <i class="dian active"></i></p>
                                <p>发布小可爱16种专属表情包 <br><br>
                                    综合粉丝数达到8000，推文阅读达12万，空间访问量18万</p>
                            </td>
                            <td class="column-right">
                            </td>
                        </tr>
                        <tr>
                            <td class="column-left">
                            </td>
                            <td class="column-right">
                                <p class="time">2019.11 <i class="dian active"></i></p>
                                <p>汤达人元气音乐节·长沙站组委会官方授权为互动送票平台</p>
                            </td>

                        </tr>
                        <tr>

                            <td class="column-left">
                                <p class="time">2019.09<i class="dian active"></i></p>
                                <p>林大课表正式上线</p>
                            </td>
                            <td class="column-right">
                            </td>
                        </tr>
                        <tr>
                            <td class="column-left"></td>
                            <td class="column-right">
                                <p class="time">2019.07<i class="dian active"></i></p>
                                <p>创建2000余人新生答疑群，为19级新生提供各类答疑服务
                                    <br> <br> 帮助近50个社团公益迎新宣传</p>
                            </td>
                        </tr>
                        <tr>
                            <td class="column-left">
                                <p class="time">2019.04<i class="dian active"></i></p>
                                <p>林科大小可爱官Q创建</p>
                            </td>
                            <td class="column-right"></td>
                        </tr>
                        <tr>
                            <td class="column-left"></td>
                            <td class="column-right">
                                <p class="time">2019.03 <i class="dian active"></i></p>
                                <p>成立运营部 <br>开始部门分工化管理</p>
                            </td>
                        </tr>
                        <tr>
                            <td class="column-left" >
                                <p class="time">2018.07~08 <i class="dian active"></i></p>
                                <p>林科大小可爱公众号创建 <br>设立编辑部 ，开始公众号文章推送</p>
                            </td>
                            <td class="last">
                                <p class="time"><i class="dian active"></i><i class="dian active" style="display:none;"></i></p>
                            </td>
                        </tr>

                        </tbody></table>
                    <div class="start">
                        <p class="time">2018.07</p>
                        <p>林科大小可爱团队成立</p>
                    </div>

                </div>
            </div>
            <div class="edge"></div>
            <div class="introduce-wrapper">
                <div class="introduce-title-wrapper">
                    <div class="title-square"></div>
                    <div class="title">发展数据</div>

                </div>
                <ul class="data-list">
                    <li class="data-item">
                        <span class="number">
                            <span v-show="showLine">-</span>
                            <countTo v-show="show" ref='example01' :startVal='startVal' :endVal='endVal01' :duration='3000' :autoplay="false"></countTo>
                            W
                        </span>
                        +
                        <div class="unit">推文阅读量</div>
                        <div class="after"></div>
                    </li>
                    <li class="data-item">
                        <span class="number">
                            <span v-show="showLine">-</span>
                            <countTo v-show="show" ref='example02' :startVal='startVal' :endVal='endVal02' :duration='3000' :autoplay="false"></countTo>
                            W
                        </span>
                        +
                        <div class="unit">空间访问量</div>
                        <div class="after"></div>
                    </li>
                    <li class="data-item">
                        <span class="number">
                            <span v-show="showLine">-</span>
                            <countTo v-show="show" ref='example03' :startVal='startVal' :endVal='endVal03' :duration='2000' :autoplay="false"></countTo>
                        </span>
                        +
                        <div class="unit">综合粉丝数</div>
                    </li>
                </ul>
            </div>
            <div class="edge"></div>
            <div class="introduce-wrapper">
                <div class="introduce-title-wrapper">
                    <div class="title-square"></div>
                    <div class="title">团队文化</div>
                </div>
                <div class="introduce">
                    <h2 class="slogon">slogon</h2>
                    <div>我们正青春, <br>做更懂你的林大校园媒体！</div>
                    <br>
                    <h2 class="slogon">价值观</h2>
                    <div>团结&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;务实&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;进取&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;创新</div>
                </div>
            </div>

            <div class="introduce-wrapper">
                <div class="introduce-title-wrapper">
                    <div class="edge"></div>
                    <br><br>
                    <div class="title-square"></div>
                    <div class="title">团队优势</div>
                </div>
                <div class="introduce">
                    <h2 class="best-title">
                        <div class="dot"></div>
                        无偿且独立的学生团体
                    </h2>
                    <div class="best">由一群热爱传媒事业的学长学姐们组建而成，不依附任何学校，任何社团。</div>

                    <h2 class="best-title">
                        <div class="dot"></div>
                        享受特有福利
                    </h2>
                    <div class="best">每月会定期举行会议和组织团建活动,一起团建聚餐，一起去参加音乐节，一起看橘子洲头的烟花，一起打卡省植物园，探索长沙更多好吃好玩的地方。一切活动费用均由公费支出，团队绝不收取任何个人费用。</div>

                    <h2 class="best-title">
                        <div class="dot"></div>
                        感受家人的温暖
                    </h2>
                    <div class="best">小可爱不仅仅是一个共同努力进步的团队，更是你的第二家人。大家会一起过节，互相送上生日祝福，互相提醒最近重要的抢课、考证报名时间，互相帮助学习、解答疑惑，在这里你可以感受到家人之间才有的无微不至的关心。</div>

                    <h2 class="best-title">
                        <div class="dot"></div>
                        收获各类技能
                    </h2>
                    <div class="best">在这里，不仅可以了解到如何运营管理新媒体平台，还可以收获图像制作、视频剪辑、软件制作、推文编辑、网站建设等硬核技能。</div>

                    <h2 class="best-title">
                        <div class="dot"></div>
                        展现才能的大舞台
                    </h2>
                    <div class="best">
                        在这里你可以研发属于林科大的第三方APP（如林大课表），可以制作校园周边文创产品，可以运营小可爱官Q的表白墙/万能墙，同时小可爱也会对外承接主办各种省级、市级、校级活动，只要你有想法有才能，小可爱就是你大显身手的舞台！</div>
                </div>
            </div>
        </div>
        <fix-footer class="footer"></fix-footer>
    </div>
</template>

<script>
    import countTo from 'vue-count-to'
    import FixHeader from '../FixHeader'
    import FixFooter from '../FixFooter'
    export default {
        name: 'IntroduceStory',
        components : {
            FixHeader,
            FixFooter,
            countTo
        },
        data () {
            return {
                startVal: 0,
                endVal01: 14,
                endVal02: 24,
                endVal03: 9000,
                show :false,
                showLine :true,
                count : 0
            }
        },
        methods: {
            start() {
                this.$refs.example01.start();
                this.$refs.example02.start();
                this.$refs.example03.start();
            },
            scrollToTop () {
                const that = this
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                that.scrollTop = scrollTop;
                //判断滚动超出一定距离后在让返回顶部按钮出现
                if (that.scrollTop > 1350) {
                    this.showLine=false;
                    this.show=true;
                    if(this.count===0){
                        this.start();
                        this.count++;
                    }
                }
            }
        },
        mounted () {
            let that = this;
            window.addEventListener('scroll', this.scrollToTop);
        },
        destroyed() {
            let that = this;
            window.removeEventListener('scroll',this.scrollToTop);
        }
    }
</script>

<style lang="stylus" scoped>
    @import '../../assets/styles/timeLine.css'
    @import "~styles/varibles.styl"
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
            top 1rem
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
                    width 100%
                    float left
                    .title-square
                        float left
                        width .4rem
                        height .4rem
                        background $themeColor
                    .title
                        float left
                        margin-left .4rem
                        font-size .38rem
                        font-weight 600

                .introduce
                    .slogon
                        font-weight 600
                        font-size .36rem
                        color $themeColor
                        font-style italic
                        margin-bottom .4rem
                    .best-title
                        width 100%
                        color $themeColor
                        font-size .33rem
                        margin .1rem
                        padding-top .2rem
                        .dot
                            float left
                            margin-top .18rem
                            margin-right .2rem
                            width .25rem
                            height .25rem
                            border-radius 100%
                            background $themeColor
                .table-box
                    position relative
                    clear both
                    top 1rem
                    margin 2rem auto
                    color #6c6d6e
                    .table-head
                        .row-head
                            border-top: 10px solid transparent;
                            border-left: 10px solid transparent;
                            border-right: 10px solid transparent;
                            border-bottom: 15px solid $themeColor;
                            width: 0;
                            margin: 0 auto;
                            position: relative;
                            animation: scaleItem2 2s ease infinite;
                        .one
                            width: 5px;
                            height: 5px;
                            border-radius: 50%;
                            background-color: $themeColor;
                            margin: 5px auto;
                            animation: Pone 2s ease infinite;
                        .two
                            width: 5px;
                            height: 5px;
                            border-radius: 50%;
                            background-color: $themeColor;
                            margin: 5px auto;
                            animation: Ptwo 2s ease infinite;
                        .three
                            width: 5px;
                            height: 5px;
                            border-radius: 50%;
                            background-color: $themeColor;
                            margin: 5px auto;
                            animation: Pthree 2s ease infinite;
                    .column-right
                        width 50%
                        padding 0 .5rem
                        border-left .06rem solid $themeColor
                        line-height .4rem
                        .time
                            position relative
                            font-size .32rem
                            color $themeColor
                            font-weight 600
                            line-height .62rem
                            .dian
                                position absolute
                                display inline-block
                                left -.685rem
                                top .15rem
                                width .3rem
                                height .3rem
                                border-radius 50%
                                background $themeColor
                    .column-left
                        width 50%
                        padding 0 .5rem
                        border-right .06rem solid $themeColor
                        text-align right
                        line-height .5rem
                        .time
                            position relative
                            font-size .32rem
                            color $themeColor
                            font-weight 600
                            line-height .62rem
                            .dian
                                position absolute
                                display inline-block
                                top .15rem
                                right -.685rem
                                width .3rem
                                height .3rem
                                border-radius 50%
                                background $themeColor
                .start
                    position relative
                    top .3rem
                    padding-bottom .3rem
                    font-size .34rem
                    color $themeColor
                    font-weight 600
                    .time
                        position relative
                        font-size .32rem
                        line-height .62rem
                .data-list
                    position relative
                    clear both
                    margin-top 1rem
                    display flex
                    list-style: none;
                    text-align: center;
                    padding: 1rem 0;
                    .data-item
                        flex: 1 1;
                        position: relative;
                        display: inline-block;
                        text-align: center;
                        margin: 0;
                        width: 8rem;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden
                        .number
                            font-size: .55rem;
                            color: #171926;
                            line-height: 1;
                            font-family: dinmedium;
                            .showLine
                                font-size .2rem
                        .unit
                            font-size: .25rem;
                            line-height: .3rem;
                            margin-top: .3rem;
                            color: #000;
                            font-weight: 400;
                            white-space: nowrap;
                            overflow: hidden;
                        .after
                            height: .5rem;
                            width: .05rem;
                            margin-top: .04rem;
                            content: "";
                            display: block;
                            background: #979797;
                            position: absolute;
                            top: 0%;
                            right: -0.02rem;
                .introduce
                    position relative
                    float left
                    margin .5rem .8rem
                    text-align left
                    word-wrap break-word
                    font-size .3rem
                    line-height .6rem
                    color #6c6d6e
            .edge
                position float
                width 100%
                height .15rem
                margin .05rem 0
                background #f1f1f3
        .footer
             position relative
             float left
             margin-top 1.5rem
             padding-bottom 48%
</style>

<template>
    <div class="wrapper">
        <router-link to="/">
            <fix-header class="header"></fix-header>
        </router-link>
        <ul class="content" ref="charView">
            <li class="content-item"
                v-for="(item, index) in messageList"
                :key="index"
            >
                <img class="head-img-left"
                     v-show="!item.myself"
                     src="https://lkdxka.oss-cn-shenzhen.aliyuncs.com/home/%E5%B0%8F%E4%BD%93%E7%A7%AF.png"
                >
                <img class="head-img-right"
                     v-show="item.myself"
                     src="https://lkdxka.oss-cn-shenzhen.aliyuncs.com/home/%E5%A4%A7%E5%8F%AF%E7%88%B1%E5%A4%B4%E5%83%8F.jpg"
                >
                <span
                    :class="'span'+(item.myself?'right':'left')"
                >
                    {{item.message}}

                </span>
            </li>
        </ul>

        <div class="footer">
            <input class="footer-input" type="text" v-model.trim="inputValue" @keyup.enter='chat' placeholder="撩一撩小可爱吧...">
            <span class="footer-btn" @click="btn2">发送</span>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery'
    import FixHeader from '../../FixHeader'
    var content  = $(".content")

    export default{
        name:'Chat',
        components : {
            FixHeader
        },
        data() {
            return {
                //输入的内容,事先约定好的
                inputValue: '',
                //聊天的数组内容
                messageList: [],
                showLeft : false,
                showRight : true
            }
        },//点击回车时候发送信息
        methods: {
            chat() {
                var _this=this;
                //  console.log(_this.$refs.charView);
                this.messageList.push({
                    message: this.inputValue,
                    //这个是判断当前是否是自己输入的内容,自己的是true,机器人的是false
                    myself: true
                })
                // console.log(1);
                // console.log(message)
                // console.log(this.inputValue);
                //每次发送信息之后机器人就要回复,所以添加完之后直接调用机器人的接口
                $.ajax({
                    url: 'http://www.tuling123.com/openapi/api',
                    type: 'post',
                    data: {
                        key: 'eb5b5df95c564bdb952b746fadd6ec90',
                        info: this.inputValue,
                        box:""
                    },
                    success: (data) => {
                        // console.log(data);
                        this.messageList.push({
                            message: data.text,
                            myself: false

                        });
                        _this.$refs.charView.scrollTop+=999;
                    }
                })
                this.inputValue=""
            },
            btn1(){
                this.$router.go(-1)
            },
            btn2(){

                this.messageList.push({
                    message: this.inputValue,
                    //这个是判断当前是否是自己输入的内容,自己的是true,机器人的是false
                    myself: true
                })
                // console.log(1);
                // console.log(message)
                // console.log(this.inputValue);
                //每次发送信息之后机器人就要回复,所以添加完之后直接调用机器人的接口
                $.ajax({
                    url: 'http://www.tuling123.com/openapi/api',
                    type: 'post',
                    data: {
                        key: 'eb5b5df95c564bdb952b746fadd6ec90',
                        info: this.inputValue
                    },
                    success: (data) => {
                        // console.log(data);
                        this.messageList.push({
                            message: data.text,
                            myself: false
                        });

                    }
                })
                this.inputValue="";
            }
        },

        mounted() {
            this.box=this.$refs.charView;
        }

    }
</script>
<style lang="stylus" scoped>

    .wrapper
        position fixed
        top:1.15rem
        right:0
        bottom 1.15rem
        left 0
        .header
            top 0
        .content
            font-size: 16px
            width: 100%
            height: 100%
            overflow: auto
            background #fafafa
            .content-item
                margin-top .2rem
                display block
                clear both
                .head-img-left
                    margin-left .08rem
                    width 1rem
                    height 1rem
                    float left
                .head-img-right
                    margin-right  .2rem
                    width 0.8rem
                    height 0.8rem
                    float right
                    border-radius .5rem

    .content li span{
        background: #4CBCB0
        padding: .1rem;
        border-radius: .26rem;
        float: left;
        margin: .16rem .26rem.2rem .2rem;
        max-width: 5.3rem;
        border: 1px solid #ccc;
        box-shadow: 0 0 3px #ccc;
        line-height .6rem
        word-break: break-all
    }

    .content li span.spanleft {
        float: left;
        background: #fff;
    }
    .content li span.spanright {
        float: right;
        background: #4CBCB0
        color white
        opacity .9
    }


        .footer
            position fixed
            bottom 0
            width: 100%
            height: 1.15rem
            background: #4CBCB0
            bottom: 0
            overflow: hidden
            .footer-input
                margin-top: .2rem
                width: 70%
                height 65%
                outline: none
                font-size: .35rem
                text-indent: .2rem
                position: absolute
                border-radius: .35rem
                margin-left: .25rem
                padding 0 .4rem
                box-sizing border-box
            .footer-btn
                margin-top: .2rem
                display: inline-block
                width: 18%
                height: 65%
                background: #ffffff
                font-weight: 900
                line-height: .75rem
                cursor: pointer
                text-align: center
                font-size .31rem
                color #43a095
                position: absolute
                right: .22rem
                border-radius: .56rem

</style>

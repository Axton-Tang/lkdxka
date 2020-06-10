<template>
    <div class="icons">
        <swiper>
            <swiper-slide>
                <router-link tag="div"
                             class="icon"
                             v-for="item of list"
                             :key="list.id"
                             :to="'/swiper/'+ item.id"
                >
                    <div class="icon-img">
                        <img class="icon-img-content"
                             :src="item.imgUrl"
                        >
                    </div>
                    <div class="icon-desc">{{item.desc}}</div>
                </router-link>
            </swiper-slide>
        </swiper>
        <div class="edge"></div>
    </div>
</template>

<script>
    export default {
        name: 'HomeIcons',
        data () {
            return{
                list: [{
                    id: '001',
                    imgUrl : "https://lkdxka.oss-cn-shenzhen.aliyuncs.com/home/%E5%9B%BE%E6%A0%87/%E5%9B%BE%E6%A0%87-%E5%85%B3%E4%BA%8E%E6%88%91%E4%BB%AC.png",
                    desc : '关于我们'
                },{
                    id: '002',
                    imgUrl : "https://lkdxka.oss-cn-shenzhen.aliyuncs.com/home/%E5%9B%BE%E6%A0%87/%E8%90%8C%E6%96%B0%E4%B8%93%E5%8C%BA.png",
                    desc : '萌新专区'
                },{
                    id: '003',
                    imgUrl : "https://lkdxka.oss-cn-shenzhen.aliyuncs.com/home/%E5%9B%BE%E6%A0%87/%E5%9B%BE%E6%A0%87-%E5%8A%A0%E5%85%A5%E6%88%91%E4%BB%AC.png",
                    desc : '加入我们'
                },{
                    id: '004',
                    imgUrl : "https://lkdxka.oss-cn-shenzhen.aliyuncs.com/home/%E5%9B%BE%E6%A0%87/%E5%9B%BE%E6%A0%87-%E5%95%86%E5%8A%A1%E5%90%88%E4%BD%9C.png",
                    desc : '商务合作'
                }]
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~styles/varibles.styl"
    .icons
        .icon
            float left
            position relative
            overflow hidden
            width 25%
            height 0
            padding-bottom 25%

            .icon-img
                position absolute
                top 0
                left 0
                right 0
                bottom 28%
                box-sizing border-box
                padding 6%
                .icon-img-content
                    height 100%
                    display block
                    margin 0 auto
            .icon-desc
                position absolute
                left 0
                right 0
                bottom 0
                height .55rem
                line-height .55rem
                text-align center
                font-size .26rem
                color #333333
        .edge
            width 100%
            height .15rem
            margin .2rem 0
            background #f1f1f3
</style>

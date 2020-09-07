<template>
  <div>
      <div class="back" v-if="!isMobile">
        <div class="info">请使用手机进行访问！</div>
      </div>
      <keep-alive>
          <router-view/>
      </keep-alive>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMobile: true
    }
  },
  mounted() {
    const clientWidth = document.body.clientWidth
    if (clientWidth > 600) {
      this.isMobile = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .back
    z-index 299
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    background rgba(0,0,0, .5)
    .info 
        position absolute
        top 50%
        left 50%
        transform translate(-50%, -50%)
        color #ffffff
        font-size .5rem
        
</style>

<template>
    <div class="wrapper">
        <Header></Header>
    </div>
</template>

<script>
    import Header from '../home/components/Header'
    export default {
        name: 'IntroduceStory',
        components : {
            Header
        }
    }
</script>

<style lang="stylus" scoped>
    .wrapper
        width 100%
        height 100%
</style>

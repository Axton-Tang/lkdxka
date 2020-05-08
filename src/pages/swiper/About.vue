<template>
    <div class="wrapper">
        <router-link to="/">
            <fix-header></fix-header>
        </router-link>
    </div>
</template>

<script>
    import FixHeader from '../FixHeader'
    export default {
        name: 'About',
        components :{
            FixHeader
        }
    }
</script>

<style lang="stylus" scoped>

</style>

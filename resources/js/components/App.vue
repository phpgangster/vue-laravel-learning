<template>
    <component :is="layout">
        <router-view/>
    </component>
</template>

<script>
const defaultLayout = 'panel'
export default {
    name: "App",

    computed: {
        layout() {
          // document.title = process.env.VUE_APP_TITLE + this.$i18n.t(this.$route.meta.title)
            //return (this.$route.meta.layout || defaultLayout) + '-layout'
            return defaultLayout + '-layout';
        }
    }

}
</script>

<style scoped>

</style>

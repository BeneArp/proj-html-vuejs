<script>
import AppFooter from './components/AppFooter.vue'
import AppHeader from './components/AppHeader.vue';


export default{
    name: 'App',
    components:{
      AppHeader,
      AppFooter,
    },

}

</script>

<template>
    <AppHeader/>
    <AppFooter/>
</template>

<style lang="scss">
    @use './styles/general.scss' as *;
    @use './styles/partials/variables' as *;
  
</style>

<script>
import AppFooter from './components/AppFooter.vue'
import AppHome from './pages/AppHome.vue';

export default{
    name: 'App',
    components:{
      AppFooter,
      AppHome,
    },

}

</script>

<template>
    <AppHome />
    
    <AppFooter/>

</template>

<style lang="scss">
    @use './styles/general.scss' as *;
    @use './styles/partials/variables' as *;
  
</style>

<script>
import AppFooter from './components/AppFooter.vue'
import AppHeader from './components/AppHeader.vue';

import AppHome from './pages/AppHome.vue';

export default{
    name: 'App',
    components:{
      AppHeader,
      AppFooter,
      AppHome,
    },

}

</script>

<template>
    <AppHeader/>
    <AppHome />
    
    <AppFooter/>

</template>

<style lang="scss">
    @use './styles/general.scss' as *;
    @use './styles/partials/variables' as *;
  
</style>

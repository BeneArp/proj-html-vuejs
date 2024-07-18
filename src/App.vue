<script>
import AppFooter from './components/AppFooter.vue'
import AppHeader from './components/AppHeader.vue';

// import AppHome from './pages/AppHome.vue';
// import AppAbout from './pages/AppAbout.vue'
// import AppContacts from './pages/AppContacts.vue'

export default{
    name: 'App',
    components:{
      AppHeader,
      AppFooter,
    //   AppHome,
    //   AppAbout,
    //   AppContacts,
    },

}

</script>

<template>
    <AppHeader/>
    <router-view></router-view>
        <!-- <AppHome /> -->
    <AppFooter/>

</template>

<style lang="scss">
    @use './styles/general.scss' as *;
    @use './styles/partials/variables' as *;
  
</style>

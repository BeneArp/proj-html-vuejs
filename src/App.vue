<script>
import AppFooter from './components/AppFooter.vue'


export default{
    name: 'App',
    components:{
      AppFooter,
    },

}

</script>

<template>
    <AppFooter/>
</template>

<style lang="scss">
    @use './styles/general.scss' as *;
    @use './styles/partials/variables' as *;
  
</style>

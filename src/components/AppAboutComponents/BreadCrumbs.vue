<script>

    export default{
        name: 'BreadCrumbs',

        props:['info']
    }

</script>

<template>

    <ul>
        <li v-for="path in info">
            <router-link :to="{ name: path.name }">
                {{path.text}}
            </router-link>
        </li>
    </ul>

</template>

<style lang="scss" scoped>
    @use '../../styles/partials/mixins' as *;

    ul{
        list-style: none;
        @include flex;
        gap: 0
        0.5em;
    }

</style>
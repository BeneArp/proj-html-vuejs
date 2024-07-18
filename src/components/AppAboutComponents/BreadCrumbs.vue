<script>

    export default{
        name: 'BreadCrumbs',

        props:['info']
    }

</script>

<template>
    <div class="container lg">

        <ul>
            <li v-for="path in info">
                <router-link :to="{ name: path.name }">
                    {{path.text}}
                </router-link>
            </li>
        </ul>

    </div>

</template>

<style lang="scss" scoped>
    @use '../../styles/partials/mixins' as *;
    @use '../../styles/partials/variables' as *;


    ul{
        list-style: none;
        @include flex;
        gap: 0
        0.5em;

        a{
            color: $black;
            font-size: 15px;
        }
    }

</style>
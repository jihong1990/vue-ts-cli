<template>
    <router-view class="router_view" />
    <LoadingVue></LoadingVue>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import LoadingVue from './components/Loading.vue';
import './assets/main.scss';

export default defineComponent({
    components: {
        LoadingVue,
    },
});
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>

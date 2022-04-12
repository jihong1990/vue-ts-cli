<template>
    <div class="loading_spinner" v-if="app.loading">
        <div class="loading_mask"></div>
        <div class="spinner">
            <div class="rect1"></div>
            <div class="rect2"></div>
            <div class="rect3"></div>
            <div class="rect4"></div>
            <div class="rect5"></div>
        </div>
    </div>
</template>

<script lang="ts">
import { appStore } from '@/store';
import { reactive, toRefs } from 'vue';
export default {
    name: 'loading',
    props: {
        msg: String,
    },
    setup() {
        const app = appStore();
        const state = reactive({
            n: 0,
            html: `<h1 style="color: red"> 测试 v-html</h1>`,
            visible: false,
        });
        return {
            ...toRefs(state),
            app,
        };
    },
};
</script>

<style lang="scss">
.loading_spinner {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}
.loading_mask {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
}
.spinner > div {
    margin: 0 2px;
}
</style>

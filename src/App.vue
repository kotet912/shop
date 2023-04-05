<template>
    <main id="app">
        <ScaleLoader
            class="vLoader"
            :style="{ '--time': `${loadingTime}s` }"
            :loading="loading"
            :color="colorLoader"
            v-if="loading"
        />
        <div v-else>
            <vHeader />
            <router-view/>
            <vFooter />
        </div>
    </main>
</template>

<script>
import ScaleLoader from 'vue-spinner/src/ScaleLoader.vue';

import vHeader from './components/vHeader/vHeader.vue';
import vFooter from './components/vFooter/vFooter.vue';

export default {
    name: 'App',
    data() {
        return {
            loading: true,
            loadingTime: 1,
            colorLoader: `#40c000`,
        };
    },
    computed: {},
    components: {
        ScaleLoader,
        vHeader,
        vFooter,
    },
    created() {
        setTimeout(() => {
            this.loading = false;
        }, this.loadingTime * 1000);
    },
};
</script>

<style src="./App.less" lang="less" />

import { createRouter, createWebHistory } from 'vue-router';
import vMain from '@/views/vMain.vue';
import pageCard from '@/views/pageCard.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Main',
            component: vMain,
        },
        {
            path: '/card/:id',
            name: 'pageCard',
            component: pageCard,
            props:true
        },
    ],
});

export default router;

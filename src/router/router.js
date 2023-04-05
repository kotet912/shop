import { createRouter, createWebHistory } from 'vue-router';
import vMain from '@/views/vMain.vue';
import pageCard from '@/views/pageCard.vue';
import pageBasket from '@/views/pageBasket.vue';

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
            props: true,
        },
        {
            path: '/basket',
            name: 'pageBasket',
            component: pageBasket,
        },
    ],
});

export default router;

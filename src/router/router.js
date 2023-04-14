import { createRouter, createWebHistory } from 'vue-router';
import vMain from '@/views/vMain.vue';
import pageCard from '@/views/pageCard.vue';
import pageBasket from '@/views/pageBasket.vue';
import pageCatalog from '@/views/pageCatalog.vue';
import pageOrder from '@/views/pageOrder.vue';

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
        {
            path: '/catalog',
            name: 'pageCatalog',
            component: pageCatalog,
        },
        {
            path: '/order',
            name: 'pageOrder',
            component: pageOrder,
        },
    ],
});

export default router;

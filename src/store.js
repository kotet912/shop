import { createStore } from 'vuex';

const store = createStore({
    state: [
        {
            id: '1',
            image: 'wondicon.png',
            title: 'Product 1',
            description: 'Description 1',
            price: '10$',
            count: 0,
        },
        {
            id: '2',
            image: 'wondicon.png',
            title: 'Product 2',
            description: 'Description 2',
            price: '15$',
            count: 0,
        },
        {
            id: '3',
            image: 'wondicon.png',
            title: 'Product 3',
            description: 'Description 3',
            price: '20$',
            count: 0,
        },
        {
            id: '4',
            image: 'wondicon.png',
            title: 'Product 4',
            description: 'Description 4',
            price: '25$',
            count: 0,
        },
        {
            id: '5',
            image: 'wondicon.png',
            title: 'Product 5',
            description: 'Description 5',
            price: '30$',
            count: 0,
        },
        {
            id: '6',
            image: 'logo.png',
            title: 'Product 6',
            description: 'Description 6',
            price: '35$',
            count: 0,
        },
    ],
    mutations: {},
    actions: {},
    getters: {},
});

export default store;

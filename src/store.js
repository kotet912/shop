import { createStore } from 'vuex';

const store = createStore({
  state: {
    products: [
      {
        id: '1',
        image: 'wondicon.png',
        title: 'Product 1',
        description: 'Description 1',
        price: 10,
        count: 0,
      },
      {
        id: '2',
        image: 'wondicon.png',
        title: 'Product 2',
        description: 'Description 2',
        price: 15,
        count: 0,
      },
      {
        id: '3',
        image: 'wondicon.png',
        title: 'Product 3',
        description: 'Description 3',
        price: 20,
        count: 0,
      },
      {
        id: '4',
        image: 'wondicon.png',
        title: 'Product 4',
        description: 'Description 4',
        price: 25,
        count: 0,
      },
      {
        id: '5',
        image: 'wondicon.png',
        title: 'Product 5',
        description: 'Description 5',
        price: 30,
        count: 0,
      },
      {
        id: '6',
        image: 'logo.png',
        title: 'Product 6',
        description: 'Description 6',
        price: 35,
        count: 0,
      },
    ],
    sortOptions: {
      priceUp: {
        title: 'Цена по возрастанию',
        value: 'priceUp',
        sortFunc: (a, b) => a.price - b.price,
      },
      priceDown: {
        title: 'Цена по убыванию',
        value: 'priceDown',
        sortFunc: (a, b) => b.price - a.price,
      },
    },
    sortValue: 'priceUp',
    searchQuery: '',
  },
  mutations: {
    setFilterValue(state, value) {
      state.sortValue = value;
    },
    setSearchQuery(state, value) {
      state.searchQuery = value.toLowerCase();
    },
  },
  actions: {},
  getters: {
    sortedProducts(state) {
      const sortOption = state.sortOptions[state.sortValue];
      return [...state.products].sort(sortOption.sortFunc);
    },
    filteredProducts(state, getters) {
      return getters.sortedProducts.filter((product) => {
        return product.title.toLowerCase().includes(state.searchQuery);
      });
    },
  },
});

export default store;

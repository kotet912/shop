import { createStore } from 'vuex';

const store = createStore({
  state: {
    products: [
      {
        id: '1',
        image: 'wondicon.png',
        title: 'Шариковая ручка "Акварель"',
        description: 'Ручка с разноцветными частями',
        price: 10,
        count: 0,
      },
      {
        id: '2',
        image: 'wondicon.png',
        title: 'Блокнот "Радуга"',
        description: 'Линии на страницах разных цветов',
        price: 15,
        count: 0,
      },
      {
        id: '3',
        image: 'wondicon.png',
        title: 'Чехол для телефона "Зенит"',
        description: 'Чехол с футбольным клубом "Зенит"',
        price: 20,
        count: 0,
      },
      {
        id: '4',
        image: 'wondicon.png',
        title: 'Детский конструктор "Автомобили"',
        description: 'Конструктор для сборки игрушечных автомобилей',
        price: 25,
        count: 0,
      },
      {
        id: '5',
        image: 'wondicon.png',
        title: 'Сумка для ноутбука "Медведь"',
        description: 'Сумка для переноски ноутбука с изображением медведя',
        price: 30,
        count: 0,
      },
      {
        id: '6',
        image: 'logo.png',
        title: 'Пазл "Зимний лес"',
        description: 'Пазл с изображением зимнего леса',
        price: 35,
        count: 0,
      },
      {
        id: '7',
        image: 'wondicon.png',
        title: 'Фломастеры "Радуга"',
        description: 'Набор фломастеров разных цветов',
        price: 12,
        count: 0,
      },
      {
        id: '8',
        image: 'wondicon.png',
        title: 'Набор кисточек для рисования',
        description: 'Набор разных кисточек для рисования',
        price: 18,
        count: 0,
      },
      {
        id: '9',
        image: 'wondicon.png',
        title: 'Магнит "Жираф"',
        description: 'Магнит с изображением жирафа',
        price: 5,
        count: 0,
      },
      {
        id: '10',
        image: 'wondicon.png',
        title: 'Пазл "Цветочки"',
        description: 'Пазл с изображением цветочных лугов',
        price: 20,
        count: 0,
      },
      {
        id: '11',
        image: 'wondicon.png',
        title: 'Ручка-стилус для телефона',
        description: 'Ручка со встроенным стилусом для экрана телефона',
        price: 15,
        count: 0,
      },
      {
        id: '12',
        image: 'wondicon.png',
        title: 'Футболка "Космос"',
        description: 'Футболка с изображением космоса',
        price: 18,
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

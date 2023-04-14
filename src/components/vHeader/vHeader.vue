<template>
  <header class="header">
    <nav class="header__nav">
      <ul class="header__menu">
        <li class="header__menu-item">
          <router-link class="header__menu-link" to="/">Главная</router-link>
        </li>
        <li class="header__menu-item">
          <router-link class="header__menu-link" to="/catalog"
            >Каталог</router-link
          >
        </li>
        <li class="header__menu-item">
          <router-link class="header__menu-link" to="/contacts"
            >Контакты</router-link
          >
        </li>
      </ul>
      <div class="header__search">
        <router-link class="header__search-link" to="/basket"
          >Корзина
        </router-link>
        <label class="header__search-count"> {{ cartItems.length }}</label>
        <div class="header__search__box">
          <input
            class="header__search__box-input"
            type="text"
            v-model="searchQuery"
            placeholder="Поиск"
          />
        </div>
        <button class="header__search-button">Найти</button>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      searchQuery: '',
    };
  },
  name: 'vHeader',
  computed: {
    ...mapState({
      products: (state) => state.products,
    }),
    cartItems() {
      return this.$store.state.products.filter((product) => product.count > 0);
    },
  },
};
</script>

<style src="./vHeader.less" lang="less" />

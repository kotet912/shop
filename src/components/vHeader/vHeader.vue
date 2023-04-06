<template>
    <header class="header">
        <nav class="header__nav">
            <ul class="header__menu">
                <li class="header__menu-item">
                    <router-link class="header__menu-link" to="/"
                        >Главная</router-link
                    >
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
                    >Корзина </router-link
                >
                <label class="header__search-count"> {{ cartItems.length }}</label>
                <input
                    class="header__search-input"
                    type="text"
                    placeholder="Поиск"
                />
                <button class="header__search-button">Найти</button>
            </div>
        </nav>
    </header>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'vHeader',
    computed: {
        ...mapState({
            products: (state) => state,
        }),
        cartItems() {
            return this.$store.state.filter((product) => product.count > 0);
        },
    },
};
</script>

<style src="./vHeader.less" lang="less" />

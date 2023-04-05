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
export default {
    name: 'vHeader',

    data() {
        return {};
    },

    mounted() {},

    methods: {},
};
</script>

<style src="./vHeader.less" lang="less"/>
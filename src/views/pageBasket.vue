<template>
    <main class="page">
        <div class="page__basket">
            <div class="page__basket-header">
                <h2 class="page__basket-title">Корзина</h2>
                <p class="page__basket-total-price">
                    Цена за количество товаров: {{ totalPrice }}$
                </p>
            </div>

            <table class="page__basket-table">
                <thead>
                    <tr>
                        <th class="page__basket-table-header">
                            Изображение товара
                        </th>
                        <th class="page__basket-table-header">Название</th>
                        <th class="page__basket-table-header">Цена</th>
                        <th class="page__basket-table-header">Количество</th>
                        <th class="page__basket-table-header">
                            Цена за количество товаров
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="product in cartItems"
                        :key="product.id"
                        class="page__basket-table-row"
                    >
                        <td class="page__basket-table-cell">
                            <img
                                :src="require(`@/assets/${product.image}`)"
                                alt="product"
                                class="page__basket-table-image"
                            />
                        </td>
                        <td class="page__basket-table-cell">
                            {{ product.title }}
                        </td>
                        <td class="page__basket-table-cell">
                            {{ product.price }}$
                        </td>
                        <td class="page__basket-table-cell">
                            {{ product.count }}
                        </td>
                        <td class="page__basket-table-cell">
                            {{ product.count * product.price }}$
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'PageBasket',

    data() {
        return {};
    },
    computed: {
        ...mapState({
            products: (state) => state,
        }),
        cartItems() {
            return this.$store.state.filter((product) => product.count > 0);
        },
        totalPrice() {
            return this.cartItems.reduce(
                (total, product) => total + product.count * product.price,
                0
            );
        },
    },
    mounted() {},

    methods: {},
};
</script>

<style src="./pageBasket.less" lang="less" />

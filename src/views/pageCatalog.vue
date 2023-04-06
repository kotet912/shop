<template>
    <main class="pageCatalog">
        <div class="pageCatalog__box">
            <input
                type="text"
                placeholder="Поиск"
                class="pageCatalog__box__input"
            />
        </div>
        <span />
        <div class="pageCatalog__container">
            <div class="pageCatalog__container__filter">
                Сортировка:
                <select v-model="sortType" >
                    <option value=""></option>
                </select>
            </div>
            <div class="pageCatalog__container__products">
                <vCard
                    class="pageCatalog__container__vCard"
                    v-for="item in products"
                    :key="item.id"
                    :id="item.id"
                    :image="item.image"
                    :title="item.title"
                    :description="item.description"
                    :price="item.price"
                />
            </div>
        </div>
    </main>
</template>

<script>
import { mapState } from 'vuex';
import vCard from '@/components/vCard/vCard.vue';

export default {
    name: 'pageCatalog',
    components: {
        vCard,
    },
    computed: {
        ...mapState({
            products: (state) => state,
        }),
    },

    data() {
        return {};
    },

    mounted() {},

    methods: {},
};
</script>

<style src="./pageCatalog.less" lang="less" />

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
                <select
                    v-model="filterValue"
                    @change="setFilterValue(filterValue)"
                >
                    <option
                        v-for="option in sortOptions"
                        :key="option.value"
                        :value="option.value"
                    >
                        {{ option.title }}
                    </option>
                </select>
            </div>
            <div class="pageCatalog__container__products">
                <vCard
                    class="pageCatalog__container__vCard"
                    v-for="item in sortedProducts"
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
import { mapState, mapGetters, mapMutations } from 'vuex';
import vCard from '@/components/vCard/vCard.vue';

export default {
    name: 'pageCatalog',
    components: {
        vCard,
    },

    computed: {
        ...mapState({
            sortOptions: (state) => state.sortOptions,
        }),
        ...mapGetters(['sortedProducts']),
    },

    data() {
        return {
            filterValue: 'priceUp',
        };
    },

    mounted() {},

    methods: {
        ...mapMutations(['setFilterValue']),
    },
};
</script>

<style src="./pageCatalog.less" lang="less" />

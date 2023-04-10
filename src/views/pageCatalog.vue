<template>
  <main class="pageCatalog">
    <div class="pageCatalog__box">
      <input
        type="text"
        placeholder="Поиск"
        v-model="searchQuery"
        class="pageCatalog__box__input"
        @change="setSearchQuery(searchQuery)"
      />
    </div>
    <span />
    <div class="pageCatalog__container">
      <div class="pageCatalog__container__filter">
        Сортировка:
        <select v-model="filterValue" @change="setFilterValue(filterValue)">
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
          v-for="item in filteredProducts"
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
      sortValue: (state) => state.sortValue,
    }),
    ...mapGetters(['sortedProducts']),
    ...mapGetters(['filteredProducts']),

    searchQuery: {
      get: function() {
        return this.$store.state.searchQuery;
      },
      set: function(newValue) {
        this.$store.commit('setSearchQuery', newValue);
      }
    }
  },

  data() {
    return {
      // searchQuery: '',
      filterValue: 'priceUp',
    };
  },

  mounted() {
    this.filterValue = this.sortValue;
  },

  methods: {
    ...mapMutations(['setFilterValue']),
    ...mapMutations(['setSearchQuery']),
  },
};
</script>

<style src="./pageCatalog.less" lang="less" />

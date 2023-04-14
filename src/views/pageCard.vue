<template>
  <main>
    <div class="pageCard">
      <img
        class="pageCard__img"
        :src="require(`@/assets/${product.image}`)"
        alt="Card image"
      />
      <div class="pageCard__container">
        <h1 class="pageCard__container__title">{{ product.title }}</h1>
        <p class="pageCard__container__description">
          {{ product.description }}
        </p>
        <p class="pageCard__container__price">Цена: {{ product.price }}$</p>
        <button
          v-if="!product.count"
          class="pageCard__container__btn"
          @click="product.count++"
        >
          Купить
        </button>
        <div v-if="product.count" class="pageCard__container__count">
          <button
            @click="product.count++"
            class="pageCard__container__count__btn"
          >
            +
          </button>
          <input type="text" v-model="product.count" />
          <button
            @click="product.count--"
            class="pageCard__container__count__btn"
          >
            -
          </button>
        </div>
      </div>
    </div>
    <swiper
      :slidesPerView="4"
      :slidesPerGroup="1"
      :spaceBetween="30"
      :centeredSlides="true"
      :loop="true"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
      :pagination="false"
      :navigation="true"
      :modules="modules"
      class="pageCard__swiper"
    >
      <swiper-slide
        class="pageCard__swiper-slide"
        v-for="item in products"
        :key="item.id"
        :image="item.image"
        ><img
          :src="require(`@/assets/${item.image}`)"
          :alt="item.image"
          @click="selectSlide(item)"
        />
      </swiper-slide>
    </swiper>
  </main>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper';

import { mapState } from 'vuex';

export default {
  name: 'pageCard',
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapState({
      products: (state) => state.products,
    }),
    product() {
      return this.products.find((item) => item.id === this.id);
    },
  },

  methods: {
    selectSlide({ id }) {
      this.$router.push({ name: 'pageCard', params: { id } });
    },
  },
  setup: () => ({ modules: [Autoplay, Pagination, Navigation] }),
};
</script>

<style src="./pageCard.less" lang="less" />

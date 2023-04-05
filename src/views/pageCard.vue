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
                <p class="pageCard__container__price">
                    Цена: {{ product.price }}
                </p>
                <button class="pageCard__container__btn">Купить</button>
            </div>
        </div>
        <swiper
            :slidesPerView="4"
            :slidesPerGroup="2"
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

import products from '@/products';

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
    data: () => ({ products }),
    setup: () => ({ modules: [Autoplay, Pagination, Navigation] }),
    computed: {
        product() {
            return products.find((item) => item.id === this.id);
        },
    },
    methods: {
        selectSlide(product) {
            this.$router.push({
                name: 'pageCard',
                params: {
                    id: product.id,
                },
            });
        },
    },
};
</script>

<style src="./pageCard.less" lang="less" />

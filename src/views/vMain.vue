<template>
    <main class="main">
        <swiper
            :spaceBetween="30"
            :centeredSlides="true"
            :loop="true"
            :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
            }"
            :pagination="{
                clickable: false,
                dynamicBullets: true,
            }"
            :navigation="true"
            :modules="modules"
            class="main__swiper"
        >
            <swiper-slide
                class="main__swiper-slide"
                v-for="item in products"
                :key="item.id"
                :image="item.image"
                ><img
                    :src="require(`@/assets/${item.image}`)"
                    :alt="item.image"
            /></swiper-slide>
        </swiper>
        <hr />
        <div class="main__cards">
            <vCard
                class="main__cards__vCard"
                v-for="item in products"
                :key="item.id"
                :id="item.id"
                :image="item.image"
                :title="item.title"
                :description="item.description"
                :price="item.price"
            />
        </div>
    </main>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper';

import vCard from '@/components/vCard/vCard.vue';

import { mapState } from 'vuex';

export default {
    components: {
        Swiper,
        SwiperSlide,
        vCard,
    },
    computed: {
        ...mapState({
            products: (state) => state,
        }),
    },
    setup: () => ({ modules: [Autoplay, Pagination, Navigation] }),
};
</script>
<style src="./vMain.less" lang="less" />

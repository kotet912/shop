<template>
    <section class="card">
        <img
            class="card__img"
            :src="require(`@/assets/${image}`)"
            :alt="image"
        />
        <h2 class="card__title">{{ title }}</h2>
        <p class="card__description">{{ description }}</p>
        <p class="card__price">{{ price }}</p>
        <router-link
            class="card__link"
            :to="{
                name: 'pageCard',
                params: { id },
            }"
            >Заказать</router-link
        >
    </section>
</template>

<script>
export default {
    name: 'vCard',

    props: {
        id: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
            default: 'logo.jpg',
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: String,
            required: true,
        },
    },
};
</script>

<style src="./vCard.less" lang="less"/>
<template>
  <main class="pageOrder">
    <h2>Оформление заказа</h2>
    <form action="" class="pageOrder__form">
    <label for="name">Имя</label>
    <input id="name" type="text" v-model="name" />

    <label for="email">Email</label>
    <input id="email" type="email" v-model="email" />

    <label for="phone">Телефон</label>
    <input id="phone" type="tel" v-model="phone" />

    <label for="address">Адрес</label>
    <input id="address" type="text" v-model="address" />

    <label for="city">Город</label>
    <input id="city" type="text" v-model="city" />

    <label for="zip">Почтовый код</label>
    <input id="zip" type="text" v-model="zip" />
    <button disabled="disabled" >Заказать</button>
    </form>
  </main>
</template>

<script>
export default {
  name: 'pageOrder',

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style src="./pageOrder.less" lang="less" scoped />

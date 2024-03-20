<template>
  <div class="home">
    <h1>HOME</h1>
    <Cart />
    <div class="allProducts">
      <div
        v-for="product in shopStore.products"
        :key="product.id"
        class="product"
      >
        <p>Name: {{ product.name }} </p>
        <p>Price: {{ product.price }}</p>
        <img :src="product.image" />
        <button @click="shopStore.addToCart(product)">ADD TO CART</button>

      </div>

    </div>
  </div>
</template>

<script setup>
import Cart from "@/components/CartComponent.vue"
import { useShopStore } from '@/stores/shop'
const shopStore = useShopStore()




</script>

<style scoped>
.home {
  padding: 20px;
}

.allProducts {
  display: flex;
  flex-wrap: wrap;
  gap: 25px;

  margin-top: 20px;
}

.product {
  display: flex;
  flex-direction: column;


  border: 1px solid black;
}

.product button {
  margin-top: 10px;
  border-radius: 0px;

  height: 30px;
  cursor: pointer;

  border: none;
  border-top: 1px solid black;
}

img {
  width: 250px;
  height: 250px;

  border-top: 1px solid black;
  border-bottom: 1px solid black;
  margin-top: 10px;
}
</style>
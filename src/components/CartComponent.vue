<template>
    <div class="cart-container">
        <h3>CART</h3>
        <div class="products">
            <div
                class="product-in-cart"
                v-for="item in data.getCartItems"
                :key="item.id"
            >
                <p>Name: {{ item.name }}</p>
                <p>Price: {{ item.price }}</p>
                <p>Quantity: {{ item.quantity }}</p>
                <p>Total price: {{ item.price * item.quantity }}</p>
                <button @click="data.removeFromCart(item)">REMOVE FROM CART</button>

            </div>

        </div>

    </div>
</template>



<script setup>
import { useShopStore } from "@/stores/shop"
const data = useShopStore();
</script>

<style>
h3 {
    font-weight: bold;
}

.cart-container {
    border: 1px solid black;
    padding: 5px;

}

.products {
    display: flex;
    gap: 5px;
}

.product-in-cart {
    display: flex;
    flex-direction: column;

    border: 1px solid black;
    padding: 5px;
}
</style>
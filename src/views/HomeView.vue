<script setup>
import CartComponent from '../components/CartComponent.vue';
import HeroBanner from '../components/HeroBanner.vue';
import FeatureComponent from '../components/FeatureComponent.vue';
import BookListing from '../components/BookListing.vue';

import { useBookStore } from '../stores/books';
import { useCartStore } from '../stores/cart';
const cartStore = useCartStore();
const bookStore = useBookStore();
</script>
<template>
  <CartComponent 
    v-if="cartStore.showCart"
    :cart="cartStore.cart"
    @click-back-home="cartStore.showCart = false"
    @click-add="cartStore.incrementBookToCart"
    @click-minus="cartStore.decrementBookToCart"
  />
  <template v-else>
    <button @click="showCart = true">Ir para carrinho</button>>
    <HeroBanner />
    <FeatureComponent />
    <BookListing :books="bookStore.books" @add-to-cart="cartStore.addToCart" />
  </template>
</template>

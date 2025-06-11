<script setup>
import HeroBanner from '../components/HeroBanner.vue';
import FeatureComponent from '../components/FeatureComponent.vue';
import BookListing from '../components/BookListing.vue';

import { useBookStore } from '../stores/books';
import { useCartStore } from '../stores/cart';
const cartStore = useCartStore();
const bookStore = useBookStore();
</script>
<template>
    <HeroBanner />
    <FeatureComponent />
    <BookListing :books="bookStore.books" @add-to-cart="cartStore.addToCart" />
</template>

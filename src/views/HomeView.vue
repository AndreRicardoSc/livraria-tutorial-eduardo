<script setup>
import HeroBanner from '../components/HeroBanner.vue';
import FeatureComponent from '../components/FeatureComponent.vue';
import BookListing from '../components/BookListing.vue';

import { useBookStore } from '../stores/books';
import { useCartStore } from '../stores/cart';
import { useFavoriteStore } from '../stores/favorite';
const cartStore = useCartStore();
const bookStore = useBookStore();
const favoriteStore = useFavoriteStore()
</script>
<template>
    <HeroBanner />
    <FeatureComponent />
    <BookListing 
        :books="bookStore.books" 
        @add-to-cart="cartStore.addToCart" 
        @add-to-favorite="favoriteStore.addBookToFavorite" 
        @remove-to-favorite="favoriteStore.removeBookFavorite"
    />
</template>
<style scoped>
    *{
        animation: enter-animation ease-in 750ms;
    }
</style>

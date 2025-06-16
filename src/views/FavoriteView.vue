<script setup>
import FavoriteComponent from '../components/FavoriteComponent.vue';
import { useFavoriteStore } from '../stores/favorite';
const favoriteStore = useFavoriteStore();

</script>
<template>
    <FavoriteComponent
        :favoriteList="favoriteStore.favorites"
    />
</template>
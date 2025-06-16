<script setup>
    const props = defineProps(['favoriteList']);
</script>
<template>
    <section class="favorite">
        <h2>Favoritos</h2>
        <article v-for="book of props.favoriteList" :key="book.id">
            <h3>{{ book.title }}</h3>
        </article>
    </section>
</template>
<style scoped></style>
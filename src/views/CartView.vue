<script setup>
    import CartComponent from '../components/CartComponent.vue';
    import { useCartStore } from '../stores/cart';
    const cartStore = useCartStore();
</script>
<template>
    <CartComponent
        :cart="cartStore.cart"
        @click-add="cartStore.incrementBookToCart"
        @click-minus="cartStore.decrementBookToCart"
    />
</template> 
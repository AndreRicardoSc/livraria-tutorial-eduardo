<script setup>
  const props = defineProps(['id']);
  import { useBookStore } from '../stores/books';
  const bookStore = useBookStore();
  const book = bookStore.books[props.id - 1];
</script>
<template>
  <div class="detail">
    <img :src="book.cover" :alt="book.title">
    <h1>Detalhes do Livro: {{ book.title }}</h1>
    <p><strong>Autor:</strong> {{ book.author }}</p>
    <h2>Sinopse</h2>
    <p>{{ book.sinopse }}</p>
    <RouterLink to="/">
      <button class="outlined">Voltar para a loja</button>
    </RouterLink>
  </div>
</template>
<style scoped>
  .detail{
    text-align: center;
    margin: 10% 20%;
    border: solid #27ae60 1px;
    padding: 5% 10%;
    border-radius: 10px;
    box-shadow: 5px 10px 20px #adadad;

    & img{
      border-radius: 10px;
    }
    & strong{
      font-weight: 600;
    }
    & h2{
      font-size: 160%;
      font-weight: 600;
      margin-top: 5%;
    }
    & p{
      font-size: 120%;
    }
    & .outlined{
      margin: auto;
      margin-top: 5%;
    }
  }
  
</style>

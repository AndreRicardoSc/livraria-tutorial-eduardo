import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useBookStore } from './books'
const bookStore = useBookStore()

export const useFavoriteStore = defineStore('favorite', () => {
  const favorites = ref([])

  const addBookToFavorite = (id) => {
    for (let book of bookStore.books) {
      if (book.id == id) {
        favorites.value.push(book)
      }
    }
  }

  const removeBookFavorite = (id) => {
    favorites.value.splice(favorites.value.indexOf(id))
  }
  
  const containBookInFavorite = (id) => {
    return favorites.value.find(book => book.id == id);
  }
  return {
    favorites,
    addBookToFavorite,
    removeBookFavorite,
    containBookInFavorite,
  }
})

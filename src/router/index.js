import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: import ('@/views/HomeView.vue'),
  },
  {
    path: '/carrinho',
    name: 'Cart',
    component: import ('@/views/CartView.vue'),
  },
  {
    path: '/equipe',
    name: 'Team',
    component: import ('@/views/TeamView.vue'),
  },
  {
    path: '/livro/:id',
    name: 'Book',
    component: import ('@/views/BookView.vue'),
    props: true,
  },
  {
    path: '/favoritos',
    name: 'Favorite',
    component: () => import ('@/views/FavoriteView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;


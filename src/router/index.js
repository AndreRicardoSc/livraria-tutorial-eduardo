import { createRouter, createWebHistory } from "vue-router";

//imports dos views
import HomeView from "../views/HomeView.vue";
import TeamView from "../views/TeamView.vue";
import BookView from "../views/BookView.vue";
import CartView from "../views/CartView.vue";
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/carrinho',
    name: 'Cart',
    component: CartView,
    props: true
  },
  {
    path: '/equipe',
    name: 'Team',
    component: TeamView
  },
  {
    path: '/livro/:id',
    name: 'Book',
    component: BookView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;


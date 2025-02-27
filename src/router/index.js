import { createRouter, createWebHistory } from 'vue-router';
import MainView from '@/views/MainView.vue';
import AboutView from '@/views/AboutView.vue';

const routes = [
  {
    path: '/',
    name: 'MainView',
    component: MainView,
  },
  {
    path: '/about',
    name: 'AboutView',
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LayoutFull from '@/layouts/LayoutFull.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: LayoutFull,
      children: [
        {
          path: '',
          name: 'Home',
          component: HomeView,
        },
        {
          path: '/produtos/adicionar',
          name: 'ProdutoAdd',
          component: () => import('@/views/ProdutoAdd.vue'),
        },
        {
          path: '/login',
          name: 'Login',
          component: () => import('@/views/LoginView.vue'),
        },
        {
          path: '/produtos',
          name: 'Produtos',
          component: () => import('@/views/ProdutosView.vue'),
        }
      ],
    },
  ],
});

export default router;
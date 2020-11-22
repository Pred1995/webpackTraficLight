import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/red',
    name: 'RedLight',
    component: () => import('../views/RedLight'),
  },
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/green',
    name: 'GreenLight',
    component: () => import('../views/GreenLight'),
  },
  {
    path: '/yellow',
    name: 'YellowLight',
    component: () => import('../views/YellowLight'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;

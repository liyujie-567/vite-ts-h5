import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
// 路由配置
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: '首页',
      keepAlive: true
    },
    component: () => import('../views/home.vue')
  }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;

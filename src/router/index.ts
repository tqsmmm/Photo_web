//引入路由对象
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

//路由数组的类型 RouteRecordRaw
// 定义一些路由
// 每个路由都需要映射到一个组件。
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('../views/index.vue'),
    },
    {
        path: '/latest',
        component: () => import('../views/latest.vue'),
    },
    {
        path: '/toplist',
        component: () => import('../views/toplist.vue'),
    },
    {
        path: '/random',
        component: () => import('../views/random.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

//导出router
export default router;

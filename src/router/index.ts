import { createRouter, createWebHashHistory, type RouteRecordRaw } from "vue-router";
export const routes: RouteRecordRaw[] = [
  // 根路由
  {
    path: "/",
    redirect: "index",
    hidden: true
  },
  {
    path: "/index",
    name: "index",
    hidden: true,
    component: () => import("../views/index/Index.vue")
  },
  {
    path: "/transTemplate",
    name: "transTemplate",
    hidden: true,
    component: () => import("../views/transTemplate/TransTemplate.vue")
  },
  {
    path: "/transProgress",
    name: "transProgress",
    hidden: true,
    component: () => import("../views/transProgress/TransProgress.vue")
  },
  {
    path: "/trash",
    name: "trash",
    hidden: true,
    component: () => import("../views/trash/trash.vue")
  },
  {
    path: "/videoPreview",
    name: "videoPreview",
    hidden: true,
    component: () => import("../views/preview/VideoPreview.vue")
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;

import { RouteRecordRaw } from 'vue-router';


const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/HomeLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/HomePage.vue') },
    ]
  },
  {
    path: '/',
    component: () => import('layouts/notAuthenticated.vue'),
    children: [
      { path: '/login', component: () => import('pages/loginPage.vue') },
      { path: '/singin', component: () => import('pages/singinPage.vue') }
    ]
  },

  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/workout', component: () => import('pages/workoutPage.vue') },
      { path: '/main', component: () => import('pages/IndexPage.vue') },
      { path: '/new-plan', component: () => import('pages/NewPlan.vue') },
      { path: '/workout-plans', component: () => import('pages/WorkoutPlans.vue') },
    ],
    meta: { requiresAuth: true }
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/registration',
      name: 'registration',
      component: () => import('../views/RegistrationView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/AuthorizationView.vue'),
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/searchCards.vue'),
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/Profile.vue'),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('../views/CreateCard.vue'),
    },
    {
      path: '/single/:id',
      name: 'single',
      component: () => import('../views/SingleCard.vue'),
      props: true,
    },
    {
      path: '/responses',
      name: 'responses',
      component: () => import('../views/Responses.vue'),
    },
    {
      path: '/adminPanel',
      name: 'adminPanel',
      component: () => import('../views/AdminPanel.vue'),
    },
    {
      path: '/update/card/:id',
      name: 'updateResume',
      component: () => import('../views/updateCard.vue'),
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: () => import('../views/Feedback.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue'),
    },
  ],
  linkActiveClass: 'currentSection',
  linkExactActiveClass: 'exact-currentSection',
})

export default router

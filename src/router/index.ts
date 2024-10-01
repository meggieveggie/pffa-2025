import { createRouter, createWebHistory, useRouter } from 'vue-router'
import type { Router } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import OpenCallView from '@/views/OpenCallView.vue'
import SponsorView from '@/views/SponsorView.vue'

// Extend the Router interface to include the isActive method
interface CustomRouter extends Router {
  isActive: (path: string) => boolean;
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about_us',
      name: 'about_us',
      component: AboutView
    },
    {
      path: '/open_call',
      name: 'open_call',
      component: OpenCallView
    },
    {
      path: '/sponsors',
      name: 'sponsors',
      component: SponsorView
    }
  ]
}) as CustomRouter;

router.isActive = (path: string) => {
  const currentRoute = useRouter().currentRoute.value
  return currentRoute.path === path
}

export default router
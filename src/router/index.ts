import { createRouter, createWebHashHistory, useRouter } from 'vue-router'
import type { Router } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import OpenCallView from '@/views/OpenCallView.vue'
import SponsorView from '@/views/SponsorView.vue'

import ProgramOneView from '@/views/ProgramOneView.vue'
import ProgramTwoView from '@/views/ProgramTwoView.vue'
import ProgramThreeView from '@/views/ProgramThreeView.vue'
import ProgramFourView from '@/views/ProgramFourView.vue'
import ProgramFiveView from '@/views/ProgramFiveView.vue'

import InfoView from '@/views/InfoView.vue'


// Extend the Router interface to include the isActive method
interface CustomRouter extends Router {
  isActive: (path: string) => boolean;
}

const router = createRouter({
  history: createWebHashHistory(),
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
    },
    {
      path: '/thursday',
      name: 'thursday',
      component: ProgramOneView
    },
    {
      path: '/I&C',
      name: 'I&C Day',
      component: ProgramTwoView
    },
    {
      path: '/friday',
      name: 'friday',
      component: ProgramThreeView
    },
    {
      path: '/saturday',
      name: 'saturday',
      component: ProgramFourView
    },
    {
      path: '/sunday',
      name: 'sunday',
      component: ProgramFiveView
    },
    {
      path: '/info',
      name: 'info',
      component: InfoView
    }
    
  ]
}) as CustomRouter;

router.isActive = (path: string) => {
  const currentRoute = useRouter().currentRoute.value
  return currentRoute.path === path
}

export default router
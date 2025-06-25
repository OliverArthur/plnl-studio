import type { RouteMeta, RouteRecordRaw } from 'vue-router'

import layouts from '@/components/layout'
import Home from '@/pages/Home.vue'

interface CustomRouteMeta extends RouteMeta {
  layout?: keyof typeof layouts
  requiredAuth?: boolean
  title: string
}

type CustomRouteRecordRaw = RouteRecordRaw & {
  meta?: CustomRouteMeta
}

const routes: Array<CustomRouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      layout: 'AppLayout',
      title: 'Home'
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/pages/Contact.vue'),
    meta: {
      layout: 'AppLayout',
      title: 'Contact'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/pages/About.vue'),
    meta: { layout: 'AppLayout', title: 'About' }
  }
]

export default routes
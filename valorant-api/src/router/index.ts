import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AgentesView from '@/views/AgentesView.vue'
import AgenteView from '@/views/AgenteView.vue'
import MapaView from '@/views/MapaView.vue'
import ArmasView from '../views/ArmasView.vue'
import DetalheArmaView from '@/views/DetalheArmaView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/agentes',
      name: 'agentes',
      component: AgentesView,
    },
    {
      path: '/agente',
      name: 'agente',
      component: AgenteView,
    },
    {
      path: '/mapas',
      name: 'mapas',
      component: MapaView,
    },
    {
      path: '/armas',
      name: 'armas',
      component: ArmasView,
    },
    {
      path: '/detalhearma',
      name: 'armaDetalhe',
      component: DetalheArmaView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router

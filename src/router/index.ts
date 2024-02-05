import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import AIChat from "@/views/AIChat.vue"
import IndustryGraph from '@/views/IndustryGraph.vue'
import SocialCommunity from '@/views/SocialCommunity.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/homepage',
      name: 'HomePage',
      component: HomePage,
      
    },
    {
      path: '/aichat',
      name: 'AIChat',
      component: AIChat
    },
    {
      path: '/industrygraph',
      name: 'IndustryGraph',
      component: IndustryGraph
    },
    {
      path:'/community',
      name:'Community',
      component: SocialCommunity
    },
    {
      path:'/',
      redirect: '/homepage'
    }
  ]
})

export default router

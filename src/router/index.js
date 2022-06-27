import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/main',
    name: 'Main',
    component: () => import("@/views/Main"),
    children: [
      {
        
        path: '/market',
        name: 'TradingMarket',
        component: () => import("@/views/TradingMarket")
      },
      {
        
        path: '/artInfo',
        name: 'ArtInfo',
        component: () => import("@/views/ArtInfo")
      },
      
      {
        
        path: '/login',
        name: 'Login',
        component: () => import("@/views/Login")
      },
      {
        
        path: '/register',
        name: 'Register',
        component: () => import("@/views/Register")
      },
      {
        path: '/upload',
        name: 'Upload',
        component: () => import("@/views/Upload")
      },
      {
        path: '/user',
        name: 'User',
        component: () => import("@/views/User"),
        children: [
          {
            path: '/info',
            name: 'Info',
            component: () => import("@/views/Info"),
          },
          {
            path: '/invite',
            name: 'Invite',
            component: () => import("@/views/Invite"),
          },
          {
            path: '/like',
            name: 'Like',
            component: () => import("@/views/Like"),
          },
          {
            path: '/list',
            name: 'List',
            component: () => import("@/views/List"),
          },
          {
            path: '/wallet',
            name: 'Wallet',
            component: () => import("@/views/Wallet"),
          },
        ]
      },
    ]
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

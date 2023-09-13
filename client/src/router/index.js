import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../components/Layout.vue'
import { useAuthStore } from '../stores/counter'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '/',
          name: 'Home',
          component: () => import('../views/HomeView.vue'),
          meta: {
            needAuth: true
          }
        },
        {
          path: '/about',
          name: 'About',
          component: () => import('../views/AboutView.vue'),
          meta: {
            needAuth: true
          }
        },
        {
          path: '/update/:id',
          name: 'Update',
          component: () => import('../views/UpdateView.vue'),
          meta: {
            needAuth: true
          }
        }
      ]
    },
    {
      path: '/signup',
      name: 'Signup',
      component: () => import('../views/SignupView.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/LoginView.vue')
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('../views/NotFound.vue') }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.needAuth) {
    if (!useAuthStore().isAuthenticated) {
      next('/login')
    } else {
      next()
    }
  } else if (to.name == 'Login' || to.name == 'Signup') {
    if (useAuthStore().isAuthenticated) {
      next(from)
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router

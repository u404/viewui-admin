import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/layouts/Main'
import Login from '@/views/Login'
import store from '@/store'

Vue.use(VueRouter)

export const menuRoutes = [
  {
    icon: 'ios-analytics',
    title: 'CMS',
    name: 'cms',
    path: '/cms',
    children: [
      {
        title: '影片管理',
        path: '/film',
        name: 'cms-film',
        component: () => import(/* webpackChunkName: "cms" */ '../views/About.vue')
      },
      {
        title: 'Banner管理',
        path: '/banner',
        name: 'cms-banner',
        component: () => import(/* webpackChunkName: "cms" */ '../views/About.vue')
      },
      {
        title: '广告管理',
        path: '/ad',
        name: 'cms-ad',
        children: [
          {
            title: '影片管理',
            path: '/film',
            name: 'cms-ad-film',
            component: () => import(/* webpackChunkName: "cms" */ '../views/About.vue')
          },
          {
            title: 'Banner管理',
            path: '/banner',
            name: 'cms-ad-banner',
            component: () => import(/* webpackChunkName: "cms" */ '../views/About.vue')
          }
        ]
      }
    ]
  },
  {
    icon: 'ios-filing',
    title: 'OMS',
    name: 'oms',
    path: '/oms',
    children: [
      {
        title: '赠票管理',
        path: '/ticket',
        name: 'oms-ticket',
        component: () => import(/* webpackChunkName: "cms" */ '../views/About.vue'),
        children: [

        ]
      },
      {
        title: '活动管理',
        path: '/activity',
        name: 'oms-activity',
        component: () => import(/* webpackChunkName: "cms" */ '../views/About.vue')
      }
    ]
  }
]

const getRoutes = (menuRoutes, parentPath = '', routes = []) => {
  return menuRoutes.reduce((res, item) => {
    item.path = parentPath + item.path
    if (item.component) {
      res.push(item)
    } else if (item.children) {
      getRoutes(item.children, item.path, routes)
    }
    return res
  }, routes)
}

export const routes = [
  {
    path: '',
    name: 'Main',
    component: Main,
    children: getRoutes(menuRoutes)
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

console.log('routes------', routes)

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  console.log('router.beforeEach', store.state.user)
  if (to.name !== 'login' && !store.state.user) next({ name: 'login' })
  else next()
})

router.onError((err) => {
  console.log(err)
})

export default router

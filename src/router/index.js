import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: resolve=>{require(['../page/login.vue'],resolve)}
    },
    {
      path: '/home',
      name: 'home',
      component: resolve=>{require(['../page/home.vue'],resolve)},
      children:[
        {
          path: '/show',
          name: 'show',
          component: resolve=>{require(['../page/show.vue'],resolve)},
          },
        {
        path: '/user',
        name: 'user',
        component: resolve=>{require(['../page/user.vue'],resolve)},
        },
        {
          path: '/order',
          name: 'order',
          component: resolve=>{require(['../page/order.vue'],resolve)},
        },
        {
          path: '/good',
          name: 'good',
          component: resolve=>{require(['../page/good.vue'],resolve)},
        },
        {
          path: '/shop',
          name: 'shop',
          component: resolve=>{require(['../page/shop.vue'],resolve)},
        },
        {
          path: '/setsystem',
          name: 'setsystem',
          component: resolve=>{require(['../page/setsystem.vue'],resolve)},
        },
        {
          path: '/addgood',
          name: 'addgood',
          component: resolve=>{require(['../page/addgood.vue'],resolve)},
        },
        {
          path: '/userspread',
          name: 'userspread',
          component: resolve=>{require(['../page/userspread.vue'],resolve)},
        },
      ]
    },
  ]
})

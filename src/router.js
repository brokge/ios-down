import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/vaccine/index',
      name: 'vaccine-index',
      component: () => import('./views/VaccineIndex.vue')
    },
    {
      path: '/news/detail',
      name: 'news-detail',
      component: () => import('./views/NewsDetail.vue'),
      props: (route) => ({
        newId: route.query.new_id
      })
    },
    {
      path: '/vaccine/month',
      name: 'vaccine-month',
      component: () => import('./views/VaccineByMonth.vue')
    },
    {
      path: '/vaccine/detail/:vaccineId',
      name: 'vaccine-detail',
      component: () => import('./views/VaccineDetail.vue'),
      props: true
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
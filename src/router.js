import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'vaccine-index',
      component: () => import('./views/IOSDownloadPage.vue')
    },
    {
      path: '/ios/download',
      name: 'iosDownload',
      component: () => import('./views/IOSDownloadPage.vue')
    }
  ]
})
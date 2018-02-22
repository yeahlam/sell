// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import myGoods from './components/Goods/Goods'
import myRatings from './components/Ratings/Ratings'
import mySeller from './components/Seller/Seller'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes=[
  {path: '/', redirect: '/goods'},
  { path: '/goods', component: myGoods },
  { path: '/ratings', component: myRatings },
  { path: '/seller', component: mySeller },

]

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
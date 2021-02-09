import Vue from 'vue'
// import App from './App.vue'
import VueRouter from 'vue-router'

import HelloWorld from './components/HelloWorld';

const routes = [
  {'path': '/knowledge-base', component: HelloWorld}
]

const router = new VueRouter({
  routes
})

// Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  router
}).$mount('#app')

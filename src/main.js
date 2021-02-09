import Vue from 'vue'
import buefy from "buefy";
import App from './App.vue'
import VueRouter from 'vue-router'

import KnowledgeBase from './views/KnowledgeBase';

import "buefy/dist/buefy.css";

const routes = [
  {'path': '/knowledgeBase', component: KnowledgeBase}
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

Vue.use(VueRouter)
Vue.config.productionTip = false

Vue.use(buefy, {
  defaultIconComponent: "vue-fontawesome",
  defaultIconPack: "fas",
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

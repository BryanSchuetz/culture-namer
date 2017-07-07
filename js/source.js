// 🎌 IMPORT MODULES, COMPONENTS AND WHATNOT. CREATE THE VUE INSTANCE 🎌
import Vue from 'vue'
import WebFont from 'webfontloader'
import Marked from 'marked'
import App from '../components/app.vue'
import Ship from '../components/ship.vue'
import Home from '../components/home.vue'
import VueRouter from 'vue-router' 
Vue.use(VueRouter)

const routes = [
  { path: '/ships/:name', component: Ship },
  { path: '/', component: Home }
]
const router = new VueRouter({
  mode: 'history',
  routes 
})

// 🎌 GOOGLE FONTS, CAUSE TYPOGRAPHY 🎌
WebFont.load({
 google: {
   families: ['Ubuntu Condensed:400', 'Ubuntu:400,italic,700']
 }
}); 


var app = new Vue({
  router,
  el: '#content',
  render: h => h(App),
})
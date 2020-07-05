import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faFolderOpen, faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VModal from 'vue-js-modal'

library.add(faGithub, faLinkedinIn, faFolderOpen, faEnvelope)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VModal)
Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  {
    path: '/',
    component: App,
    meta: {
      title: 'mikal.io',
    }
  },
  {
    path: '/portfolio',
    Component: App,
    meta: {
      title: 'Portfolio',
      metaTage: [
      ]
    }
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

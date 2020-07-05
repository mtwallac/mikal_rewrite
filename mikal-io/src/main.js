import Vue from 'vue'
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

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

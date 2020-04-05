import Vue from 'vue'
import App from './App'
import {
  Header
} from 'mint-ui'
import router from './router'
import store from './stores'
import axios from 'axios'
import './assets/css/cssreset.css'
import Loading from './components/Loading/Loading.vue'
import Scroller from './components/Scroller/scroller.vue'

Vue.prototype.$ajax = axios;

Vue.component('Loading', Loading)
Vue.component('Scroller', Scroller)
Vue.component(Header.name, Header);

Vue.config.productionTip = false

Vue.filter('setWH', (url, arg) => {
  return url.replace(/w\.h/, arg);
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  router,
  store
})


import Vue from 'vue'
import App from './App'
import MintUI from 'mint-ui'
import router from './router'
import store  from './stores'
import axios from 'axios'
import './assets/css/cssreset.css'
import './assets/mui-master/dist/css/mui.min.css'
import './assets/mui-master/fonts/mui.ttf'
import 'mint-ui/lib/style.css'
import './assets/icons/iconfont.css'

Vue.prototype.$ajax=axios;


Vue.config.productionTip = false

Vue.use(MintUI)

Vue.filter('setWH',(url,arg)=>{
  return url.replace(/w\.h/,arg);
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})




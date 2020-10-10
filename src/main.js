import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import toast from './components/common/toast'


Vue.config.productionTip = false
//事件总线
Vue.prototype.$bus=new Vue();
Vue.use(toast);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

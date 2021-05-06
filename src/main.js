import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import obj from 'components/common/toast'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false

Vue.use(obj)
Vue.use(VueLazyload, {
  loading: require('./assets/img/common/placeholder.png')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

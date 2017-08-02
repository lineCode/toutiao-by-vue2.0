import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
// 
import iView from 'iview'
import './assets/style/iview.css'
// import 'iview/dist/styles/iview.css'
// 额 vue-cli生成的只有考到src目录才能生效

Vue.use(iView)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './Router'
import store from './Store'

Vue.config.productionTip = false


new Vue({
  router,
  vuetify,
  store,
  
  render: h => h(App)
}).$mount('#app')

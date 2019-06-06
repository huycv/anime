import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import VueI18n from 'vue-i18n';
import i18n from './langs/i18n';
Vue.use(VueI18n);


const mainApp = new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
export default mainApp;

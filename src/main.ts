import Vue from 'vue'
import "@mdi/font/css/materialdesignicons.css";
import App from './App.vue'
import router from './router/index'
import vuetify from './plugins/vuetify'
import './assets/main.css'

if (
  !localStorage.getItem("themeColor") &&
  !localStorage.getItem("sideBarColor") &&
  !localStorage.getItem("navBarColor")
) {
  localStorage.setItem("themeColor", "#1e88e5");
  localStorage.setItem("sideBarColor", "#121212");

  localStorage.setItem("navBarColor", "#1e88e5");
}
Vue.prototype.$vuetify = vuetify;

new Vue({
  router,
  vuetify,
  render: (h) => h(App)
}).$mount('#app')

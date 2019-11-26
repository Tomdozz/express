// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "vuetify/dist/vuetify.min.css";
import "@/assets/global.css"
import Vuetify from "vuetify";
import Vue from "vue";
import App from "./App";
import router from "./router";
import Navigation from './components/Navigation'

Vue.component('Navigation', Navigation)

Vue.config.productionTip = false;
Vue.use(Vuetify);
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});

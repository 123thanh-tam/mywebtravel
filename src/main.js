import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./style.css";
import "feather-icons";
import ReadMore from "vue-read-more";

Vue.config.productionTip = false;

new Vue({
  router,
  ReadMore,
  render: (h) => h(App),
}).$mount("#app");

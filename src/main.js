import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import VueScrollTo from "vue-scrollto";
import Meta from "vue-meta";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./filter";

import "@/assets/css/common.css";

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(VueScrollTo);

Vue.use(Meta, {
  keyName: "head",
  attribute: "data-n-head",
  ssrAttribute: "data-n-head-ssr",
  tagIDKeyName: "hid"
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

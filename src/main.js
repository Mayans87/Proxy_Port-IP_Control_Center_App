import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./assets/main.css";
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';

locale.use(lang);

Vue.use(ElementUI);

new Vue({
  locale: "en",
  el: "#app",
  render: (h) => h(App),
}).$mount("#app");

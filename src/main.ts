// main.js
import Vue from "vue";
import VueI18n from "vue-i18n";
import { createI18n } from "vue-i18n-composable";
import App from "./App.vue";

Vue.use(VueI18n);

const i18n = createI18n({
  locale: "ja",
  messages: {
    en: {
      language: "English",
    },
    ja: {
      language: "日本語",
    },
  },
});

const app = new Vue({
  render: (h) => h(App),
  i18n,
});

app.$mount("#app");

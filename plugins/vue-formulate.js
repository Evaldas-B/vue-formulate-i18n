import Vue from "vue";
import VueFormulate from "@braid/vue-formulate";
import { lt } from "@braid/vue-formulate-i18n";

Vue.use(VueFormulate, {
  plugins: [lt]
});

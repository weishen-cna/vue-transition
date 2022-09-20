import { createApp } from "vue";
import App from "./App.vue";
import * as VueRouter from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import About from "./components/About.vue";
import ElementPlus from "element-plus";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
// import { PacvueElement } from "@pacvue/element-plus";
// import "@pacvue/element-plus/dist/style.css";
import STable, { setLicenseKey } from "@surely-vue/table";
import "element-plus/dist/index.css";
import "@surely-vue/table/dist/index.css";
setLicenseKey(
  "1e1122b7668374851cfbe86fb6d6eafeT1JERVI6MTAwMDI0LEVYUElSWT0zMzI0ODk2NjQwMDAwMCxET01BSU49c3VyZWx5LmNvb2wsVUxUSU1BVEU9MSxLRVlWRVJTSU9OPTE="
);
const routes = [
  { path: "/", component: HelloWorld },
  { path: "/hello-world", component: HelloWorld },
  { path: "/about", component: About },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

var app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(router).use(ElementPlus).use(STable).mount("#app");

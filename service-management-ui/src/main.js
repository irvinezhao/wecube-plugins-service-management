import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import PluginSelect from "./components/select.vue";

Vue.use(ViewUI);

Vue.config.productionTip = false
Vue.component("PluginSelect", PluginSelect);


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

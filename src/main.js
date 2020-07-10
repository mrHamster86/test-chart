import Vue from 'vue';
import App from './App.vue';
import Store from './store';
import axios from 'axios';
import '@/ui/index';

axios.defaults.baseURL = process.env.API || 'http://localhost:1337';
axios.interceptors.response.use((res) => {
  console.log(res.data)
  return res.data;
}, (err) => {
  console.error(err);
})

Vue.config.productionTip = false

const init = async () => {
  await Store.dispatch('getBrands');

  new Vue({
    store: Store,
    render: h => h(App),
  }).$mount('#app');
}

init();
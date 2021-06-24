import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css';
import axios from 'axios'
import config from './config'

// console.log("环境变量===>",process.env);
console.log("环境变量===>", import.meta.env);
const app = createApp(App)
// app.mount('#app')
axios.get(config.mockApi + "/login").then((res) => {
  console.log(res);
})
app.use(router).use(ElementPlus).mount("#app")

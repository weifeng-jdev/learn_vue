import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)
//先挂在路由，以解析router-link
app.use(router)
//再挂载DOM
app.mount('#app')


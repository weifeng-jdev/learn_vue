import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'

// 创建pinia
const pinia = createPinia()
const app = createApp(App)
// 使用pinia
app.use(pinia)
// 挂在DOM 
app.mount('#app')
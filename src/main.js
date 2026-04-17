import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import Appbasic from './basic/Appbasic.vue'

const app = createApp(Appbasic)
const pinia = createPinia()

app.use(pinia)

app.mount('#app')

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import pinia from '@/stores'

import 'vant/lib/index.css'
import './styles/main.scss'

import 'virtual:svg-icons-register'

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')

import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


const app = createApp(App)

// app.use(vue3GoogleLogin, {
//   clientId: '762622375439-9i0f64683rbljqon9kgoui7jmmtce440.apps.googleusercontent.com'
// })


app.use(createPinia())
app.use(router)

app.mount('#app')

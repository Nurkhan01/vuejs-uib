import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// import VueRouter from 'vue-router'
import router from './router/index'
const app = createApp(App)

app.use(router)
app.mount('#app')

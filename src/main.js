import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './langages'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"

createApp(App)
    .use(router)
    .use(store)
    .use(i18n)
    .mount('#app')

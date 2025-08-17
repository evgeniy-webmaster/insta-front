import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { Quasar } from 'quasar'
import 'quasar/src/css/index.sass'
import iconSet from 'quasar/icon-set/material-symbols-outlined'

createApp(App)
  .use(Quasar, { iconSet })
  .mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
import iconSet from 'quasar/icon-set/material-symbols-outlined'
import 'quasar/dist/quasar.css'

createApp(App)
  .use(Quasar, { iconSet })
  .mount('#app')

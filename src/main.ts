import { createApp } from 'vue'

import '@/styles/app.css'

import PrimeVue from 'primevue/config'
import Tooltip from 'primevue/tooltip'

import './styles/app.css'
import AppPreset from '@/styles/app.css.ts'
import App from './App.vue'
import router from '@/router'

const app = createApp(App)

app.directive('tooltip', Tooltip)

app.use(router)

app.use(PrimeVue, {
  theme: {
    preset: AppPreset,
    options: {
      darkModeSelector: '.dark-mode-on',
      cssLayer: false
    }
  },
}, {ripple: true})

app.mount('#app')

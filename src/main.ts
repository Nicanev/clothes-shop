import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { languages } from './i13n'
import { defaultLocale } from './i13n'
import { createI18n, useI18n } from 'vue-i18n'

import './assets/scss/main.scss'

const localeStorageLang = localStorage.getItem('lang')

const messages = Object.assign(languages)
const i18n = createI18n({
    legacy: false,
    locale: localeStorageLang || defaultLocale,
    fallbackLocale: "en",
    messages
  })

const app = createApp(App, {
    setup() {
        const {t} = useI18n()
        return {t}
    }
})

app.use(i18n)

app.use(router)

app.mount('#app')

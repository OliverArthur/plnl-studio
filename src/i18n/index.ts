import { createI18n, type I18nOptions } from 'vue-i18n'

import en from "@/i18n/locales/en.json"
import nl from "@/i18n/locales/nl.json"



const options : I18nOptions = {
    legacy: false,
    locale: 'en-US',
    fallbackLocale: 'en-US',
    messages: {
        en,
        nl
    }
}


export const i18n = createI18n<false, typeof options>(options)
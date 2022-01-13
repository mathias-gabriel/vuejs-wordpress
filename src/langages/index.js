//import VueI18n from 'vue-i18n';
import { createI18n } from 'vue-i18n/index'

const messages = {
    en: {
        message: {
            hello: 'hello world'
        }
    },
    ja: {
        message: {
            hello: 'こんにちは、世界'
        }
    }
}

// 2. Create i18n instance with options
const i18n = createI18n({
    locale: 'ja', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
})

export default i18n;



import Vue from "vue";
import { Locales } from "./locales";
import en from "./en.json";
import pt from "./pt-BR.json";
import VueI18n from 'vue-i18n';


Vue.use(VueI18n)

const i18n = new VueI18n({
   locale: 'pt-BR', 
     fallbackLocale: 'en',
    messages: { pt, en },
   silentTranslationWarn: true
})

const translate = (key: string) => {
    if (!key) {
       return '';
      }
    return i18n.t(key);
  };

export const messages = {
  [Locales.EN]: en,
  [Locales.PT]: pt
};

export const defaultLocale = Locales.PT;
export {i18n, translate }; 
import Vue from 'vue';
import Vuetify from 'vuetify';
import '@/scss/vuetify/overrides.scss'
import pt from 'vuetify/src/locale/pt';
Vue.use(Vuetify);

const theme = {
  primary: '#1e88e5',
  info: '#1e88e5',
  success: '#21c1d6',
  accent: '#fc4b6c',
  default: '#563dea',
  darkgray: '#121212'
};


export default new Vuetify({
  theme: {
    themes: {
      dark: theme,
      light: theme,
    },
    dark: true
  },
  icons: {
    iconfont: 'mdi',
  },
  lang: {
    locales: { pt },
    current: 'pt',
  },
  breakpoint: {
    mobileBreakpoint: 'sm', // This is equivalent to a value of 960
    thresholds: {
      xs: 340,
      sm: 540,
      md: 800,
      lg: 1280,
    },
    scrollBarWidth: 24,
  },
});

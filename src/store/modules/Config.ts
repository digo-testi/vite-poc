import type { Module } from 'vuex'

const config: Module<any, any> = {
  state: () => ({
    darkTheme: false
  }),
  mutations: {
    darkTheme(state: { darkTheme: boolean }, value: boolean) {
      state.darkTheme = value
    }
  },
  actions: {
    setDarkTheme(context, data) {
      context.commit('darkTheme', data)
    }
  },
  getters: {
    getDarkTheme(state: { darkTheme: boolean }) {
      return state.darkTheme
    }
  }
}
export default config
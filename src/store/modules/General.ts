export const general = {
  namespaced: true,
  state: () => ({
    loading: false,
    Sidebar_drawer: null,
    Customizer_drawer: false,
    SidebarColor: "white",
    SidebarBg: "",
    navbarColor: "primary",
    setHorizontalLayout: false,
  }),
  mutations: {
    loading(state: { loading: boolean }, value: boolean) {
      state.loading = value;
    },

    SET_SIDEBAR_DRAWER(state: any, payload: any) {
      state.Sidebar_drawer = payload;
    },
    SET_CUSTOMIZER_DRAWER(state: { Customizer_drawer: any; }, payload: any) {
      state.Customizer_drawer = payload;
    },
    SET_SIDEBAR_COLOR(state: { SidebarColor: any; }, payload: any) {
      state.SidebarColor = payload;
    },
    SET_NAVBAR_COLOR(state: { navbarColor: any; }, payload: any) {
      state.navbarColor = payload;
    },
    SET_LAYOUT(state: { setHorizontalLayout: any; }, payload: any) {
      state.setHorizontalLayout = payload;
    },
  },
  actions: {
    startLoading(context: { commit: (arg0: string, arg1: boolean) => void; }) {
      context.commit("loading", true);
    },
    endLoading(context: { commit: (arg0: string, arg1: boolean) => void; }) {
      context.commit("loading", false);
    },
  },
  getters: {
    isLoading(state: { loading: boolean }) {
      return state.loading;
    },
  },
};

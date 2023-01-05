import { tokenStore } from "../LocalStorage";

export const auth = {
  namespaced: true,
  state: () => ({
    user: null,
    permissions: {},
    logged: false,
    stateLoaded: true,
    productId: null,
    userId: null,
  }),

  mutations: {
    SET_USER_ID(state: any, value: any): void {
      state.userId = value;
    },
    SET_PRODDUCT_ID(state: any, value: any): void {
      state.productId = value;
    },
    SET_USER(state: { user: any; }, value: any): void {
      state.user = value;
    },
    SET_PERMISSIONS(state: { permissions: any; stateLoaded: boolean; }, value: any): void {
      state.permissions = value;

      state.stateLoaded = true;
    },
    SET_LOGGED(state: { logged: any; }, value: any): void {
      state.logged = value;
    },
  },
  actions: {
    setLogin(context: { commit: (arg0: string, arg1: boolean) => void; }, data: { token: string; }): void {
      tokenStore.set(data.token);
      context.commit("SET_LOGGED", true);
    },
    setPermissions(context: { commit: (arg0: string, arg1: any) => void; }, data: any): void {
      context.commit("SET_PERMISSIONS", data);
    },
    setUser(context: { commit: (arg0: string, arg1: any) => void; }, data: any) {
      context.commit("SET_USER", data);
    },
    setProductId(context: { commit: (arg0: string, arg1: any) => void; }, data: any): void {
      context.commit("SET_PRODDUCT_ID", data);
    },
    setUserId(context: { commit: (arg0: string, arg1: any) => void; }, data: any) {
      context.commit("SET_USER_ID", data);
    },
  },
  getters: {
    getUser(state: { user: void; }): void {
      return state.user;
    },
    getProductId(state: { productId: void; }): void {
      return state.productId;
    },
    getUserId(state: { userId: void; }): void {
      return state.userId;
    },
    getPermissions(state: { permissions: any[]; }): Array<any> {
      return state.permissions;
    },
    isLogged(state: { logged: boolean; }): boolean {
      return state.logged;
    },
  },
};

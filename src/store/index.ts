import Vue from "vue";
import Vuex from "vuex";
import pathify from "./pathify";
import createPersistedState from "vuex-persistedstate";

import { auth } from "./modules/Auth";
import { general } from "./modules/General";
import config from "./modules/Config";

Vue.use(Vuex);

const persistedState = createPersistedState({
  paths: ["configs"],
});

export default new Vuex.Store({
  strict:  import.meta.env.NODE_ENV !== "production",

  plugins: [persistedState, pathify.plugin],
  modules: {
    auth,
    general,
    config,
  },
});

import { createStore } from "vuex";

export default createStore({
  state: {
    darkMode: false,
  },
  getters: {},
  mutations: {
    setDarkMode(state, value) {
      state.darkMode = value;
    },
  },
  actions: {},
  modules: {},
});

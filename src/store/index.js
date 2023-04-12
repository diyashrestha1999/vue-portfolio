import { createStore } from "vuex";

export default function createMyStore(vuetify) {
  return createStore({
    state: {
      darkMode: false,
    },
    getters: {},
    mutations: {
      toggleDarkMode(state) {
        state.darkMode = !state.darkMode;
        vuetify.theme.dark = state.darkMode;
        // this.$vuetify.theme.defaultTheme = state.darkMode ? "dark" : "light";
      },
    },
    actions: {},
    modules: {},
  });
}

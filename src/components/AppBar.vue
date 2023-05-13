<template>
  <v-row
    style="margin-top: 20px; z-index: 1000; height: 75px"
    class="d-flex align-center"
    :class="{
      'mt-0': $vuetify.display.mdAndDown,
      'px-4': $vuetify.display.mdAndDown,
      'bg-grey-lighten-3': $vuetify.display.mdAndDown && !$store.state.darkMode,
      'bg-black': $store.state.darkMode && $vuetify.display.mdAndDown,
    }"
  >
    <!--    -&#45;&#45; {{ theme.global.current.value.dark }}-->
    <div class="text-red-darken-1 logo"></div>
    <v-spacer></v-spacer>
    <v-hover v-slot="{ isHovering, props }">
      <v-btn
        flat
        icon
        size="small"
        class="mx-1"
        v-bind="props"
        :color="isHovering ? 'red-lighten-1' : 'white'"
        @click="toggleDarkMode()"
      >
        <v-icon
          v-if="!dark"
          size="x-large"
          class="ml-1 rotate"
          icon="mdi-moon-waning-crescent"
        ></v-icon>
        <v-icon
          v-else
          size="x-large"
          class="rotate"
          icon="mdi-white-balance-sunny"
        >
        </v-icon>
      </v-btn>
    </v-hover>
    <v-hover v-slot="{ isHovering, props }">
      <v-btn
        v-bind="props"
        v-if="$vuetify.display.mdAndDown"
        icon
        :color="isHovering ? 'red-lighten-1' : 'white'"
        size="small"
        class="mx-1"
        flat
        @click="showList = !showList"
      >
        <v-icon v-if="!showList" size="x-large" icon="mdi-menu"></v-icon>
        <v-icon v-else icon="mdi-close" size="x-large"></v-icon>
      </v-btn>
    </v-hover>
  </v-row>
  <v-expand-transition>
    <v-card
      v-show="showList"
      class="mx-auto bg-white mt-3 w-100 rounded-0"
      flat
    >
      <v-list>
        <v-list-item
          v-for="item in routes"
          :key="item.route"
          @click="
            $router.push({ name: item.route });
            showList = false;
          "
          :class="{
            'text-white': $store.state.darkMode && $route.name !== item.route,
            'text-grey-darken-2':
              !$store.state.darkMode && $route.name !== item.route,
            'text-red-lighten-1': $route.name === item.route,
          }"
          class="py-0 my-0"
          :prepend-icon="item.icon"
          :title="item.name"
        >
        </v-list-item>
      </v-list>
    </v-card>
  </v-expand-transition>
</template>

<script>
import { useTheme } from "vuetify";
import { useStore } from "vuex";
export default {
  name: "AppBar",
  setup() {
    const theme = useTheme();
    const store = useStore();
    const isDark = localStorage.getItem("isDarkMode") === "true";
    theme.global.name.value = isDark ? "dark" : "light";
    store.commit("setDarkMode", isDark);

    return {
      theme,
      toggleDarkMode: () => {
        theme.global.name.value = theme.global.current.value.dark
          ? "light"
          : "dark";
        store.commit("setDarkMode", theme.global.current.value.dark);
        localStorage.setItem("isDarkMode", theme.global.current.value.dark);
      },
    };
  },
  data() {
    return {
      dark: false,
      routes: [
        { name: "About", route: "about", icon: "mdi-account-outline" },
        { name: "Resume", route: "resume", icon: "mdi-file-document" },
        { name: "Work", route: "work", icon: "mdi-briefcase" },
        { name: "Contact", route: "contact", icon: "mdi-cellphone" },
      ],
      showList: false,
    };
  },
};
</script>

<style scoped>
.rotate {
  transform: rotate(330deg);
}
a {
  text-decoration: none;
}
</style>

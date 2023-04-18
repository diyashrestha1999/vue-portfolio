<template>
  <router-link :to="{ name: route }">
    <v-card
      flat
      class="tab text-center justify-center rounded-lg mx-2 pt-4"
      style="height: 5rem; width: 5rem"
      :class="{'active-link':$route.name === route,
      'bg-grey-darken-3':$store.state.darkMode }"
    >
      <v-icon size="20">{{ icon }}</v-icon>
      <p>{{ label }}</p>
    </v-card>
  </router-link>
</template>

<script>
export default {
  name: "VueTabs",
  props: {
    route: {
      type: String,
      Required: true,
    },

    icon: {
      type: String,
      Required: true,
    },
    label: {
      type: String,
      Required: true,
    },
  },
};
</script>

<style scoped>
.tab {
  background: rgb(243 246 246);
  color: grey;
  transition: 0.4s ease-in-out;
}
.tab:hover {
  /*background: -webkit-linear-gradient(0.25turn, #fa5252, #dd2476);*/
  /*background-color: #fa5252;*/
  color: white;

  background: linear-gradient(0.25turn, #fa5252, #dd2476);
}
.active-link {
  background: linear-gradient(0.25turn, #fa5252 20%, #dd2476);
  color: white;
}
a {
  text-decoration: none;
}
</style>
<script setup></script>

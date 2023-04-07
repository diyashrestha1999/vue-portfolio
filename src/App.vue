<template>
  <v-app class="body">
    <default-view></default-view>
  </v-app>
</template>

<script>
import DefaultView from "@/layout/DefaultView.vue";

export default {
  name: "App",
  components: { DefaultView },
};
</script>

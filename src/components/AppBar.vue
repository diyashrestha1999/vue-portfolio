<template>
  <v-row
    style="margin-top: 20px; z-index: 1; height: 75px"
    class="bg-red d-flex align-center"
    :class="{
      'mt-0': $vuetify.display.md,
      'px-4': $vuetify.display.md,
      'bg-grey-lighten-3': $vuetify.display.md,
    }"
  >
    <div class="text-red-darken-1 logo"></div>
    <v-spacer></v-spacer>
    <v-btn icon color="white" size="small">
      <v-icon
        size="x-large"
        class="ml-1 rotate"
        icon="mdi-moon-waning-crescent"
      ></v-icon>
    </v-btn>
  </v-row>
</template>

<script>
export default {
  name: "AppBar",
};
</script>

<style scoped></style>

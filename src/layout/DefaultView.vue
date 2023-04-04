<template>
  <v-app class="bg-red-darken-2 bg">
    <app-bar></app-bar>
    <v-spacer></v-spacer>

    <main-container></main-container>
  </v-app>
</template>

<script>
import AppBar from "@/components/AppBar.vue";
import MainContainer from "@/components/MainContainer.vue";

export default {
  name: "DefaultVew",
  components: { MainContainer, AppBar },
};
</script>

<style scoped>
.bg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: url("https://cdn.pixabay.com/photo/2016/03/26/13/09/organic-1280537_1280.jpg")
    no-repeat center center;
  background-size: cover;
  background-color: red;
}
</style>

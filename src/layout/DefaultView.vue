<template>
  <v-app class="bg">
    <v-main>
      <app-bar v-if="$vuetify.display.md"></app-bar>
      <v-container
        class="notice-side-view container justify-space-between"
        v-if="$vuetify.display.lg"
      >
        <app-bar></app-bar>
        <v-row style="margin-top: 220px">
          <profile-left-box></profile-left-box>
          <v-col cols="8">
            {{ this.$vuetify.display.md }}
            <tab-router v-if="$vuetify.display.lg"></tab-router>
            <div>
              <router-view></router-view>
            </div>
          </v-col>
        </v-row>
      </v-container>

      <template v-if="$vuetify.display.md">
        <router-view></router-view>
        <v-footer class="d-flex justify-center">
          © 2023 Diya Shrestha.
        </v-footer>
      </template>
    </v-main>
  </v-app>
</template>

<script>
// import AboutPage from "@/components/AboutPage.vue";
// import VueBtn from "@/components/common/VueBtn.vue";
// import VueTabs from "@/components/common/VueTabs.vue";
import ProfileLeftBox from "@/components/ProfileLeftBox.vue";
import TabRouter from "@/components/TabRouter.vue";
import AppBar from "@/components/AppBar.vue";
// import AppBar from "@/components/AppBar.vue";
// import MainContainer from "@/components/MainContainer.vue";

export default {
  name: "DefaultView",
  components: {
    AppBar,
    TabRouter,
    ProfileLeftBox,
    // VueTabs,
    // VueBtn,
    // AppBar,
    // AboutPage,
    // MainContainer,
  },
};
</script>

<style scoped>
.notice-side-view {
  height: 100vh;
  min-height: 200px;
  overflow: auto;
  /*position: sticky;*/
  /*position: -webkit-sticky;*/
  scrollbar-width: none;
}
.notice-side-view::-webkit-scrollbar {
  width: 0;
  background-color: #f5f5f5;
}
.notice-side-view::-webkit-scrollbar-thumb {
  border-radius: 4px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: lightgrey;
}
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

.container {
  max-width: 1280px;
}
.logo {
  /*background: url("@/assets/logo1.png") no-repeat center center;*/
  /*width: 100px;*/
  /*height: 50px;*/
}
</style>

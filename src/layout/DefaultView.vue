<template>
  <v-app class="bg" :class="{ darkBg: $store.state.darkMode }">
    <v-main>
      <app-bar v-if="$vuetify.display.mdAndDown"></app-bar>
      <v-container
        class="notice-side-view container justify-space-between hidden-md-and-down"
      >
        <app-bar></app-bar>
        <v-row style="margin-top: 220px">
          <profile-left-box></profile-left-box>
          <v-col cols="8">
            <tab-router v-if="$vuetify.display.lgAndUp"></tab-router>
            <div>
              <router-view></router-view>
            </div>
          </v-col>
        </v-row>
      </v-container>

      <template v-if="$vuetify.display.mdAndDown">
        <router-view></router-view>
        <footer-below></footer-below>
      </template>
    </v-main>
  </v-app>
</template>

<script>
import ProfileLeftBox from "@/components/ProfileLeftBox.vue";
import TabRouter from "@/components/TabRouter.vue";
import AppBar from "@/components/AppBar.vue";
import FooterBelow from "@/components/common/FooterBelow.vue";

export default {
  name: "DefaultView",
  components: {
    AppBar,
    TabRouter,
    ProfileLeftBox,
    FooterBelow,
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
  background: url("@/assets/pink.jpg") no-repeat center center;
  background-size: cover;
}
.darkBg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: url("@/assets/milad-dark.jpg") no-repeat center center;
  background-size: cover;
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

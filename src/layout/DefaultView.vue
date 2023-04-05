<template>
  <v-app class="bg-red-darken-2 bg">
    <v-main>
      <v-container class="notice-side-view">
        <v-row class="bg-blue-grey">
          <h1 class="text-red-darken-1">Greetings</h1>
          <v-spacer></v-spacer>
          <v-btn icon color="white" size="small">
            <v-icon
              size="x-large"
              class="ml-1 rotate"
              icon="mdi-moon-waning-crescent"
            ></v-icon>
          </v-btn>
        </v-row>
        <v-row class="bg-red-accent-3" style="margin-top: 220px">
          <v-col cols="4" class="bg-blue-grey-darken-1">
            <v-card style="border-radius: 20px">
              <v-list rounded="lg">
                <v-list-item v-for="n in 5" :key="n" link>
                  <v-list-item-title> List Item {{ n }} </v-list-item-title>
                </v-list-item>

                <v-divider class="my-2"></v-divider>

                <v-list-item link color="grey-lighten-4">
                  <v-list-item-title> Refresh </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
          <v-col cols="8" class="notice-side-view">
            <div class="d-flex flex-row-reverse mb-10 overflow-auto">
              <v-card class="d-flex flex px-8 py-7" style="border-radius: 16px">
                <v-col
                  v-for="item in 5"
                  :key="item"
                  class="bg-red-darken-2 text-center rounded-lg mx-2"
                >
                  <v-icon size="30">mdi-account-outline</v-icon>
                  <p class="">About</p>
                </v-col>

                <!--                <v-col-->
                <!--                  class="bg-red-darken-2 ma-4 pa-3 text-center rounded-lg"-->
                <!--                  @click="$router.push({ name: 'resume' })"-->
                <!--                >-->
                <!--                  <v-icon size="30">mdi-account-outline</v-icon>-->
                <!--                  <p>Second</p>-->
                <!--                </v-col>-->
              </v-card>
            </div>
            <div><about-page></about-page></div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AboutPage from "@/components/AboutPage.vue";
// import AppBar from "@/components/AppBar.vue";
// import MainContainer from "@/components/MainContainer.vue";

export default {
  name: "DefaultVew",
  components: {
    // AppBar,
    AboutPage,
    // MainContainer,
  },
};
</script>

<style scoped>
.notice-side-view {
  height: 100vh;
  min-height: 200px;
  overflow: auto;
  position: sticky;
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
.rotate {
  transform: rotate(330deg);
}
</style>

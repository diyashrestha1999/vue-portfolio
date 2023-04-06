<template>
  <v-app class="bg">
    <v-main>
      <v-container class="notice-side-view">
        <v-row style="margin-top: 20px">
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
        <v-row style="margin-top: 220px">
          <v-col cols="4">
            <div class="wrapper">
              <div class="grey darken-4 green-box"></div>

              <div class="dashed-box"></div>
              <div class="box">
                <v-col class="text-center">
                  <h2>Diya Shrestha</h2>
                  <v-card-subtitle>Front-end Developer</v-card-subtitle>
                  <div class="d-flex justify-center">
                    <v-btn class="bg-grey-lighten-3 ma-2" size="small" flat>
                      <v-icon size="large"> mdi-check-circle </v-icon>
                    </v-btn>
                    <v-btn class="bg-grey-lighten-3 ma-2" size="small" flat>
                      <v-icon class="px-0 mx-0" size="large">
                        mdi-check-circle
                      </v-icon>
                    </v-btn>
                    <v-btn class="bg-grey-lighten-3 ma-2" size="small" flat>
                      <v-icon class="px-0 mx-0" size="large">
                        mdi-check-circle
                      </v-icon>
                    </v-btn>
                    <v-btn class="bg-grey-lighten-3 ma-2" size="small" flat>
                      <v-icon class="px-0 mx-0" size="large">
                        mdi-check-circle
                      </v-icon>
                    </v-btn>
                  </div>
                </v-col>
              </div>
            </div>
          </v-col>
          <v-col cols="8" class="notice-side-view">
            <div class="d-flex flex-row-reverse mb-10">
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

.wrapper {
  position: relative;
  /*background: red;*/
  border-radius: 20px;
}

.dashed-box {
  position: relative;
  z-index: 1;
  height: 7em;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background: white;
}
.box {
  position: relative;
  z-index: 1;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background: white;
}
.green-box {
  background: url("@/assets/avatar.jpg") no-repeat center center;
  background-size: cover;

  position: absolute;
  z-index: 2;
  width: 240px;
  left: 18%;
  top: -140px;
  border-radius: 20px;
  height: 240px;
}
</style>

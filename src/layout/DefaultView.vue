<template>
  <v-app class="bg">
    <v-main>
      <v-container class="notice-side-view container justify-space-between">
        <v-row style="margin-top: 20px">
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
        <v-row style="margin-top: 220px">
          <v-col cols="4">
            <div class="wrapper">
              <div class="green-box elevation-10"></div>
              <div class="dashed-box"></div>
              <div class="box">
                <v-col class="text-center">
                  <h2 class="my-2">Diya Shrestha</h2>
                  <span class="w-50 rounded-lg px-4 py-1 my-2 text-grey">
                    Front-end Developer
                  </span>
                  <div class="d-flex justify-center my-2">
                    <vue-btn
                      icon="mdi-instagram"
                      color="pink-lighten-2"
                    ></vue-btn>
                    <vue-btn
                      icon="mdi-linkedin"
                      color="blue-darken-3"
                    ></vue-btn>
                    <vue-btn
                      icon="mdi-facebook"
                      color="blue-darken-2"
                    ></vue-btn>
                    <vue-btn icon="mdi-github" color="amber-accent-4"></vue-btn>
                  </div>
                </v-col>
              </div>
            </div>
          </v-col>
          <v-col cols="8">
            <div class="d-flex flex-row-reverse mb-10">
              <v-card class="d-flex flex px-8 py-7" style="border-radius: 16px">
                <vue-tabs
                  icon="mdi-account-outline"
                  label="About"
                  route="about"
                ></vue-tabs>
                <vue-tabs
                  icon="mdi-file-document-outline"
                  label="Resume"
                  route="resume"
                ></vue-tabs>
                <vue-tabs
                  icon="mdi-briefcase-outline"
                  label="Work"
                  route="work"
                ></vue-tabs>
                <vue-tabs
                  icon="mdi-cellphone-sound"
                  label="Contact"
                  route="contact"
                ></vue-tabs>
              </v-card>
            </div>
            <div>
              <router-view></router-view>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
// import AboutPage from "@/components/AboutPage.vue";
import VueBtn from "@/components/common/VueBtn.vue";
import VueTabs from "@/components/common/VueTabs.vue";
// import AppBar from "@/components/AppBar.vue";
// import MainContainer from "@/components/MainContainer.vue";

export default {
  name: "DefaultView",
  components: {
    VueTabs,
    VueBtn,
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
.rotate {
  transform: rotate(330deg);
}

.wrapper {
  position: sticky;
  top: 11rem;
  /*position: relative;*/
  /*background: red;*/
  border-radius: 20px;
}

.dashed-box {
  position: relative;
  z-index: 1;
  height: 6.5em;
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
.container {
  max-width: 1280px;
}
.logo {
  /*background: url("@/assets/logo1.png") no-repeat center center;*/
  /*width: 100px;*/
  /*height: 50px;*/
}
.tab {
  --tw-bg-opacity: 1;
  background-color: rgb(243 246 246 / var(--tw-bg-opacity));
}
</style>

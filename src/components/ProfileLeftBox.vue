<template>
  <v-col cols="4">
    <div class="wrapper w-100">
      <div class="profilePic-box"></div>
      <v-card class="dashed-box" flat></v-card>
      <v-card class="box" flat>
        <v-col class="text-center">
          <h2 class="my-2">Diya Shrestha</h2>
          <span class="w-50 rounded-lg px-4 py-1 my-2 text-grey">
            Front-end Developer
          </span>
          <div class="d-flex justify-center my-2">
            <vue-btn
              icon="mdi-instagram"
              color="pink-lighten-2"
              url="https://www.instagram.com/diya966_/"
            ></vue-btn>
            <vue-btn
              icon="mdi-linkedin"
              color="blue-darken-3"
              url="https://www.linkedin.com/in/diya-shrestha-04a3b91a3/"
            ></vue-btn>
            <vue-btn
              icon="mdi-facebook"
              color="blue-darken-2"
              url="https://www.facebook.com/diya.stha.1023/"
            ></vue-btn>
            <vue-btn
              icon="mdi-github"
              color="amber-accent-4"
              url="https://github.com/diyashrestha1999"
            ></vue-btn>
          </div>
        </v-col>
        <side-nav-list></side-nav-list>
      </v-card>
    </div>
  </v-col>
</template>

<script>
import VueBtn from "@/components/common/VueBtn.vue";
import SideNavList from "@/components/common/SideNavList.vue";

export default {
  name: "ProfileLeftBox",
  components: { SideNavList, VueBtn },
};
</script>

<style scoped>
.wrapper {
  position: sticky;
  top: 11rem;
  /*position: relative;*/
  /*background: white;*/
  border-radius: 20px;
}
.profilePic-box {
  filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03))
    drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));
  background: url("@/assets/avatar.jpg") no-repeat center center;
  background-size: cover;
  position: absolute;
  z-index: 2;
  width: 240px;
  left: 20%;
  top: -140px;
  border-radius: 20px;
  height: 240px;
}
.dashed-box {
  position: relative;
  z-index: 1;
  height: 6.5em;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
}
.box {
  position: relative;
  z-index: 1;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  /*background: red;*/
}
</style>

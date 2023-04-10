<template>
  <v-col cols="4">
    <div class="wrapper w-100">
      <div class="img-box elevation-10"></div>
      <div class="dashed-box"></div>
      <div class="box">
        <v-col class="text-center">
          <h2 class="my-2">Diya Shrestha</h2>
          <span class="w-50 rounded-lg px-4 py-1 my-2 text-grey">
            Front-end Developer
          </span>
          <div class="d-flex justify-center my-2">
            <vue-btn icon="mdi-instagram" color="pink-lighten-2"></vue-btn>
            <vue-btn icon="mdi-linkedin" color="blue-darken-3"></vue-btn>
            <vue-btn icon="mdi-facebook" color="blue-darken-2"></vue-btn>
            <vue-btn icon="mdi-github" color="amber-accent-4"></vue-btn>
          </div>
        </v-col>
      </div>
    </div>
  </v-col>
</template>

<script>
import VueBtn from "@/components/common/VueBtn.vue";

export default {
  name: "ProfileLeftBox",
  components: { VueBtn },
};
</script>

<style scoped>
.wrapper {
  position: sticky;
  top: 11rem;
  /*position: relative;*/
  /*background: red;*/
  border-radius: 20px;
}
.img-box {
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
  background: white;
}
.box {
  position: relative;
  z-index: 1;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background: white;
}
</style>

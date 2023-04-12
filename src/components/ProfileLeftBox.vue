<template>
  <v-col cols="4">
    <div class="wrapper w-100">
      <div class="green-box elevation-10"></div>
      <v-card class="dashed-box" flat></v-card>
      <v-card class="box" flat>
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
        <v-col class="py-0 my-0">
          <v-list class="mx-4 py-0">
            <template v-for="n in 4" :key="n">
              <v-list-item variant="tonal">
                <template v-slot:prepend>
                  <v-btn size="small" height="50px">
                    <v-icon size="x-large">mdi-format-align-left</v-icon>
                  </v-btn>
                </template>
                <v-list-item-title
                  v-text="'heheh'"
                  class="ml-3"
                ></v-list-item-title>
              </v-list-item>
              <v-divider></v-divider>
            </template>
          </v-list>
        </v-col>
        <v-col class="text-center">
          <v-btn color="red" class="my-4 rounded-xl">View My Cv</v-btn>
        </v-col>
      </v-card>
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
  /*background: white;*/
  border-radius: 20px;
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

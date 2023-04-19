<template>
  <v-card
    class="pa-4"
    style="border-radius: 1em"
    flat
    :class="{
      'rounded-0': $vuetify.display.mdAndDown,
    }"
  >
    <v-card-title><h2 class="after-effect">Resume</h2></v-card-title>
    <v-row>
      <v-col cols="6" class="pb-0 pl-2">
        <v-card-title class="d-flex align-center py-0">
          <v-icon color="red-lighten-1">mdi-school</v-icon>
          <v-card-title>Education</v-card-title>
        </v-card-title>
      </v-col>
      <v-col cols="6" class="pb-0 pl-0">
        <v-card-title class="d-flex align-center py-0">
          <v-icon color="red-lighten-1">mdi-briefcase</v-icon>
          <v-card-title>Experience</v-card-title>
        </v-card-title>
      </v-col>
    </v-row>
    <div class="d-flex">
      <common-card
        title="Ph.D in Lorem ipsum"
        text="ABC University, Los Angeles, CA"
        subtitle=" 2021-2023 "
        bgColor="bg-pink-lighten-5"
      ></common-card>
      <common-card
        title=" Computer Science "
        text=" Imperialize Technical Institute "
        subtitle=" 2017-2021"
        bg-color="bg-blue-lighten-5"
      ></common-card>
    </div>
    <div class="d-flex">
      <common-card
        title="Ph.D in Lorem ipsum"
        text="ABC University, Los Angeles, CA"
        subtitle=" 2021-2023 "
        bg-color="bg-red-lighten-5"
      ></common-card>
      <common-card
        title=" Cr. Web Developer "
        text="ib-themes ltd."
        subtitle="  2015-2017 "
        bg-color="bg-purple-lighten-5"
      ></common-card>
    </div>
    <div class="d-flex">
      <common-card
        title="Ph.D in Lorem ipsum"
        text="ABC University, Los Angeles, CA"
        subtitle=" 2021-2023 "
        bg-color="bg-red-lighten-5"
      ></common-card>
      <common-card
        title="Ph.D in Lorem ipsum"
        text="ABC University, Los Angeles, CA"
        subtitle=" 2021-2023 "
        bg-color="bg-purple-lighten-5"
      ></common-card>
    </div>
    <div class="d-flex">
      <common-card
        title="Ph.D in Lorem ipsum"
        text="ABC University, Los Angeles, CA"
        subtitle=" 2021-2023 "
        bg-color="bg-red-lighten-5"
      ></common-card>
      <common-card
        title="Ph.D in Lorem ipsum"
        text="ABC University, Los Angeles, CA"
        subtitle=" 2021-2023 "
        bg-color="bg-purple-lighten-5"
      ></common-card>
    </div>
    <footer-below></footer-below>
  </v-card>
</template>

<style scoped>
.after-effect {
  font-family: Roboto Slab, serif;
  font-size: 2.5rem;
  font-weight: 700;
}
</style>

<script>
import FooterBelow from "@/components/common/FooterBelow.vue";
import CommonCard from "@/components/common/CommonCard.vue";

export default {
  components: { FooterBelow, CommonCard },
};
</script>

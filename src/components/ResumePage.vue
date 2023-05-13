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
      <v-col sm="6" cols="12">
        <v-card-title class="d-flex align-center py-0">
          <v-icon color="red-lighten-1">mdi-school</v-icon>
          <v-card-title>Education</v-card-title>
        </v-card-title>
        <v-col cols="12" v-for="(item, index) in education" :key="index">
          <common-card
            :title="item.title"
            :text="item.text"
            :subtitle="item.subtitle"
            :bgColor="item.bgColor"
          ></common-card>
        </v-col>
      </v-col>
      <v-col sm="6" cols="12">
        <v-card-title class="d-flex align-center py-0">
          <v-icon color="red-lighten-1">mdi-briefcase</v-icon>
          <v-card-title>Experience</v-card-title>
        </v-card-title>
        <v-col cols="12" v-for="(item, index) in experience" :key="index">
          <common-card
            :title="item.title"
            :text="item.text"
            :subtitle="item.subtitle"
            :bg-color="item.bgColor"
          ></common-card>
        </v-col>
      </v-col>
    </v-row>

    <footer-below v-if="$vuetify.display.lgAndUp"></footer-below>
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
  data() {
    return {
      education: [
        {
          title: "Ph.D in Lorem ipsum-education",
          text: "ABC University, Los Angeles, CA",
          subtitle: " 2021-2023 ",
          bgColor: "bg-red-lighten-5",
        },
        {
          title: "Ph.D in Lorem ipsum-education",
          text: "ABC University, Los Angeles, CA",
          subtitle: " 2021-2023 ",
          bgColor: "bg-purple-lighten-5",
        },
        {
          title: "Ph.D in Lorem ipsum-education",
          text: "ABC University, Los Angeles, CA",
          subtitle: " 2021-2023 ",
          bgColor: "bg-pink-lighten-5",
        },
      ],
      experience: [
        {
          title: "Ph.D in Lorem ipsum",
          text: "ABC University, Los Angeles, CA",
          subtitle: " 2021-2023 ",
          bgColor: "bg-red-lighten-5",
        },
        {
          title: "Ph.D in Lorem ipsum",
          text: "ABC University, Los Angeles, CA",
          subtitle: " 2021-2023 ",
          bgColor: "bg-purple-lighten-5",
        },
        {
          title: "Ph.D in Lorem ipsum",
          text: "ABC University, Los Angeles, CA",
          subtitle: " 2021-2023 ",
          bgColor: "bg-pink-lighten-5",
        },
      ],
    };
  },
};
</script>

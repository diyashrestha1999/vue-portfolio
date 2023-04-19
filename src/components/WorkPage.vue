<template>
  <v-card
    flat
    :class="{
      'rounded-0': $vuetify.display.mdAndDown,
    }"
    class="pa-4"
    style="border-radius: 1em"
  >
    <v-card-title>
      <h2 class="after-effect">Works</h2>
    </v-card-title>
    <v-spacer></v-spacer>
    <v-card-text>
      <v-row>
        <v-col cols="6">
          <work-card
            cols="12"
            title="Ph.D in Lorem ipsum"
            subtitle=" 2021-2023 "
            bgColor="bg-pink-lighten-5"
            img-path="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
          ></work-card>
          <work-card
            cols="12"
            title="Ph.D in Lorem ipsum"
            subtitle=" 2021-2023 "
            bgColor="bg-pink-lighten-5"
            img-path="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
          ></work-card>
        </v-col>
        <v-col cols="6" c>
          <work-card
            height="500px"
            cols="12"
            title="Ph.D in Lorem ipsum"
            subtitle=" 2021-2023 "
            bgColor="bg-pink-lighten-5"
            img-path="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
          ></work-card>
        </v-col>
      </v-row>
    </v-card-text>
    <footer-below></footer-below>
  </v-card>
</template>

<script>
import FooterBelow from "@/components/common/FooterBelow.vue";
import WorkCard from "@/components/common/WorkCard.vue";
export default {
  name: "WorkPage",
  components: { WorkCard, FooterBelow },
};
</script>

<style scoped>
.after-effect {
  font-family: Roboto Slab, serif;
  font-size: 2.5rem;
  font-weight: 700;
}
</style>

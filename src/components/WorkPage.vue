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
            height="160px"
            cols="12"
            title="Ph.D in Lorem ipsum"
            subtitle=" 2021-2023 "
            bgColor="bg-red-lighten-5"
            img-path="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
            @click="openDialog = true"
          ></work-card>
          <work-card
            height="160px"
            cols="12"
            title="Ph.D in Lorem ipsum"
            subtitle=" 2021-2023 "
            bgColor="bg-indigo-lighten-5"
            img-path="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
          ></work-card>
          <work-card
            height="160px"
            cols="12"
            title="Ph.D in Lorem ipsum"
            subtitle=" 2021-2023 "
            bgColor="bg-blue-lighten-5"
            img-path="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
          ></work-card>
          <work-card
            height="165px"
            cols="12"
            title="Ph.D in Lorem ipsum"
            subtitle=" 2021-2023 "
            bgColor="bg-teal-lighten-5"
            img-path="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
          ></work-card>
        </v-col>
        <v-col cols="6">
          <work-card
            height="265px"
            cols="12"
            title="Ph.D in Lorem ipsum"
            subtitle=" 2021-2023 "
            bgColor="bg-purple-lighten-5"
            img-path="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
          ></work-card>
          <work-card
            height="265px"
            cols="12"
            title="Ph.D in Lorem ipsum"
            subtitle=" 2021-2023 "
            bgColor="bg-orange-lighten-5"
            img-path="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
          ></work-card>
          <work-card
            height="265px"
            cols="12"
            title="Ph.D in Lorem ipsum"
            subtitle=" 2021-2023 "
            bgColor="bg-purple-lighten-5"
            img-path="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
          ></work-card>
        </v-col>
      </v-row>
    </v-card-text>
    <v-dialog v-model="openDialog" width="500px">
      <v-card>
        <v-card-title class="d-flex">
          title
          <v-spacer> </v-spacer>
          <v-icon @click="openDialog = false">mdi-close</v-icon>
        </v-card-title>
      </v-card>
    </v-dialog>
    <footer-below v-if="$vuetify.display.lgAndUp"></footer-below>
  </v-card>
</template>

<script>
import FooterBelow from "@/components/common/FooterBelow.vue";
import WorkCard from "@/components/common/WorkCard.vue";
export default {
  name: "WorkPage",
  components: { WorkCard, FooterBelow },
  data() {
    return {
      openDialog: false,
    };
  },
};
</script>

<style scoped>
.after-effect {
  font-family: Roboto Slab, serif;
  font-size: 2.5rem;
  font-weight: 700;
}
</style>

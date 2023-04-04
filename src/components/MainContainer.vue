<template>
  <v-container>
    <v-row>
      <v-col cols="4 mr-6">
        <v-card class="rounded-xl">
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

      <v-col>
        <div class="d-flex flex-row-reverse mb-10 overflow-auto">
          <v-card class="d-flex flex rounded-xl pa-6">
            <v-col class="bg-red-darken-2 ma-4 pa-4 text-center rounded-lg">
              <v-icon size="30">mdi-account-outline</v-icon>
              <p>About</p>
            </v-col>

            <v-col
              class="bg-red-darken-2 ma-4 pa-4 text-center rounded-lg"
              @click="$router.push({ name: 'resume' })"
            >
              <v-icon size="30">mdi-account-outline</v-icon>
              <p>Second</p>
            </v-col>
            <v-col class="bg-red-darken-2 ma-4 pa-4 text-center rounded-lg">
              <v-icon size="30">mdi-account-outline</v-icon>
              <p>About</p>
            </v-col>
            <v-col class="bg-red-darken-2 ma-4 pa-4 text-center rounded-lg">
              <v-icon size="30">mdi-account-outline</v-icon>
              <p>About</p>
            </v-col>
            <v-col class="bg-red-darken-2 ma-4 pa-4 text-center rounded-lg">
              <v-icon size="30">mdi-account-outline</v-icon>
              <p>About</p>
            </v-col>
          </v-card>
        </div>
        <about-page></about-page>
        <component :is="AboutPage"></component>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AboutPage from "@/components/AboutPage.vue";
import ResumePage from "@/components/ResumePage.vue";
import router from "@/router";

export default {
  name: "MainContainer",
  methods: {
    router() {
      return router;
    },
  },
  components: { AboutPage, ResumePage },

  data() {
    return {
      mapper: [{ name: AboutPage }, { name: AboutPage }],
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

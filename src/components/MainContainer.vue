<template>
    <v-row>
      <v-col>
        <about-page></about-page>
      </v-col>
    </v-row>
</template>

<script>
import AboutPage from "@/components/AboutPage.vue";
import router from "@/router";

export default {
  name: "MainContainer",
  methods: {
    router() {
      return router;
    },
  },
  components: [
      AboutPage,
      // ResumePage
  ] ,

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

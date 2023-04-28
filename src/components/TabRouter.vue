<template>
  <div class="d-flex flex-row-reverse mb-10">
    <v-card class="d-flex flex px-8 py-7" style="border-radius: 16px" flat>
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
</template>

<script>
import VueTabs from "@/components/common/VueTabs.vue";

export default {
  name: "TabRouter",
  components: { VueTabs },
};
</script>

<style scoped></style>

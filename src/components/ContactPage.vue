<template>
  <v-card
    flat
    :class="{
      'rounded-0': $vuetify.display.mdAndDown,
    }"
    class="pa-4"
    style="border-radius: 1em"
  >
    <footer-below></footer-below>
  </v-card>
</template>

<script>
import FooterBelow from "@/components/common/FooterBelow.vue";

export default {
  name: "ContactPage",
  components: { FooterBelow },
};
</script>

<style scoped></style>

<template>
  <v-card
    flat
    :class="{
      'rounded-0': $vuetify.display.mdAndDown,
    }"
    class="pa-10"
    style="border-radius: 1em"
  >
    <v-card-title>
      <h2 class="after-effect py-4">Contact</h2>
    </v-card-title>
    <v-card-text>
      <div
        :style="
          $store.state.darkMode
            ? 'border: 2px  solid black'
            : 'background-color:#FAFAFA '
        "
        style="border-radius: 0.8em"
        class="pa-16"
      >
        <v-card-subtitle class="font-weight-light text-h6 py-1">
          I'm always open to discussing product
        </v-card-subtitle>
        <v-card-title class="py-0" style="font-weight: bold">
          design work or partnerships.
        </v-card-title>
        <v-card-subtitle class="py-0 text-black">
          <p>Please Fill Required Fields</p>
        </v-card-subtitle>
        <v-card-text>
          <v-text-field
            variant="underlined"
            v-model="password"
            label="Name*"
            type="Text"
          ></v-text-field>
          <v-text-field
            variant="underlined"
            v-model="password"
            label="Email*"
            type="Text"
          ></v-text-field>
          <v-text-field
            variant="underlined"
            v-model="password"
            label="Message*"
            type="Text"
          ></v-text-field>
          <v-btn variant="outlined"> Submit</v-btn>
        </v-card-text>
      </div>
    </v-card-text>
    <footer-below v-if="$vuetify.display.lgAndUp"></footer-below>
  </v-card>
</template>

<script>
import FooterBelow from "@/components/common/FooterBelow.vue";

export default {
  name: "ContactPage",
  components: { FooterBelow },
  data() {
    return {
      password: "",
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

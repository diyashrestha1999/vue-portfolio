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
        <v-form ref="form">
          <v-card-text>
            <v-text-field
              variant="underlined"
              v-model="name"
              label="Name*"
              :rules="[(v) => !!v || 'Item is required']"
              type="Text"
            ></v-text-field>
            <v-text-field
              variant="underlined"
              v-model="email"
              label="Your email*"
              type="email"
              :rules="[(v) => !!v || 'Item is required'].concat(emailRules)"
            ></v-text-field>
            <v-text-field
              variant="underlined"
              v-model="password"
              label="Message*"
              type="Text"
              :rules="[(v) => !!v || 'Item is required']"
            ></v-text-field>
            <v-btn variant="outlined" @click="submit()"> Submit</v-btn>
          </v-card-text>
        </v-form>
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
      email: "",
      name: "",
      emailRules: [(v) => /.+@.+/.test(v) || "E-mail must be valid"],
    };
  },
  methods: {
    async submit() {
      await this.$refs.form.validate();
    },
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

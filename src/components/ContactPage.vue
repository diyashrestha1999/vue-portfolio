<template>
  <v-card
    flat
    :class="{
      'rounded-0': $vuetify.display.mdAndDown,
      'pa-10': $vuetify.display.smAndUp,
    }"
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
        :class="{ 'pa-16': $vuetify.display.smAndUp }"
      >
        <v-card-text
          class="text-blue-grey-darken-2 py-0"
          :class="{
            ' pt-4': $vuetify.display.xs,
            'text-grey-darken-2': $store.state.darkMode,
          }"
        >
          <h2 class="font-weight-light">
            I'm always open to discussing product
          </h2>
        </v-card-text>
        <v-card-text style="font-weight: bold">
          <h2>design work or partnerships.</h2>
        </v-card-text>
        <v-card-text class="py-0 text-grey-darken-1">
          <span>Please Fill Required Fields</span>
        </v-card-text>
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
              v-model="message"
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
import vuetify from "@/plugins/vuetify";

export default {
  name: "ContactPage",
  computed: {
    vuetify() {
      return vuetify;
    },
  },
  components: { FooterBelow },
  data() {
    return {
      message: "",
      email: "",
      name: "",
      emailRules: [(v) => /.+@.+/.test(v) || "E-mail must be valid"],
    };
  },
  methods: {
    async submit() {
      await this.$refs.form.validate();
      window.location.href = `mailto:${"diyashrestha2000@gmail.com"}?subject=${encodeURIComponent(
        "try"
      )}&body=${encodeURIComponent(this.message)}`;
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

<template>
  <div style="border-radius: 1em; z-index: -1">
    <v-card
      flat
      :class="{
        'rounded-0': $vuetify.display.mdAndDown,
      }"
      class="pa-4"
      style="border-radius: 1em"
    >
      <v-card-title>
        <h2 class="after-effect">About Me</h2>
      </v-card-title>
      <v-spacer></v-spacer>
      <div v-if="$vuetify.display.lg">
        <v-card-text
          :class="[
            $store.state.darkMode
              ? 'text-grey-lighten-1'
              : 'text-blue-grey-darken-2',
          ]"
        >
          I'm Creative Front-end developer from kathmandu, working in web
          development. I enjoy turning complex problems into simple, beautiful
          and intuitive designs. My aim is to bring across your message and
          identity in the most creative way. I created web design for many
          famous brand companies.
        </v-card-text>
        <v-card-text
          :class="[
            $store.state.darkMode
              ? 'text-grey-lighten-1'
              : 'text-blue-grey-darken-2',
          ]"
        >
          My aim is to bring across your message and identity in the most
          creative way. I created web design for many famous brand companies.
        </v-card-text>
      </div>
      <div v-else>
        <v-col class="d-flex justify-center">
          <div class="img"></div>
        </v-col>
        <v-col class="text-center">
          <h2 class="my-2">Diya Shrestha</h2>
          <span class="w-50 rounded-lg px-4 py-1 my-2 text-grey">
            Front-end Developer
          </span>
          <div class="d-flex justify-center my-2">
            <vue-btn icon="mdi-instagram" color="pink-lighten-2"></vue-btn>
            <vue-btn icon="mdi-linkedin" color="blue-darken-3"></vue-btn>
            <vue-btn icon="mdi-facebook" color="blue-darken-2"></vue-btn>
            <vue-btn icon="mdi-github" color="amber-accent-4"></vue-btn>
          </div>
        </v-col>
        <side-nav-list></side-nav-list>
      </div>

      <v-spacer></v-spacer>
      <v-card-title>
        <h2 class="after-effect">What I do!</h2>
      </v-card-title>
      <v-spacer></v-spacer>
      <v-card-text>
        <v-row>
          <common-card
            icon="mdi-xml"
            icon-color="pink-lighten-2"
            title="Ui/Ux Design"
            text=" Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam euismod volutpat."
            bg-color="bg-pink-lighten-5"
          ></common-card>
          <common-card
            icon-color="blue-lighten-1"
            icon="mdi-vuejs"
            title="Vue.js"
            text=" Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam euismod volutpat."
            bg-color="bg-blue-lighten-4"
          ></common-card>
          <common-card
            icon-color="cyan-lighten-2"
            icon="mdi-code-json"
            title="Java Script"
            text=" Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam euismod volutpat."
            bg-color="bg-cyan-lighten-4"
          ></common-card>
          <common-card
            icon="mdi-pencil-ruler"
            icon-color="purple-lighten-2"
            title="Ui/Ux Design"
            text=" Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam euismod volutpat."
            bg-color="bg-purple-lighten-5"
          ></common-card>
          <common-card
            icon="mdi-xml"
            title="Ui/Ux Design"
            text=" Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam euismod volutpat."
            bg-color="bg-red-lighten-5"
          ></common-card>
          <common-card
            icon="mdi-xml"
            title="Ui/Ux Design"
            text=" Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam euismod volutpat."
            bg-color="bg-pink-lighten-5"
          ></common-card>
        </v-row>
      </v-card-text>
      <v-spacer></v-spacer>
      <footer-below v-if="$vuetify.display.lgAndUp"></footer-below>
    </v-card>
  </div>
</template>

<script>
import VueBtn from "@/components/common/VueBtn.vue";
import SideNavList from "@/components/common/SideNavList.vue";
import FooterBelow from "@/components/common/FooterBelow.vue";
import CommonCard from "@/components/common/CommonCard.vue";

export default {
  name: "AboutPage",
  components: { FooterBelow, CommonCard, SideNavList, VueBtn },
};
</script>

<style scoped>
.after-effect {
  font-family: Roboto Slab, serif;
  font-size: 2.5rem;
  font-weight: 700;
}
.img {
  background: url("@/assets/avatar.jpg") no-repeat center center;
  background-size: cover;
  width: 240px;
  height: 240px;
  border-radius: 20px;
}
</style>

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
      <div v-if="$vuetify.display.lgAndUp">
        <v-card-text
          :class="[
            $store.state.darkMode
              ? 'text-grey-lighten-1'
              : 'text-blue-grey-darken-2',
          ]"
        >
          I'm Creative Front-end developer from kathmandu, working in web
          development. My expertise is in Vue.js framework. I enjoy turning
          complex problems into simple, beautiful and intuitive designs. My aim
          is to bring across your message and identity in the most creative way.
          As a Vue.js developer, I specialize in creating dynamic and
          interactive web applications. With a passion for front-end development
          and a keen eye for detail, I strive to deliver intuitive and seamless
          user experiences.
        </v-card-text>
        <v-card-text
          :class="[
            $store.state.darkMode
              ? 'text-grey-lighten-1'
              : 'text-blue-grey-darken-2',
          ]"
        >
          My aim is to bring across your message and identity in the most
          creative way. I created web design for many companies.
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
        <h2 class="after-effect">My Skills</h2>
      </v-card-title>
      <v-spacer></v-spacer>
      <v-card-text>
        <v-row>
          <v-col
            cols="12"
            md="6"
            v-for="(item, index) in cardDetail"
            :key="index"
          >
            <common-card
              :icon="item.icon"
              :icon-color="item.iconColor"
              :title="item.title"
              :text="item.text"
              :bg-color="item.bgColor"
              @expand="skillDetail(item)"
              see-more
            ></common-card>
          </v-col>
        </v-row>
      </v-card-text>
      <v-spacer></v-spacer>
      <footer-below v-if="$vuetify.display.lgAndUp"></footer-below>
    </v-card>
    <v-overlay v-model="expand" class="align-center justify-center">
      <v-expand-x-transition>
        <v-card
          flat
          v-show="expand"
          :class="$store.state.darkMode ? '' : skill.bgColor"
          max-width="500px"
          :height="$vuetify.display.mdAndUp ? '200px' : ''"
          class="pa-4"
          style="border-radius: 0.8em"
          :style="$store.state.darkMode ? 'border: 2px  solid black' : ''"
        >
          <v-row class="justify-space-between align-center" no-gutters>
            <span class="d-flex align-center">
              <v-icon :color="skill.iconColor">{{ skill.icon }}</v-icon>
              <span>
                <v-card-title :class="`text-${skill.iconColor}`">
                  {{ skill.title }}
                </v-card-title>
              </span>
            </span>

            <v-card-actions>
              <v-btn
                density="compact"
                icon="mdi-close"
                color="pink"
                @click="expand = false"
              ></v-btn>
            </v-card-actions>
          </v-row>
          <v-card-text class="py-0 text-grey-darken-1 ml-6">
            {{ skill.text }}
          </v-card-text>
        </v-card>
      </v-expand-x-transition>
    </v-overlay>
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
  data() {
    return {
      expand: false,
      cardDetail: [
        {
          icon: "mdi-vuejs",
          iconColor: "green-lighten-2",
          title: "Vue.js",
          text:
            " Proficiency in Vue.js and its core concepts (components, directives, state management, etc.).\n" +
            "Experience with Vue CLI. Understanding of Vue Router for handling client-side routing. " +
            "Knowledge of Vuex for managing application state.\n" +
            "Understanding of RESTful APIs and AXIOS for data retrieval and manipulation.",
          bgColor: "bg-green-lighten-5",
        },

        {
          icon: "mdi-vuetify",
          iconColor: "blue-lighten-2",
          title: "Vuetify",
          text:
            " Proficiency in Vuetify.js and its components, directives, and theming capabilities.\n" +
            "Understanding of Vuetify's grid system and responsive design principles.\n" +
            "Knowledge of customizing and extending Vuetify components to meet specific project requirements.",
          bgColor: "bg-blue-lighten-5",
        },
        {
          icon: "mdi-language-javascript",
          iconColor: "yellow-lighten-2",
          title: "Javascript",
          text: " Lorem ipsum dolor sit amet, consectetuer adipiscing elit,sed diam euismod volutpat.",
          bgColor: "bg-yellow-lighten-5",
        },
        {
          icon: "mdi-tailwind",
          iconColor: "teal-lighten-2",
          title: "Tailwind",
          text: " Lorem ipsum dolor sit amet, consectetuer adipiscing elit,sed diam euismod volutpat.",
          bgColor: "bg-teal-lighten-5",
        },
        {
          icon: "mdi-nodejs",
          iconColor: "light-green-lighten-2",
          title: "Node.js",
          text: " Lorem ipsum dolor sit amet, consectetuer adipiscing elit,sed diam euismod volutpat.",
          bgColor: "bg-light-green-lighten-5",
        },
      ],
      skill: {},
    };
  },
  methods: {
    skillDetail(item) {
      this.expand = true;
      this.skill = item;
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
.img {
  background: url("@/assets/avatar.jpg") no-repeat center center;
  background-size: cover;
  width: 240px;
  height: 240px;
  border-radius: 20px;
}
</style>

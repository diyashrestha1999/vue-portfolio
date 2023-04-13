<template>
  <v-card
    class="pa-8"
    style="border-radius: 1em; z-index: -1"
    :class="{ 'rounded-0': $vuetify.display.md }"
  >
    <v-card-title>
      <h2 class="after-effect after:left-52">About Me</h2>
    </v-card-title>
    <v-spacer></v-spacer>
    <div v-if="$vuetify.display.lg">
      <v-card-text class="text-blue-grey-darken-2">
        I'm Creative Front-end developer from kathmandu, Australia, working in
        web development and print media. I enjoy turning complex problems into
        simple, beautiful and intuitive designs. My aim is to bring across your
        message and identity in the most creative way. I created web design for
        many famous brand companies.
      </v-card-text>
      <v-card-text class="text-blue-grey-darken-2">
        My aim is to bring across your message and identity in the most creative
        way. I created web design for many famous brand companies.
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
        <v-col cols="6">
          <v-card class="bg-purple-lighten-5 pa-4" flat>
            <v-row no-gutters>
              <v-col cols="2" class="text-right">
                <v-icon class="mt-3">mdi-xml</v-icon>
              </v-col>
              <v-col cols="10">
                <v-card-title>Ui/Ux Design </v-card-title>
                <v-card-text>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam euismod volutpat.
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card class="bg-amber-lighten-5 pa-4" flat>
            <v-row no-gutters>
              <v-col cols="2" class="text-right">
                <v-icon class="mt-3">mdi-xml</v-icon>
              </v-col>
              <v-col cols="10">
                <v-card-title>Ui/Ux Design </v-card-title>
                <v-card-text>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam euismod volutpat.
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card class="bg-purple-lighten-5 pa-4" flat>
            <v-row no-gutters>
              <v-col cols="2" class="text-right">
                <v-icon class="mt-3">mdi-xml</v-icon>
              </v-col>
              <v-col cols="10">
                <v-card-title>Ui/Ux Design </v-card-title>
                <v-card-text>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam euismod volutpat.
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card class="bg-red-lighten-5 pa-4" flat>
            <v-row no-gutters>
              <v-col cols="2" class="text-right">
                <v-icon class="mt-3">mdi-xml</v-icon>
              </v-col>
              <v-col cols="10">
                <v-card-title>Ui/Ux Design </v-card-title>
                <v-card-text>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam euismod volutpat.
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card class="bg-pink-lighten-5 pa-4" flat>
            <v-row no-gutters>
              <v-col cols="2" class="text-right">
                <v-icon class="mt-3">mdi-xml</v-icon>
              </v-col>
              <v-col cols="10">
                <v-card-title>Ui/Ux Design </v-card-title>
                <v-card-text>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam euismod volutpat.
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card class="bg-blue-lighten-5 pa-4" flat>
            <v-row no-gutters>
              <v-col cols="2" class="text-right">
                <v-icon class="mt-3">mdi-xml</v-icon>
              </v-col>
              <v-col cols="10">
                <v-card-title>Ui/Ux Design </v-card-title>
                <v-card-text>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam euismod volutpat.
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card class="bg-blue-lighten-5 pa-4" flat>
            <v-row no-gutters>
              <v-col cols="2" class="text-right">
                <v-icon class="mt-3">mdi-xml</v-icon>
              </v-col>
              <v-col cols="10">
                <v-card-title>Ui/Ux Design </v-card-title>
                <v-card-text>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam euismod volutpat.
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card class="bg-blue-lighten-5 pa-4" flat>
            <v-row no-gutters>
              <v-col cols="2" class="text-right">
                <v-icon class="mt-3">mdi-xml</v-icon>
              </v-col>
              <v-col cols="10">
                <v-card-title>Ui/Ux Design </v-card-title>
                <v-card-text>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam euismod volutpat.
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
    <v-spacer></v-spacer>
  </v-card>
</template>

<script>
import VueBtn from "@/components/common/VueBtn.vue";
import SideNavList from "@/components/common/SideNavList.vue";

export default {
  name: "AboutPage",
  components: { SideNavList, VueBtn },
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

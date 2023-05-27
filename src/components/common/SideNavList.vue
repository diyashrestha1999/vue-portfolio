<template>
  <div
    class="rounded-lg mx-6"
    :class="[$store.state.darkMode ? 'bg-grey-darken-3' : 'bg-grey-lighten-4']"
  >
    <!--     -&#45;&#45; {{$store.state.darkMode}}-->
    <side-nav-list-row
      btn-icon="mdi-cellphone-sound"
      icon-color="pink-lighten-1"
      title="+123 456 7890"
      subtitle="Phone"
      divider
    ></side-nav-list-row>
    <side-nav-list-row
      btn-icon="mdi-gmail"
      icon-color="teal-lighten-2"
      title="diyashrestha2000@gmail.com"
      subtitle="Email"
      divider
    ></side-nav-list-row>
    <side-nav-list-row
      btn-icon="mdi-map-marker"
      icon-color="pink-accent-2"
      title="Kathmandu, Nepal"
      subtitle="Location"
      divider
    ></side-nav-list-row>
    <side-nav-list-row
      btn-icon="mdi-calendar-month"
      icon-color="purple-accent-2"
      title="Dec 8, 1999"
      subtitle="Birthday"
    ></side-nav-list-row>
  </div>
  <v-col class="text-center">
    <v-btn class="my-4 rounded-xl bgColor text-capitalize" @click="viewCv()">
      <v-icon size="x-large">mdi-eye-outline</v-icon>
      View My CV
    </v-btn>
  </v-col>
</template>

<script>
import SideNavListRow from "@/components/common/SideNavListRow.vue";

export default {
  name: "SideNavList",
  components: { SideNavListRow },
  methods: {
    viewCv() {
      window.open(
        "https://drive.google.com/file/d/1IYXEsXU5TFmcr2epu-ulDwl4zg8PhGFi/view",
        "_blank"
      );
    },
  },
};
</script>

<style scoped>
.bgColor {
  background: linear-gradient(0.25turn, #fa5252 20%, #dd2476);
  color: white;
}
.bgColor:hover {
  background: linear-gradient(0.25turn, #dd2476 20%, #fa5252);
}
</style>

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
    <v-btn
      class="my-4 rounded-xl bgColor text-capitalize"
      @click="downloadCv()"
    >
      <v-icon size="x-large">mdi-download-outline</v-icon>
      Download CV
    </v-btn>
  </v-col>
</template>

<script>
import SideNavListRow from "@/components/common/SideNavListRow.vue";
import axios from "axios";

export default {
  name: "SideNavList",
  components: { SideNavListRow },
  methods: {
    downloadCv() {
      axios({
        url: "/assets/cv.pdf",
        method: "GET",
        responseType: "blob",
      })
        .then((response) => {
          // Create a URL object from the blob
          const url = window.URL.createObjectURL(new Blob([response.data]));

          // Create a link element
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "file.pdf");

          // Append the link element to the document body
          document.body.appendChild(link);

          // Click the link to download the PDF file
          link.click();

          // Remove the link element from the document body
          document.body.removeChild(link);
        })
        .catch((error) => {
          console.log(error);
        });
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

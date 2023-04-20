<template>
  <v-card
    flat
    :class="{
      'rounded-0': $vuetify.display.mdAndDown,
    }"
    class="pa-4"
    style="border-radius: 1em"
  >
    <v-card-title>
      <h2 class="after-effect">Works</h2>
    </v-card-title>
    <v-spacer></v-spacer>
    <v-card-text>
      <v-row>
        <v-col cols="6">
          <work-card
            height="160px"
            cols="12"
            title="Ph.D in Lorem ipsum"
            subtitle=" 2021-2023 "
            bgColor="bg-red-lighten-5"
            img-path="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
            @click="
              openDialogBox(
                'title',
                'website',
                'Photoshop, Figma',
                'Envato',
                'www.envato.com',
                'lorem ipsum dolor sit amet consectetur, adipisicing elit. ' +
                  'Mollitia placeat magnam possimus iusto blanditiis pariatur labore explicabo quo repellat hic ' +
                  'dolorum numquam asperiores, voluptatum fugiat reiciendis aspernatur, non, odio aperiam voluptas ex ' +
                  'tempora vitae. Dolor, consequatur quidem! Quas magni distinctio dolorum dolore natus, vel numquam ' +
                  'accusamus. Nostrum eligendi recusandae qui tempore deserunt! ',
                'https://cdn.vuetifyjs.com/images/parallax/material.jpg'
              )
            "
          ></work-card>
          <work-card
            height="160px"
            cols="12"
            title="Ph.D in Lorem ipsum"
            subtitle=" 2021-2023 "
            bgColor="bg-indigo-lighten-5"
            img-path="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
            @click="
              openDialogBox(
                'title',
                'website',
                'Photoshop, Figma',
                'Envato',
                'www.envato.com',
                'lorem ipsum dolor sit amet consectetur, adipisicing elit. ' +
                  'Mollitia placeat magnam possimus iusto blanditiis pariatur labore explicabo quo repellat hic ' +
                  'dolorum numquam asperiores, voluptatum fugiat reiciendis aspernatur, non, odio aperiam voluptas ex ' +
                  'tempora vitae. Dolor, consequatur quidem! Quas magni distinctio dolorum dolore natus, vel numquam ' +
                  'accusamus. Nostrum eligendi recusandae qui tempore deserunt! ',
                'https://cdn.vuetifyjs.com/images/parallax/material.jpg'
              )
            "
          ></work-card>
          <work-card
            height="160px"
            cols="12"
            title="Ph.D in Lorem ipsum"
            subtitle=" 2021-2023 "
            bgColor="bg-blue-lighten-5"
            img-path="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
            @click="
              openDialogBox(
                'title',
                'website',
                'Photoshop, Figma',
                'Envato',
                'www.envato.com',
                'lorem ipsum dolor sit amet consectetur, adipisicing elit. ' +
                  'Mollitia placeat magnam possimus iusto blanditiis pariatur labore explicabo quo repellat hic ' +
                  'dolorum numquam asperiores, voluptatum fugiat reiciendis aspernatur, non, odio aperiam voluptas ex ' +
                  'tempora vitae. Dolor, consequatur quidem! Quas magni distinctio dolorum dolore natus, vel numquam ' +
                  'accusamus. Nostrum eligendi recusandae qui tempore deserunt! ',
                'https://cdn.vuetifyjs.com/images/parallax/material.jpg'
              )
            "
          ></work-card>
          <work-card
            height="165px"
            cols="12"
            title="Ph.D in Lorem ipsum"
            subtitle=" 2021-2023 "
            bgColor="bg-teal-lighten-5"
            img-path="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
            @click="
              openDialogBox(
                'title',
                'website',
                'Photoshop, Figma',
                'Envato',
                'www.envato.com',
                'lorem ipsum dolor sit amet consectetur, adipisicing elit. ' +
                  'Mollitia placeat magnam possimus iusto blanditiis pariatur labore explicabo quo repellat hic ' +
                  'dolorum numquam asperiores, voluptatum fugiat reiciendis aspernatur, non, odio aperiam voluptas ex ' +
                  'tempora vitae. Dolor, consequatur quidem! Quas magni distinctio dolorum dolore natus, vel numquam ' +
                  'accusamus. Nostrum eligendi recusandae qui tempore deserunt! ',
                'https://cdn.vuetifyjs.com/images/parallax/material.jpg'
              )
            "
          ></work-card>
        </v-col>
        <v-col cols="6">
          <work-card
            height="265px"
            cols="12"
            title="Ph.D in Lorem ipsum"
            subtitle=" 2021-2023 "
            bgColor="bg-purple-lighten-5"
            img-path="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
            @click="
              openDialogBox(
                'title',
                'website',
                'Photoshop, Figma',
                'Envato',
                'www.envato.com',
                'lorem ipsum dolor sit amet consectetur, adipisicing elit. ' +
                  'Mollitia placeat magnam possimus iusto blanditiis pariatur labore explicabo quo repellat hic ' +
                  'dolorum numquam asperiores, voluptatum fugiat reiciendis aspernatur, non, odio aperiam voluptas ex ' +
                  'tempora vitae. Dolor, consequatur quidem! Quas magni distinctio dolorum dolore natus, vel numquam ' +
                  'accusamus. Nostrum eligendi recusandae qui tempore deserunt! ',
                'https://cdn.vuetifyjs.com/images/parallax/material.jpg'
              )
            "
          ></work-card>
          <work-card
            height="265px"
            cols="12"
            title="Ph.D in Lorem ipsum"
            subtitle=" 2021-2023 "
            bgColor="bg-orange-lighten-5"
            img-path="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
            @click="
              openDialogBox(
                'title',
                'website',
                'Photoshop, Figma',
                'Envato',
                'www.envato.com',
                'lorem ipsum dolor sit amet consectetur, adipisicing elit. ' +
                  'Mollitia placeat magnam possimus iusto blanditiis pariatur labore explicabo quo repellat hic ' +
                  'dolorum numquam asperiores, voluptatum fugiat reiciendis aspernatur, non, odio aperiam voluptas ex ' +
                  'tempora vitae. Dolor, consequatur quidem! Quas magni distinctio dolorum dolore natus, vel numquam ' +
                  'accusamus. Nostrum eligendi recusandae qui tempore deserunt! ',
                'https://cdn.vuetifyjs.com/images/parallax/material.jpg'
              )
            "
          ></work-card>
          <work-card
            height="265px"
            cols="12"
            title="Ph.D in Lorem ipsum"
            subtitle=" 2021-2023 "
            bgColor="bg-purple-lighten-5"
            img-path="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
            @click="
              openDialogBox(
                'title',
                'website',
                'Photoshop, Figma',
                'Envato',
                'www.envato.com',
                'lorem ipsum dolor sit amet consectetur, adipisicing elit. ' +
                  'Mollitia placeat magnam possimus iusto blanditiis pariatur labore explicabo quo repellat hic ' +
                  'dolorum numquam asperiores, voluptatum fugiat reiciendis aspernatur, non, odio aperiam voluptas ex ' +
                  'tempora vitae. Dolor, consequatur quidem! Quas magni distinctio dolorum dolore natus, vel numquam ' +
                  'accusamus. Nostrum eligendi recusandae qui tempore deserunt! ',
                'https://cdn.vuetifyjs.com/images/parallax/material.jpg'
              )
            "
          ></work-card>
        </v-col>
      </v-row>
    </v-card-text>
    <v-dialog v-model="openDialog" width="850px">
      <work-dialog
        @close="openDialog = $event"
        :title="title"
        :project="project"
        :languages="languages"
        :client="client"
        :preview="preview"
        :text="text"
        :img="img"
      ></work-dialog>
    </v-dialog>
    <footer-below v-if="$vuetify.display.lgAndUp"></footer-below>
  </v-card>
</template>

<script>
import FooterBelow from "@/components/common/FooterBelow.vue";
import WorkCard from "@/components/common/WorkCard.vue";
import WorkDialog from "@/components/common/WorkDialog.vue";
export default {
  name: "WorkPage",
  components: { WorkDialog, WorkCard, FooterBelow },
  data() {
    return {
      openDialog: false,
      title: "",
      project: "",
      languages: "",
      client: "",
      preview: "",
      text: "",
      img: "",
    };
  },
  methods: {
    openDialogBox(title, project, languages, client, preview, text, img) {
      this.title = title;
      this.project = project;
      this.languages = languages;
      this.client = client;
      this.preview = preview;
      this.img = img;
      this.text = text;
      this.openDialog = true;
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

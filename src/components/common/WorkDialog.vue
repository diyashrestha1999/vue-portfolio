<template>
  <v-card style="border-radius: 1em" class="pa-4">
    <v-card-title class="d-flex">
      <h2 class="text-pink-darken-1" v-if="title">{{ title }}</h2>
      <v-spacer> </v-spacer>
      <v-icon @click="$emit('close', false)">mdi-close</v-icon>
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-col md="6" cols="12" v-if="project">
          <v-icon>mdi-school</v-icon>

          Project : {{ project }}
        </v-col>
        <v-col md="6" cols="12" v-if="languages">
          <v-icon>mdi-school</v-icon> Languages : {{ languages }}
        </v-col>
        <v-col md="6" cols="12" v-if="client">
          <v-icon>mdi-school</v-icon> Client : {{ client }}
        </v-col>
        <v-col md="6" cols="12" v-if="preview">
          <v-icon>mdi-school</v-icon> Preview :
          <a
            style="text-decoration: none"
            class="text-teal-lighten-3"
            :href="`https://${preview}`"
            target="_blank"
            >{{ preview }}</a
          >
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-text v-if="text">
      {{ text }}
    </v-card-text>
    <v-card-text v-if="img">
      <v-img :src="img" style="border-radius: 1em"></v-img
    ></v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "WorkDialog",
  props: {
    title: {
      type: String,
    },
    project: {
      type: String,
    },
    languages: {
      type: String,
    },
    client: {
      type: String,
    },
    preview: {
      type: String,
    },
    text: {
      type: String,
    },
    img: {
      type: String,
    },
  },
};
</script>

<style scoped></style>

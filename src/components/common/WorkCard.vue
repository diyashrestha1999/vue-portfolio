<template>
  <v-col :cols="cols">
    <v-card
      class="pa-4"
      :class="[$store.state.darkMode ? '' : bgColor]"
      style="border-radius: 0.8em"
      :style="$store.state.darkMode ? 'border: 2px  solid black' : ''"
      flat
    >
      <v-img class="rounded-lg" cover :src="imgPath" :height="height"></v-img>
      <v-card-subtitle class="pl-0 mt-4">{{ subtitle }}</v-card-subtitle>
      <v-card-title class="pl-0">{{ title }}</v-card-title>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "WorkCard",
  props: {
    bgColor: { type: String, Required: true },
    title: {
      type: String,
      Required: true,
    },
    subtitle: {
      type: String,
    },
    imgPath: {
      type: String,
    },
    cols: {
      type: Number,
      default: 6,
    },
    height: {
      type: String,
    },
  },
};
</script>

<style scoped></style>

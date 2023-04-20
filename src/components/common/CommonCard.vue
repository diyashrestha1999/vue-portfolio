<template>
  <v-col md="6" cols="12">
    <v-card
      class="pa-4"
      :class="[$store.state.darkMode ? '' : bgColor]"
      style="border-radius: 0.8em"
      :style="$store.state.darkMode ? 'border: 2px  solid black' : ''"
      flat
    >
      <v-row no-gutters>
        <v-col cols="2" class="text-right" v-if="icon">
          <v-icon class="mt-3" :color="iconColor" size="x-large">
            {{ icon }}
          </v-icon>
        </v-col>
        <v-col>
          <v-card-subtitle>{{ subtitle }}</v-card-subtitle>
          <v-card-title>{{ title }}</v-card-title>
          <v-card-text
            :class="[
              $store.state.darkMode
                ? 'text-grey-lighten-1'
                : 'text-blue-grey-darken-2',
            ]"
          >
            {{ text }}
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "CommonCard",
  props: {
    subtitle: {
      type: String,
    },
    title: {
      type: String,
      Required: true,
    },
    text: {
      type: String,
      Required: true,
    },
    icon: {
      type: String,
    },
    bgColor: { type: String, Required: true },
    iconColor: {
      type: String,
    },
  },
};
</script>

<style scoped></style>

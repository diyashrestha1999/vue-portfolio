<template>
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
          class="py-0"
          :class="[
            $store.state.darkMode
              ? 'text-grey-lighten-1'
              : 'text-blue-grey-darken-2',
          ]"
        >
          {{ truncatedText }}
        </v-card-text>
        <v-card-actions v-if="seeMore">
          <v-btn
            density="compact"
            icon="mdi-arrow-right"
            flat
            color="pink"
            @click="$emit('expand')"
          ></v-btn>
        </v-card-actions>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "CommonCard",

  props: {
    seeMore: {
      type: Boolean,
    },
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
  computed: {
    truncatedText() {
      const length = 100;
      const suffix = "...";
      let truncatedText = "";

      if (this.text === undefined) return;

      if (this.text.length > length) {
        truncatedText = this.text.substring(0, length) + suffix;
      } else {
        truncatedText = this.text.substring(0, length);
      }

      return truncatedText;
    },
  },
};
</script>

<style scoped></style>

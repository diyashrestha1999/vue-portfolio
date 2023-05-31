<template>
  <v-hover v-slot:default="{ isHovering, props }">
    <v-icon
      v-bind="props"
      size="small"
      class="socialbtn"
      :color="!isHovering ? color : 'white'"
      :class="{
        'bg-grey-lighten-4': !$store.state.darkMode,
        'bg-grey-darken-3': $store.state.darkMode,
      }"
      target="_blank"
      @click="link(url)"
    >
      {{ icon }}
    </v-icon>
  </v-hover>
</template>

<script>
export default {
  name: "VueBtn",
  props: {
    url: {
      type: String,
    },
    icon: {
      type: String,
      Required: true,
    },
    color: {
      type: String,
    },
  },
  methods: {
    link(url) {
      window.open(url, "_blank");
    },
  },
};
</script>

<style scoped>
.socialbtn {
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 0.5rem;
  --tw-bg-opacity: 1;
  margin: 6px;
  transition: 0.2s ease-in-out;
}
.socialbtn:hover {
  background: linear-gradient(0.25turn, #fa5252, #dd2476);
  color: white;
}
/*.socialbtn:hover {*/
/*  --tw-gradient-from: #fa5252;*/
/*  --tw-gradient-to: rgb(250 82 82 / 0);*/
/*  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);*/
/*  --tw-gradient-to: #dd2476;*/
/*  transition-property: color, background-color, border-color, fill, stroke,*/
/*    -webkit-text-decoration-color;*/
/*  transition-property: color, background-color, border-color,*/
/*    text-decoration-color, fill, stroke;*/
/*  transition-property: color, background-color, border-color,*/
/*    text-decoration-color, fill, stroke, -webkit-text-decoration-color;*/
/*  transition-duration: 300ms;*/
/*  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);*/
/*}*/
</style>

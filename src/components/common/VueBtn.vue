<template>
  <v-icon size="small" class="socialbtn" :color="color"> {{ icon }} </v-icon>
</template>

<script>
export default {
  name: "VueBtn",
  props: {
    icon: {
      type: String,
      Required: true,
    },
    color: {
      type: String,
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
  background-color: rgb(243 246 246 / var(--tw-bg-opacity));
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

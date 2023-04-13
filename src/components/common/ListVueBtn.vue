<template>
  <v-hover v-slot:default="{ isHovering, props }">
    <v-icon
      v-bind="props"
      size="small"
      class="socialBtn elevation-2"
      :color="!isHovering ? color : 'white'"
      :class="{
        'bg-black': $store.state.darkMode,
        'bg-white': !$store.state.darkMode,
      }"
    >
      {{ icon }}
    </v-icon>
  </v-hover>
</template>

<script>
export default {
  name: "ListVueBtn",
  props: {
    icon: {
      type: String,
      Required: true,
    },
    color: {
      type: String,
    },
  },

  /*created() {*/
  /*  if (this.btnClass) {*/
  //     for (let item of this.btnClass) {
  //       this.classBtn.push(item);
  //     }
  //   }
  //   if (this.theme.global.current.value.dark) {
  //     this.classBtn.push("bg-black");
  //   } else {
  //     this.classBtn = this.classBtn.filter((x) => x !== "bg-black");
  //   }
  // },
};
</script>

<style scoped>
.socialBtn {
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 0.5rem;
  --tw-bg-opacity: 1;
  margin: 6px;
  background: white;
  transition: 0.2s ease-in-out;
}
.socialBtn:hover {
  background: linear-gradient(0.25turn, #fa5252, #dd2476);
  color: white;
}
/*.socialBtn:hover {*/
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

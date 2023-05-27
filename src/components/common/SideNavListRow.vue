<template>
  <v-row class="mx-6">
    <v-col class="px-0 py-1">
      <v-row no-gutters class="d-flex justify-start align-center my-1">
        <list-vue-btn
          :icon="btnIcon"
          @clickText="clickText()"
          :color="iconColor"
        ></list-vue-btn>

        <v-col cols="8">
          <v-list-item-subtitle>{{ subtitle }}</v-list-item-subtitle>
          <v-list-item-title ref="title">{{ title }}</v-list-item-title>
        </v-col>
      </v-row>
      <v-divider v-if="divider"></v-divider>
    </v-col>
  </v-row>
</template>

<script>
import ListVueBtn from0 "@/components/common/ListVueBtn.vue";

export default {
  name: "SideNavListRow",
  components: { ListVueBtn },
  props: {
    subtitle: {
      type: String,
    },
    iconColor: {
      type: String,
    },
    btnIcon: { type: String },
    title: { type: String },
    divider: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    clickText() {
      // const element = this.$refs.text;
      // element.select();
      // element.setSelectionRange(0, 99999);
      // document.execCommand("copy");
    },
  },
};
</script>

<style scoped></style>

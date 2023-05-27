<template>
  <v-row class="mx-6">
    <v-col class="px-0 py-1">
      <v-row no-gutters class="d-flex justify-start align-center my-1">
        <list-vue-btn
          :icon="btnIcon"
          :color="iconColor"
          @copyText="copyText()"
        ></list-vue-btn>

        <v-col cols="8">
          <v-list-item-subtitle>{{ subtitle }}</v-list-item-subtitle>
          <v-list-item-title>{{ title }}</v-list-item-title>
          <input type="hidden" ref="testing-code" :value="title" />
        </v-col>
      </v-row>
      <v-divider v-if="divider"></v-divider>
    </v-col>
  </v-row>
</template>

<script>
import ListVueBtn from "@/components/common/ListVueBtn.vue";

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
    copyText() {
      let testingCodeToCopy = this.$refs["testing-code"];

      testingCodeToCopy.setAttribute("type", "text"); // 不是 hidden 才能複製
      testingCodeToCopy.select();
      document.execCommand("copy");

      testingCodeToCopy.setAttribute("type", "hidden");
      window.getSelection().removeAllRanges();
    },
  },
};
</script>

<style scoped></style>

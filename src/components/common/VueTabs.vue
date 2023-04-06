<template>
  <v-card class="d-flex flex px-8 py-7" style="border-radius: 16px">
    <v-col
      v-for="item in 5"
      :key="item"
      class="tab text-center rounded-lg mx-2"
    >
      <v-icon size="30" color="blue-grey-darken-3">{{ icon }}</v-icon>
      <p class="text-caption text-blue-grey-darken-3">{{ label }}</p>
    </v-col>

    <!--                <v-col-->
    <!--                  class="bg-red-darken-2 ma-4 pa-3 text-center rounded-lg"-->
    <!--                  @click="$router.push({ name: 'resume' })"-->
    <!--                >-->
    <!--                  <v-icon size="30">mdi-account-outline</v-icon>-->
    <!--                  <p>Second</p>-->
    <!--                </v-col>-->
  </v-card>
</template>

<script>
export default {
  name: "VueTabs",
  props: {
    icon: {
      type: String,
      Required: true,
    },
    label: {
      type: String,
      Required: true,
    },
  },
};
</script>

<style scoped>
.tab {
  --tw-bg-opacity: 1;
  background-color: rgb(243 246 246 / var(--tw-bg-opacity));
}
</style>

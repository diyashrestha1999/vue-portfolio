<template>
  <div
    class="background"
    @mouseover="isHovered = true"
    @mouseout="isHovered = false"
  >
    <h1>Hover over the background to see the transition effect</h1>
  </div>
</template>

<style>
.background {
  background-image: url("@/assets/img_1.png");

  transition: background-image 1s;
}

.background:hover {
  background-image: url("@/assets/img.png");
}
</style>

<script>
export default {
  data() {
    return {
      isHovered: false,
    };
  },
};
</script>

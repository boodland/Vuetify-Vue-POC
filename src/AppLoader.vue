<template>
  <v-progress-linear class="progress-loader" :indeterminate="true"></v-progress-linear>
</template>

<script>
  export default {
    name: 'app-loader',
  };
</script>

<style scoped>
  .progress-loader {
    position: absolute;
    opacity: 1;
    margin: 0;
    z-index: 4;
  }
</style>



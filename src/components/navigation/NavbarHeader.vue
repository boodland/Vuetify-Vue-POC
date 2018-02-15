<template>
  <v-toolbar app dark color="primary">
    <v-layout class="app-layout" justify-space-between="true" align-center="true">
      <v-toolbar-side-icon @click="menuIconHandler"></v-toolbar-side-icon>
      <v-toolbar-title class="white--text mx-0">{{title}}</v-toolbar-title>
      <v-btn icon id="dashboard-action">
        <v-icon>apps</v-icon>
      </v-btn>
    </v-layout>
  </v-toolbar>
</template>

<script>
  export default {
    name: 'navbar-header',
    data() {
      return {
        title: 'Subject Hub',
      };
    },
    methods: {
      menuIconHandler() {
        this.$emit('menuIconClicked');
      },
    },
  };
</script>

<style scoped>
  #dashboard-action{
    visibility: hidden;
  }
</style>

<template>
  <v-toolbar dark color="primary">
    <v-layout justify-space-between="true" align-center="true">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title class="white--text mx-0">{{title}}</v-toolbar-title>
    <v-btn icon>
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
  };
</script>

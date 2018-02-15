<template>
  <v-app id="app">
    <app-navbar></app-navbar>
    <v-content class="app-layout">
      <v-container class="px-0 py-0" fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import AppNavbar from './components/navigation/AppNavbar';

  export default {
    name: 'app',
    components: {
      AppNavbar,
    },
  };
</script>

<style>
  .app-layout {
    margin: 0 auto;
    max-width: 900px;
  }
</style>


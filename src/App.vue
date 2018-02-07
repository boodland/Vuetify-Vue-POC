<template>
  <div id="app">
    <v-app>
      <app-navbar></app-navbar>
      <v-content>
        <v-container>
          <main>
            <router-view></router-view>
          </main>
        </v-container>
      </v-content>
    </v-app>
  </div>
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
  body {
    margin: 0;
  }

  main {
    text-align: center;
    margin-top: 40px;
  }
</style>

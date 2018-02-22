<template>
  <v-app id="app">
    <app-navbar></app-navbar>
    <v-content>
      <app-loader v-show="$root.loading"></app-loader>
      <v-container class="app-layout px-0 py-0">
        <app-dialog :message="$root.dialog.message"></app-dialog>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import AppNavbar from './components/navigation/AppNavbar';
  import AppLoader from './AppLoader';
  import AppDialog from './AppDialog';

  export default {
    name: 'app',
    components: {
      AppNavbar,
      AppLoader,
      AppDialog,
    },
  };
</script>

<style>
  .app-layout {
    max-width: 900px;
  }

  .app-grey-text {
    color: rgba(0,0,0,.54);
  }

  @media (min-width: 900px){
    .app-layout {
      margin: 0 auto;
    }
  }
</style>


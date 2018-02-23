<template>
  <v-app id="app">
    <app-navbar></app-navbar>
    <v-content>
      <app-loader v-show="$root.loading"></app-loader>
      <v-container class="app-layout px-0 py-0">
        <app-dialog :message="$root.dialog.message"></app-dialog>
        <transition :name="$root.transitionName">
          <router-view class="main-view"></router-view>
        </transition>
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
  .app-grey-text {
    color: rgba(0,0,0,.54);
  }

  .main-view {
    position: absolute;
    transition: all .5s cubic-bezier(.55,0,.1,1);
    max-width: 900px;
  }

  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100%, 0);
  }

  @media (min-width: 900px){
    .app-layout {
      margin: 0 auto;
      max-width: 900px;
    }
  }
</style>


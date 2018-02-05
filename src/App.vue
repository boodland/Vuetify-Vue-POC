<template>
  <div id="app">
    <v-app>
      <navbar-list app></navbar-list>
      <navbar-header app></navbar-header>
      <v-content>
        <v-container>
          <main>
            <img src="./assets/logo.png" alt="Vue.js PWA">
            <router-view></router-view>
          </main>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import NavbarHeader from './components/navigation/NavbarHeader';
import NavbarList from './components/navigation/NavbarList';

export default {
  name: 'app',
  components: {
    'navbar-header': NavbarHeader,
    'navbar-list': NavbarList,
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

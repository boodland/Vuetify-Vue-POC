<template>
  <div id="app">
    <v-app>
      <navbar-header></navbar-header>
      <main>
        <img src="./assets/logo.png" alt="Vue.js PWA">
        <router-view></router-view>
      </main>
    </v-app>
  </div>
</template>

<script>
import NavbarHeader from './components/navigation/NavbarHeader';

export default {
  name: 'app',
  components: {
    'navbar-header': NavbarHeader,
  },
};
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}
</style>

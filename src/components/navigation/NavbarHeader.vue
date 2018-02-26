<template>
  <v-toolbar app dark color="primary" height="58px">
    <v-layout class="app-layout" justify-space-between="true" align-center="true">
      <v-toolbar-side-icon
        v-if="isHomePage()"
        @click="menuIconHandler">
      </v-toolbar-side-icon>
      <v-btn v-else icon @click="goBack">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-title class="white--text mx-0">{{title}}</v-toolbar-title>
      <v-btn v-if="isHomePage()" icon id="dashboard-action">
        <v-icon>apps</v-icon>
      </v-btn>
      <v-btn v-else icon :to="'/dashboard'">
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
      goBack() {
        this.$router.push({ name: this.$router.app.backRoute });
      },
      isHomePage() {
        return this.$route.name === 'DashboardList';
      },
    },
  };
</script>

<style scoped>
  #dashboard-action{
    visibility: hidden;
  }
</style>

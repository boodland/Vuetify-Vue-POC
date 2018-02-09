<template>
<v-container grid-list-md>
  <v-layout row wrap>
    <v-flex xs6 v-for="item in 4" :key="item">
      <dashboard-list-item></dashboard-list-item>
    </v-flex>
  </v-layout>
</v-container>
</template>


<script>
  import DashboardListItem from './DashboardListItem';

  export default {
    name: 'dashboard-list',
    components: {
      DashboardListItem,
    },
    data() {
      return {
        dashboardItems: [],
      };
    },
  };
</script>


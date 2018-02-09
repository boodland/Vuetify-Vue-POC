<template>
  <v-card>
    <v-card-title class="pt-1 pb-3">
      <div>
        <h2>HISTORY</h2>
        <v-icon small>event</v-icon>
        <span class="card-subtitle">May 1, 2018</span>
      </div>
    </v-card-title>

    <v-card-media
      height="130"
      src="/static/img/history.jpg"
    >
      <v-layout class="text-xs-center" row wrap justify-center align-center>
        <div class="card-seats mt-3 mx-2">680 SEATS</div>
        <v-btn class="mb-2">View Subject</v-btn>
      </v-layout>
    </v-card-media>
    <v-card-actions>
      <v-btn flat color="orange">Share</v-btn>
      <v-btn flat color="orange">Explore</v-btn>
    </v-card-actions>
  </v-card>
</template>


<script>
  export default {
    name: 'dashboard-list-item',
  };
</script>

<style scoped>

  .card-subtitle {
    color: rgba(0,0,0,.54);
    font-size: 16px;
    vertical-align: middle;
  }

  .card-seats {
    width: 100%;
    font-weight: bold;
    font-size: 30px;
    background-color: rgba(255, 255, 255, 0.7);
  }

</style>

<template>
  <v-card class="subject-card">
    <v-card-title class="pt-1 pb-3 px-2">
      <div>
        <h2>{{title.toUpperCase()}}</h2>
        <v-icon small>event</v-icon>
        <span class="card-subtitle">{{assessmentDate.toDateString()}}</span>
      </div>
    </v-card-title>

    <v-card-media
      height="130"
      :src="'/static/img/' + image + '.jpg'"
    >
      <v-layout class="text-xs-center" row wrap justify-center align-center>
        <div class="card-seats mt-3 mx-2">{{numOfSeats}} SEATS</div>
        <v-btn class="mb-2">View Subject</v-btn>
      </v-layout>
    </v-card-media>
    <v-card-actions class="card-actions">
      <v-chip color="primary" text-color="white">{{numOfExams}} Exams</v-chip>
      <v-chip color="pink accent-2" text-color="white">{{numOfTutors}} Tutors</v-chip>
    </v-card-actions>
  </v-card>
</template>


<script>
  export default {
    name: 'dashboard-list-item',
    props: ['subjectId', 'title', 'assessmentDate', 'numOfSeats', 'numOfTutors', 'numOfExams', 'image'],
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

  .card-actions {
    font-weight: bold;
    justify-content: space-around;
  }

  .subject-card {
    max-width: 190px;
    min-width: 175px;
  }

  @media (max-width: 411px){
  .subject-card {
    max-width: 250px;
    min-width: 175px;
  }

}

</style>

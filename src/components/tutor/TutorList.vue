<template>
  <v-list two-line class="grey lighten-5">
    <v-layout row wrap justify-space-around>
      <v-flex xs12 md6 v-for="(tutorItem, index) in TutorList" :key="index">
        <v-list-tile avatar :to="'/tutors/' + index">
          <v-list-tile-avatar>
            <img :src="tutorItem.thumbnail">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title class="tutor-fullname">
              {{ tutorItem.fullName.toUpperCase() }}
            </v-list-tile-title>
            <v-list-tile-sub-title>
              <v-icon
                :style="{color: 'goldenrod'}"
                v-for="(ratingStar, index) in getRatingStars(tutorItem.rating)"
                :key="index"
              >
                {{ratingStar}}
              </v-icon>
            </v-list-tile-sub-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn color="error" @click.prevent.stop="contactTutor">Contact</v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-flex>
    </v-layout>
  </v-list>
</template>

<script>
  import TutorService from './TutorService';

  export default {
    name: 'tutor-list',
    data() {
      return {
        TutorList: [],
      };
    },
    beforeRouteEnter(to, from, next) {
      TutorService.getTutorsAsync()
        .then(tutors => next(vm => vm.setTutorList(tutors)));
    },
    methods: {
      getRatingStars(rating) {
        const stars = Array(rating).fill('star');
        const emptyStars = Array(5 - rating).fill('star_border');
        return stars.concat(emptyStars);
      },
      setTutorList(tutors) {
        this.TutorList = tutors;
      },
      contactTutor() {
        this.$root.dialog.message = 'contact the tutor';
        this.$root.dialog.show = true;
      },
    },
  };
</script>

<style scoped>
  .tutor-fullname {
    font-size: 18px;
    font-weight: bold;
  }
</style>


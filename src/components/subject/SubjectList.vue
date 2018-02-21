<template>
  <v-list two-line class="grey lighten-5">
    <v-layout row wrap justify-space-around>
      <v-flex class="py-1" xs12 md6 v-for="subjectItem in subjectList" :key="subjectItem.subjectId">
        <v-list-tile :to="'/subjects/' + subjectItem.subjectId">
          <img class="subject-avatar" :src="'/static/img/' + subjectItem.image + '.jpg'">
          <v-list-tile-content class="pl-3">
            <v-list-tile-title
              v-highlight-term="filterTerms.title"
              class="subject-title">{{ subjectItem.title }}
            </v-list-tile-title>
            <v-list-tile-sub-title>
              <v-icon size="18px" class="black--text">event</v-icon>
              <span class="black--text subject-assessment-date">{{ subjectItem.assessmentDate.toDateString() }}</span>
            </v-list-tile-sub-title>
          </v-list-tile-content>
          <div class="subject-seats">
            <span class="subject-seats-number">{{subjectItem.numOfSeats}}</span>
            <span>SEATS</span>
          </div>
          <div class="subject-type" v-bind:style="{background: subjectItem.color}">
            <span class="subject-type-name">{{subjectItem.type}}</span>
            <span>TYPE</span>
          </div>
        </v-list-tile>
      </v-flex>
    </v-layout>
  </v-list>
</template>


<script>
  import SubjectService from './SubjectService';

  const subjectItems = SubjectService.getSubjects();

  export default {
    name: 'subject-list',
    props: ['filterTerms'],
    data() {
      return {
        subjectList: subjectItems,
      };
    },
    methods: {
      filterSubjectBy(subject, title, typeValue) {
        let isValid = !title || subject.title.toLowerCase().includes(title.toLowerCase());

        isValid = isValid &&
        (!typeValue || subject.type === typeValue);

        return isValid;
      },
    },
    watch: {
      filterTerms() {
        this.subjectList = subjectItems.filter(
          subject => this.filterSubjectBy(subject, this.filterTerms.title, this.filterTerms.type),
        );
      },
    },
  };
</script>

<style scoped>
  .subject-avatar {
    height: 80%;
    width: auto;
  }

  .subject-title {
    font-size: 20px;
    font-weight: bold;
  }
  .subject-assessment-date {
    vertical-align: middle;
    font-size: 16px;
  }

  .subject-type {
    text-align: center;
    font-weight: bold;
    color: white;
    width: 58px;
    height: 100%;
  }

  .subject-type-name {
    font-size: 30px;
  }

  .subject-seats {
    text-align: center;
    font-weight: bold;
    color: white;
    background-color: grey;
    width: 58px;
    margin: 0 5px;
    height: 100%;
  }

  .subject-seats-number {
    font-size: 30px;
  }
</style>


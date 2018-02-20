<template>
  <v-card flat>
    <v-toolbar flat prominent color="white">
      <img class="subject-avatar" :src="'/static/img/' + subjectItem.image + '.jpg'">
      <v-spacer></v-spacer>
      <h2 class="subject-title">{{subjectItem.title.toUpperCase()}}</h2>
      <v-spacer></v-spacer>
      <div class="subject-type" v-bind:style="{background: subjectItem.color}">
        {{subjectItem.type}}
      </div>
    </v-toolbar>
    <v-divider></v-divider>
    <v-expansion-panel>
      <v-expansion-panel-content hide-actions value="true">
        <v-layout class="subheading" slot="header">
          <v-flex xs5>Overview</v-flex>
          <v-flex xs7>
            <v-layout justify-space-between>
              <span class="app-grey-text">{{subjectItem.numOfSeats}} SEATS</span>
              <v-icon>info_outline</v-icon>
            </v-layout>
          </v-flex>
        </v-layout>
        <div class="py-3 px-4">
          This subject is blah blah blah
          <br/>
          Blah blah blah...
          <br/>
          More blah blah blah
        </div>
      </v-expansion-panel-content>
      <v-expansion-panel-content hide-actions>
        <v-layout class="subheading" slot="header">
          <v-flex xs5>Assessment Date</v-flex>
          <v-flex xs7>
            <v-layout justify-space-between>
              <span class="app-grey-text">{{subjectItem.assessmentDate.toDateString()}}</span>
              <v-icon>event</v-icon>
            </v-layout>
          </v-flex>
        </v-layout>
        <div class="py-3 px-4">
          <div>
            <label>City:</label>A city in the world
          </div>
          <div>
            <label>Address:</label> Somewhere in the city
          </div>
          <div>
            <label>Time:</label> At a specific time in the address
          </div>
        </div>
      </v-expansion-panel-content>
      <v-expansion-panel-content hide-actions>
        <v-layout class="subheading" slot="header">
          <v-flex xs5>Requirements</v-flex>
          <v-flex xs7>
            <v-layout justify-space-between>
              <span class="app-grey-text">Mandatory to have them</span>
              <v-icon>report_problem</v-icon>
            </v-layout>
          </v-flex>
        </v-layout>
        <div class="py-3 px-4">
          <div>Requirement 1</div>
          <div>Requirement 2</div>
          <div>Requirement 3</div>
          <div>Requirement 4</div>
          <div>Requirement 5</div>
        </div>
      </v-expansion-panel-content>
      <v-expansion-panel-content hide-actions>
        <v-layout class="subheading" justify-space-between slot="header">
          <span>Syllabus</span>
          <v-icon>library_books</v-icon>
        </v-layout>
        <div class="py-3 px-4">
          <div>Lesson 1</div>
          <div>Lesson 2</div>
          <div>Lesson 3</div>
          <div>Lesson 4</div>
          <div>Lesson 5</div>
        </div>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-card>
</template>

<script>
  export default {
    name: 'subject-details',
    data() {
      return {
        subjectItem: {
          subjectId: 1,
          title: 'History',
          assessmentDate: new Date(2018, 4),
          numOfSeats: 680,
          type: 'A',
          color: 'red',
          image: 'history',
        },
      };
    },
  };
</script>

<style scoped>
  .subject-title {
    font-size: 30px;
    font-weight: bold;
  }
  .subject-avatar {
    height: 46px;
    width: auto;
  }
  .subject-type {
    text-align: center;
    font-weight: bold;
    color: white;
    font-size: 46px;
    width: 46px;
    padding: 0 5px;
    line-height: 1;
  }
</style>



<template>
  <v-expansion-panel>
    <v-expansion-panel-content hide-actions>
      <v-layout class="subheading" slot="header">
        <v-flex xs6>Overview</v-flex>
        <v-flex xs6>
          <v-layout justify-space-between>
            <span class="app-grey-text">More data</span>
            <v-icon>info_outline</v-icon>
          </v-layout>
        </v-flex>
      </v-layout>
      Content 1
    </v-expansion-panel-content>
    <v-expansion-panel-content hide-actions>
      <v-layout class="subheading" slot="header">
        <v-flex xs6>Assessment Date</v-flex>
        <v-flex xs6>
          <v-layout justify-space-between>
            <span class="app-grey-text">More data</span>
            <v-icon>event</v-icon>
          </v-layout>
        </v-flex>
      </v-layout>
      Content 2
    </v-expansion-panel-content>
    <v-expansion-panel-content hide-actions>
      <v-layout class="subheading" slot="header">
        <v-flex xs6>Requirements</v-flex>
        <v-flex xs6>
          <v-layout justify-space-between>
            <span class="app-grey-text">More data</span>
            <v-icon>report_problem</v-icon>
          </v-layout>
        </v-flex>
      </v-layout>
      Content 3
    </v-expansion-panel-content>
    <v-expansion-panel-content hide-actions>
      <v-layout class="subheading" justify-space-between slot="header">
        <span>Syllabus</span>
        <v-icon>library_books</v-icon>
      </v-layout>
      Content 4
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
  export default {
    name: 'subject-details',
  };
</script>


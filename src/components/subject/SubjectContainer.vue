<template>
  <div>
    <subject-search v-model="searchTerms"></subject-search>
    <subject-list :filter-terms="searchTerms"></subject-list>
  </div>
</template>

<script>
  import SubjectSearch from './SubjectSearch';
  import SubjectList from './SubjectList';

  export default {
    name: 'subject-container',
    data() {
      return {
        searchTerms: {},
      };
    },
    components: {
      SubjectSearch,
      SubjectList,
    },
  };
</script>


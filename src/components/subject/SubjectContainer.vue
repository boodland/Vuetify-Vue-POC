<template>
  <div>
    <subject-search></subject-search>
    <subject-list></subject-list>
  </div>
</template>

<script>
  import SubjectSearch from './SubjectSearch';
  import SubjectList from './SubjectList';

  export default {
    name: 'subject-container',
    components: {
      SubjectSearch,
      SubjectList,
    },
  };
</script>


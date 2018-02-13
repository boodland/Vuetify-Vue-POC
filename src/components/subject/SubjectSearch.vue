<template>
  <v-layout class="px-3 mt-3">
    <v-flex xs8 class="pr-1">
      <v-text-field
        v-model="titleTerm"
        label="Title"
        clearable
        hide-details
      >
      </v-text-field>
    </v-flex>
    <v-flex xs4>
      <v-select
        v-model="typeTerm"
        :items="typeList"
        label="Type"
        hide-details
        clearable
      >
      </v-select>
    </v-flex>
    <v-icon class="text-xs-center" size="50px">search</v-icon>
  </v-layout>
</template>

<script>
  const typeItems = [
    { text: 'A', value: 'A' },
    { text: 'B', value: 'B' },
    { text: 'C', value: 'C' },
    { text: 'D', value: 'D' },
  ];

  export default {
    name: 'subject-search',
    data() {
      return {
        titleTerm: null,
        typeTerm: null,
        typeList: typeItems,
      };
    },
    props: ['value'],
    computed: {
      searchTerms() {
        return {
          title: this.titleTerm,
          type: this.typeTerm,
        };
      },
    },
    watch: {
      searchTerms() {
        this.$emit('input', this.searchTerms);
      },
    },
  };
</script>


<template>
  <div>
    <navbar-list app :displayList.sync="isListDisplayed"></navbar-list>
    <navbar-header app @menuIconClicked="displayListHandler"></navbar-header>
  </div>
</template>

<script>
  import NavbarHeader from './NavbarHeader';
  import NavbarList from './NavbarList';

  export default {
    name: 'app-navbar',
    components: {
      NavbarList,
      NavbarHeader,
    },
    data() {
      return {
        isListDisplayed: false,
      };
    },
    methods: {
      displayListHandler() {
        this.isListDisplayed = true;
      },
    },
  };
</script>

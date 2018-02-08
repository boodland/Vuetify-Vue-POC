<template>
  <div>
    <navbar-list v-model="isListDisplayed"></navbar-list>
    <navbar-header @menuIconClicked="displayListHandler"></navbar-header>
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

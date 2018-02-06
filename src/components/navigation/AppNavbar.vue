<template>
  <div v-once>
    <navbar-list app></navbar-list>
    <navbar-header app></navbar-header>
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
  };
</script>

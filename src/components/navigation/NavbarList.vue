<template>
  <v-navigation-drawer
    temporary
    v-model="showDrawer"
    app
    width="200"
    @click.native="hideDrawerHandler"
  >
    <v-list dense class="mt-2">
      <v-list-tile v-for="item in items" :key="item.title" @click="hideDrawerHandler" :to="item.link">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    name: 'navbar-list',
    props: ['value'],
    data() {
      return {
        showDrawer: this.value,
        items: [
          { title: 'Dashboard', link: '/dashboard', icon: 'apps' },
          { title: 'Subjects', link: '/subjects', icon: 'school' },
          { title: 'Tutors', link: '/tutors', icon: 'person' },
          { title: 'Exams', link: '/exams', icon: 'edit' },
        ],
      };
    },
    methods: {
      hideDrawerHandler() {
        this.showDrawer = false;
      },
    },
    watch: {
      value() {
        this.showDrawer = this.value;
      },
      showDrawer() {
        this.$emit('input', this.showDrawer);
      },
    },
  };
</script>

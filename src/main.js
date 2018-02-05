// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import {
  Vuetify,
  VApp,
  VGrid,
  VToolbar,
  VBtn,
  VIcon,
  VNavigationDrawer,
  VList,
  VDivider,
} from 'vuetify';

import App from './App';
import router from './router';

require('vuetify/src/stylus/app.styl');


Vue.config.productionTip = false;

Vue.use(Vuetify, {
  components: {
    VApp,
    VGrid,
    VToolbar,
    VBtn,
    VIcon,
    VNavigationDrawer,
    VList,
    VDivider,
  },
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});

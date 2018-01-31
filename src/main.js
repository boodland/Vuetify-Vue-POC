// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import { Vuetify, VApp } from 'vuetify';

import App from './App';
import router from './router';

require('vuetify/src/stylus/app.styl');


Vue.config.productionTip = false;

Vue.use(Vuetify, {
  components: {
    VApp,
  },
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});

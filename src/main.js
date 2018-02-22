// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

import AppUIFramework from './AppUIFramework';
import AppDirectives from './AppDirectives';

import App from './App';
import AppRouter from './AppRouter';

Vue.config.productionTip = false;

AppUIFramework.setVueConfiguration();
AppDirectives.setVueConfiguration();

const router = AppRouter.setVueConfiguration();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  data: {
    loading: false,
    dialog: { show: false, message: '' },
    transitionName: '',
  },
});

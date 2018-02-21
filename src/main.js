// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

import AppUIFramework from './AppUIFramework';
import AppDirectives from './AppDirectives';

import App from './App';
import router from './router';

Vue.config.productionTip = false;

AppUIFramework.setVueConfiguration();
AppDirectives.setVueConfiguration();

router.beforeEach((to, from, next) => {
  router.app.loading = true;
  next();
});

router.afterEach(() => {
  router.app.loading = false;
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  data: { loading: false },
});

import Vue from 'vue';
import Router from 'vue-router';
import DashboardList from '@/components/dashboard/DashboardList';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'DashboardList',
      component: DashboardList,
    },
    { path: '*', redirect: '/' },
  ],
});

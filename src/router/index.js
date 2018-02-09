import Vue from 'vue';
import Router from 'vue-router';
import DashboardList from '@/components/dashboard/DashboardList';
import SubjectList from '@/components/subject/SubjectList';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'DashboardList',
      component: DashboardList,
    },
    {
      path: '/subjects',
      name: 'SubjectList',
      component: SubjectList,
    },
    { path: '*', redirect: '/dashboard' },
  ],
});

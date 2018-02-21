import Vue from 'vue';
import Router from 'vue-router';
import DashboardList from '@/components/dashboard/DashboardList';
import SubjectRoutes from '@/components/subject/SubjectRouter';
import TutorRoutes from '@/components/tutor/TutorRouter';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'DashboardList',
      component: DashboardList,
    },
    ...SubjectRoutes,
    ...TutorRoutes,
    { path: '*', redirect: '/dashboard' },
  ],
});

import Vue from 'vue';
import Router from 'vue-router';
import DashboardList from '@/components/dashboard/DashboardList';
import SubjectRoutes from '@/components/subject/SubjectRouter';
import TutorRoutes from '@/components/tutor/TutorRouter';

const createRouter = () => {
  const router = new Router({
    mode: 'history',
    routes: [
      {
        path: '/dashboard',
        name: 'DashboardList',
        component: DashboardList,
      },
      ...SubjectRoutes,
      ...TutorRoutes,
      {
        path: '/exams',
        meta: { requiresAuth: true, message: 'exams list' },
      },
      { path: '*', redirect: '/dashboard' },
    ],
  });
  return router;
};

class AppRouter {
  static setVueConfiguration() {
    Vue.use(Router);

    const router = createRouter();

    router.beforeEach((to, from, next) => {
      if (to.matched.some(record => record.meta.requiresAuth)) {
        router.app.dialog.message = `navigate to ${to.meta.message}`;
        router.app.dialog.show = true;
        next(false);
      } else {
        router.app.loading = true;
        next();
      }
    });

    router.afterEach(() => {
      router.app.loading = false;
    });

    return router;
  }
}

export default AppRouter;

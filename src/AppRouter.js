import Vue from 'vue';
import Router from 'vue-router';
import DashboardList from '@/components/dashboard/DashboardList';
import SubjectRoutes from '@/components/subject/SubjectRouter';
import TutorRoutes from '@/components/tutor/TutorRouter';


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

const processRequiresAuth = (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    router.app.dialog.message = `navigate to ${to.meta.message}`;
    router.app.dialog.show = true;
    next(false);
  } else {
    router.app.loading = true;
    next();
  }
};

const setTransitionName = (to, from) => {
  if (to.name === 'DashboardList') {
    router.app.transitionName = 'slide-left';
  } else if (from.name === 'DashboardList') {
    router.app.transitionName = 'slide-right';
  } else {
    const toDepth = to.path.split('/').length;
    const fromDepth = from.path.split('/').length;
    router.app.transitionName = toDepth > fromDepth ? 'slide-right' : 'slide-left';
  }
};

const setBackRoute = (to, from) => {
  if (to.name === 'SubjectDetails' && from.name === 'SubjectList') {
    router.app.backRoute = 'SubjectList';
  } else {
    router.app.backRoute = 'DashboardList';
  }
};

const setGuards = () => {
  router.beforeEach((to, from, next) => {
    processRequiresAuth(to, from, next);
  });

  router.afterEach((to, from) => {
    router.app.loading = false;
    setTransitionName(to, from);
    setBackRoute(to, from);
  });
};

class AppRouter {
  static setVueConfiguration() {
    Vue.use(Router);

    setGuards();

    return router;
  }
}

export default AppRouter;

const TutorList = () => import(/* webpackChunkName: "tutor-chunk" */ './TutorList');

const routerRootPath = '/tutors';

export default [
  {
    path: routerRootPath,
    name: 'TutorList',
    component: TutorList,
  },
];

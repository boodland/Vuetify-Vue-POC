const SubjectContainer = () => import(/* webpackChunkName: "subject-chunk" */ './SubjectContainer');
const SubjectDetails = () => import(/* webpackChunkName: "subject-chunk" */ './SubjectDetails');

const routerRootPath = '/subjects';

export default [
  {
    path: routerRootPath,
    name: 'SubjectList',
    component: SubjectContainer,
  },
  {
    path: `${routerRootPath}/:subjectId`,
    name: 'SubjectDetails',
    component: SubjectDetails,
    props: route => ({ subjectId: parseInt(route.params.subjectId, 10) }),
  },
];

const SubjectContainer = () => import('./SubjectContainer');
const SubjectDetails = () => import('./SubjectDetails');

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

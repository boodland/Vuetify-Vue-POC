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
    path: `${routerRootPath}/:id`,
    name: 'SubjectDetails',
    component: SubjectDetails,
  },
];

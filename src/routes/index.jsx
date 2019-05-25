import {lazy} from 'react';

const Homepage = lazy(() => import('@pages/main/homepage'));

const HTML5 = lazy(() => import('@pages/main/html'));

const CSS3 = lazy(() => import('@pages/main/css'));

const JavaScript = lazy(() => import('@pages/main/javascript'));

export default {
  '/main/homepage': Homepage,
  '/main/html': HTML5,
  '/main/css': CSS3,
  '/main/javascript': JavaScript,
}
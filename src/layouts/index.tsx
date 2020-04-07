import Blob_C from '@/constants';
import React from 'react';
import { useLocation } from 'umi';
import BasicLayout from './basic';
import HomepageLayout from './homepage';

const Layout: React.FC = props => {
  const location = useLocation();
  const { pathname: curPath } = location;

  return curPath === Blob_C.PATH.HOMEPAGE ? (
    <HomepageLayout {...props} />
  ) : (
    <BasicLayout {...props} />
  );
};

export default Layout;

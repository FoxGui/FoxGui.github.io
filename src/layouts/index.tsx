import RoutesUtils from '@/utils/routes';
import React from 'react';
import Container from './container';
import Header from './header';
import './index.less';

const BasicLayout: React.FC = ({ children }) => {
  // TODO:增加窗口resize监听与解除事件，
  // TODO:向下滚动时Header隐藏，鼠标移入/页面顶层/向上滚动时显示Header
  const isNotRoot = RoutesUtils.isNotRoot();
  return (
    <>
      <Header visible={isNotRoot} />
      {/* <h1 className={styles.title}>Yay! Welcome to umi!</h1> */}
      {/* TODO:<aside></aside> */}
      {/* TODO: 添加footer，相对于main绝对定位 */}
      <main>{isNotRoot ? <Container>{children}</Container> : children}</main>
    </>
  );
};

export default BasicLayout;

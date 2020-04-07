import React from 'react';
import styles from './index.less';

import Header from './header';

const HomepageLayout: React.FC = props => {
  // TODO:增加窗口resize监听与解除事件，
  // TODO:向下滚动时Header隐藏，鼠标移入/页面顶层/向上滚动时显示Header
  return (
    <div className={styles.normal}>
      <Header />
      <section>
        HoHo
        {props.children}
      </section>
    </div>
  );
};

export default HomepageLayout;

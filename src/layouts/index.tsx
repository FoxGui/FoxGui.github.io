import React from 'react';
import styles from './index.less';

import Header from './header';

const BasicLayout: React.FC = props => {
  return (
    <div className={styles.normal}>
      <Header />
      {/* <h1 className={styles.title}>Yay! Welcome to umi!</h1> */}
      {props.children}
    </div>
  );
};

export default BasicLayout;

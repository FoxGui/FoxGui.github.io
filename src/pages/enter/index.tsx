import React from 'react';
import { Button } from 'antd';
import { Link } from 'umi';
import Blog_C from '@/constants';
import styles from './index.less';

const Enter: React.FC = () => {
  return (
    <section className={styles['enter-page']}>
      <div className={styles['enter-page-center']}>
        <p>呐 好久不见</p>
        <Link to={Blog_C.PATH.HOMEPAGE}>
          <Button type="primary">Enter</Button>
        </Link>
      </div>
    </section>
  );
};

export default Enter;

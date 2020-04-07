import React from 'react';
import { Button } from 'antd';
import { Link } from 'umi';
import Blog_C from '@/constants';
import styles from './index.less';

const Enter: React.FC = () => {
  return (
    <main className={styles['enter-page']}>
      <section className={styles['enter-page-center']}>
        <p>呐 好久不见</p>
        <Link to={Blog_C.PATH.HOMEPAGE}>
          <Button type="primary">Enter</Button>
        </Link>
      </section>
    </main>
  );
};

export default Enter;

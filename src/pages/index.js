import React from 'react';
import { Button } from 'antd';
import styles from './index.less';
import router from 'umi/router';


class Index extends React.Component {
  onIndexClick = () => {
    router.replace('/homepage')
  }
  render() {
    return (
      <div className={styles.normal}>
        <div>
          小组成员：
            ****
        </div>
        <Button onClick={this.onIndexClick}>
          下一步
        </Button>
      </div>
    );
  }
}

export default Index;
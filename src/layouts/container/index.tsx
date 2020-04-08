import React from 'react';
import './index.less';

const Container: React.FC = ({ children }) => {
  return <div className={'container-maintainer'}>{children}</div>;
};

export default Container;

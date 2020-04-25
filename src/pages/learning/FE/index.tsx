import React from 'react';
import './index.less';

interface FEProps {
  children: React.ReactChildren;
}

function FE(props: FEProps) {
  const { children } = props;
  return <div className={'fe-container'}>{children}</div>;
}

export default FE;

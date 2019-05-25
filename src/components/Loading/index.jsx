import * as React from 'react';

export default class Loading extends React.Component {
  render() {
    const {size = 'default', style} = this.props;

    return (
      <div style={{
        minHeight: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ...style
      }}>
        {/*<Spin tip="加载中..." size={size}/>*/}
      </div>
    );
  }
}

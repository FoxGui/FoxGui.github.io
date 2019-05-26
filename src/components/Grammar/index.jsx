import * as React from 'react';

export default class Grammar extends React.Component {
  render(){
    const {name, value, defaultValue, using, inherits, display, calc, media} = this.props;
    return(
      <>
        <p>语法</p>
        <p><strong>{name}</strong>: <span>{value}</span></p>
        <p><strong>默认值</strong>: <span>{defaultValue}</span></p>
        <p><strong>适用于</strong>: <span>{using}</span></p>
        <p><strong>继承性</strong>: <span>{inherits}</span></p>
        <p><strong>动画性</strong>: <span>{display}</span></p>
        <p><strong>计算值</strong>: <span>{calc}</span></p>
        <p><strong>媒体</strong>: <span>{media}</span></p>
      </>
    )
  }
}
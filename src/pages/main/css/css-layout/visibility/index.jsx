import * as React from 'react';

import Grammar from '@components/Grammar';
export default class Visibility extends React.Component {
  render() {
    const grammarProps = {
      name: 'visibility',
      value: 'static | relative | absolute | fixed | sticky',
      defaultValue: 'static',
      using: '除display属性定义为table-column-group | table-column之外的所有元素',
      inherits: '无',
      display: '否',
      calc: '指定值',
      media: '视觉'
    };
    return(
      <>
        <div><h3>Position</h3></div>
        <div>
          <Grammar {...grammarProps}/>
          <p>笔记： 值为fixed与absolute时 对象均脱离常规流，不过fixed便宜定位以窗口为参照（backTop等固钉），absolute则相对于最近定位的祖先元素</p>
          <p>sticky：更方便的固钉？遵循常规流排版，可随页面一起滚动，当定位离开时，表现如fixed--例如：antd的固钉</p>
        </div>
      </>
    )
  }
}
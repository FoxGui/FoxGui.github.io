import * as React from 'react';

import Grammar from '@components/Grammar';
import ApplyValue from '@components/ApplyValue';
import Supplement from '@components/Supplement';

export default class Display extends React.Component {
  render() {
    const grammarProps = {
      name: 'display',
      value: 'none | inline | block | list-item | inline-block | table | inline-table | table-caption | table-cell | table-row | ' +
      'table-row-group | table-column | table-column-group | table-footer-group | table-header-group | run-in | box | inline-box | ' +
      'flexbox | inline-flexbox | flex | inline-flex',
      defaultValue: 'inline',
      using: '所有元素',
      inherits: '无',
      display: '否',
      calc: '指定值，除浮动、绝对定位元素和根元素外',
      media: '视觉'
    };

    const items = [
        {label: 'none', desc: '隐藏对象。与visibility属性的hidden值不同，其不为被隐藏的对象保留其物理空间 '},
        {label: 'inline', desc: ' 指定对象为内联元素，不换行，一行内显示'},
        {label: 'block', desc: '指定对象为块元素，独立的块，单独换行'},
        {label: 'list-item', desc: '指定对象为列表项目'},
        {label: 'inline-block', desc: '指定对象为内联块元素'},
        {label: 'table', desc: ''},
      ];

    const supplementItems = [
      {label: 'display: block', desc: <>
          <p>常见块级元素有: div, form, table, p, pre, h1-h6, dl, ol, ul</p>
          <p>特点：block内可以安插block和inline元素（个别元素如：p除外）<br/>
            block元素会独占一行，多个block元素会各自新起一行。默认情况下，block元素宽度自动填满其父元素宽度<br/>
            block元素可以设置width,height属性。块级元素即使设置了宽度,仍然是独占一行。<br/>
            block元素可以设置margin和padding属性。
          </p>
        </>},
      {label: 'display: inline', desc: <>
          <p>常见内联元素有: span, a, strong, em, label, input, select, textarea, img, br</p>
          <p>特点：inline元素内只能安插inline元素<br/>
            inline元素不会独占一行，多个相邻的行内元素会排列在同一行里，直到一行排列不下，才会新换一行，其宽度随元素的内容而变化<br/>
            inline元素设置width,height属性无效。<br/>
            inline元素的margin和padding属性，水平方向的padding-left, padding-right, margin-left, margin-right都产生边距效果；但竖直方向的padding-top, padding-bottom, margin-top, margin-bottom不会产生边距效果。
          </p>
        </>},
      {label: 'display: inline-block', desc: <>

        </>},
    ];

    return(
      <>
        <div><h3>display</h3></div>
        <div>
          <Grammar {...grammarProps}/>
          <ApplyValue items={items}/>
          <Supplement items={supplementItems}/>
        </div>
      </>
    )
  }
}
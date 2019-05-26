import * as React from 'react';
import {CSSMenu, CSSVersion} from "@pages/main/css/menu";

export default class Positioning extends React.Component {
  render() {
    const container = [
      {value: CSSMenu.POSITION, version: CSSVersion['23'], inherits: '无', desc: '用于指定一个元素在文档中的定位方式'},
      {value: CSSMenu.Z_INDEX, version: CSSVersion['2'], inherits: '无', desc: '/'},
      {value: CSSMenu.TOP, version: CSSVersion['2'], inherits: '无', desc: '/'},
      {value: CSSMenu.RIGHT, version: CSSVersion['2'], inherits: '无', desc: '/'},
      {value: CSSMenu.BOTTOM, version: CSSVersion['2'], inherits: '无', desc: '/'},
      {value: CSSMenu.LEFT, version: CSSVersion['2'], inherits: '无', desc: '/'},
      {value: CSSMenu.CLIP, version: CSSVersion['23'], inherits: '无', desc: '/'},
    ];

    return(
      <>
        <div><h3>Positioning</h3></div>
        <div>
          <table>
            <thead>
              <tr>
                <th>属性</th>
                <th>版本</th>
                <th>继承性</th>
                <th>描述</th>
              </tr>
            </thead>
            <tbody>
            {
              container.map((tr, index) => <tr key={index + ''}>
                <td>{tr.value}</td>
                <td>{tr.version}</td>
                <td>{tr.inherits}</td>
                <td>{tr.desc}</td>
              </tr>)
            }
            </tbody>
          </table>
        </div>
      </>
    )
  }
}
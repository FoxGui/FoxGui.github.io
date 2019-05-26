import * as React from 'react';
import {CSSMenu, CSSVersion} from "@pages/main/css/menu";

export default class Layout extends React.Component {
  render() {
    const container = [
      {value: CSSMenu.DISPLAY, version: CSSVersion['23'], inherits: '无', desc: '/'},
      {value: CSSMenu.FLOAT, version: CSSVersion['1'], inherits: '无', desc: '/'},
      {value: CSSMenu.CLEAR, version: CSSVersion['1'], inherits: '无', desc: '/'},
      {value: CSSMenu.VISIBILITY, version: CSSVersion['2'], inherits: '有', desc: '/'},
      {value: CSSMenu.OVERFLOW, version: CSSVersion['23'], inherits: '无', desc: '/'},
    ];

    return(
      <>
        <div><h3>Layout</h3></div>
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
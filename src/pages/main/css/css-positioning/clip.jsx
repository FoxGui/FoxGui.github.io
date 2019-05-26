import * as React from 'react';

export default class Clip extends React.Component {
  render() {
    return(
      <>
        <div><h3>clip</h3></div>
        <p>剪切元素</p>
        <div style={{
          position: 'absolute',
          clip: 'rect(auto 105px 50px 0)',
          background: '#66ccff'
        }}>
          这就是一个呗剪切的<br/>
          多行文字<br/>
          对了使用前对象position需要为absolute
        </div>
      </>
    )
  }
}
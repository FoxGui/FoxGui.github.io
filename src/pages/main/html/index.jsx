import * as React from 'react';

// import './index.less'
export default class HTML5 extends React.Component {
  render() {
    return (
      <>
        <div className="blog-left">
          <ul>
            <li>这是左方标签栏</li>
          </ul>
        </div>
        <div className="blog-body">
          <p className="fdsrfdfs">这里是HTML5呀</p>
        </div>
      </>
    )
  }
}
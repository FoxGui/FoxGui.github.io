import * as React from 'react';
import hashHistory from '@utils/router';

import './index.less'

export default class Header extends React.Component {
  state = {
    num: 0
  };

  constructor(props) {
    super(props);
    const {location} = hashHistory;
    this.state.num = this.handlerSwitchNum(location.pathname);
  }

   handlerSwitchNum = (pathname) => {
    const reg = [
      {path: '/main/homepage', reg: /\/main\/homepage\/?[a-z]*/},
      {path: '/main/html', reg: /\/main\/html\/?[a-z]*/},
      {path: '/main/css', reg: /\/main\/css\/?[a-z]*/},
      {path: '/main/javascript', reg: /\/main\/javascript\/?[a-z]*/},
    ];
    let path = '';
    for (let i = 0; i < reg.length; i++) {
      if(reg[i].reg.test(pathname)) {
        path = reg[i].path;
        break;
      }
    }

    switch (path) {
      case '/main/homepage':
        return 0;
      case '/main/html':
        return 1;
      case '/main/css':
        return 2;
      case '/main/javascript':
        return 3;
      default:
        return -1
    }
  };

  handlerMenu = (route) => {
    hashHistory.replace({
      pathname: `${route}`
    });
    this.setState({num: this.handlerSwitchNum(route)})
  };

  render() {
    const {num} = this.state;
    return (
      <header>
        <div className="header-container">
          <a>FoxGui的blog</a>
          <nav className="header-right">
            <ul>
              <li className={num === 0 ? "common selected" : "common"}
                  onClick={() => this.handlerMenu('/main/homepage')}>
                <span>首页</span></li>
              <li className={num === 1 ? "common selected" : "common"}
                  onClick={() => this.handlerMenu('/main/html')}>
                <span>HTML5</span>
              </li>
              <li className={num === 2 ? "common selected" : "common"}
                  onClick={() => this.handlerMenu('/main/css')}>
                <span>CSS3</span>
              </li>
              <li className={num === 3 ? "common selected" : "common"}
                  onClick={() => this.handlerMenu('/main/javascript')}>
                <span>JavaScript</span>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}
import _ from 'lodash';

import './style.css';
import doge from './images/doge.gif';

function component() {
  let element = document.createElement('div');

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  /*
    config中添加{test: /\.(png|svg|jpg|gif)$/, use: 'file-loader'}
  */
  const myIcon = new Image();
  myIcon.src = doge;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
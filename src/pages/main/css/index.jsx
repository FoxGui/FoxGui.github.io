import * as React from 'react';

import {routeMap} from './css-routes';

import './index.less'
import {CSSMenu} from "@pages/main/css/menu";

export default class CSS3 extends React.Component {
  cssMainContainer = (
    <>
      <p>这里是CSS3呀</p>
      <p>为方便学习，子路由暂不做设置，结果全部展示在'/main/css'路径下</p>
      <p>左侧菜单栏需要做成树效果（暂未动工）</p>
      <p>其实就是抄一遍 <a target="_blank" href="http://weibo.com/doyoe"style={{fontWeight: 400, color: '#66ccff'}}>飘零雾雨</a> 大大的
        <a target="_blank"
           href="http://css.doyoe.com/"
           style={{fontWeight: 400, color: '#66ccff'}}>CSS参考手册</a> </p>
    </>
  );

  menuParents = {
    POSITIONING: '定位',
    LAYOUT: '布局'
  };

  state = {
    page: this.cssMainContainer,
  };

  renderSubMenu = () => {
    let res = [];
    for (let i in CSSMenu) {
      if (i === 'MAIN') {
        continue;
      }
      if(CSSMenu.hasOwnProperty(i)){
        if (this.menuParents.hasOwnProperty(i)){
          const parent = (
            <p key={i} className="sub-menu parent" onClick={() => this.switchPage(CSSMenu[i])}>
              {this.menuParents[i]}
            </p>
          );

          res.push(parent);
        } else {
          const child = (
            <p key={i} className="sub-menu child" onClick={() => this.switchPage(CSSMenu[i])}>{CSSMenu[i]}</p>
          );

          res.push(child);
        }
      }
    }
    return res;
  };

  switchPage = (page) => {
    if (page === CSSMenu.MAIN) {
      this.setState({page: this.cssMainContainer})
    } else {
      const Page = routeMap[page];
      this.setState({page: <Page/>});
    }
  };

  render() {
    const {page} = this.state;

    return (
      <div className="blog-css">
        <div className="blog-left">
          <div>
            <div className="sub-menu"
                 onClick={() => this.switchPage(CSSMenu.MAIN)}>
              简介
            </div>
            <div>以下是css目录</div>
            <div>
              {this.renderSubMenu()}
            </div>
          </div>
        </div>
        <div className="blog-body">
          {page}
        </div>
      </div>
    )
  }
}
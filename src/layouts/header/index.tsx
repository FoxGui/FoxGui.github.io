import Blog_C from '@/constants';
import React from 'react';
import { Menu } from 'antd';
import { Link, useLocation } from 'umi';
import styles from './index.less';

// interface HeaderProps {}

interface navProps {
  label: string;
  path?: string; // 父菜单无path，不可点击
  children?: navProps[];
}

function Header() {
  const location = useLocation();
  const { pathname: curPath } = location;

  const navConfig: navProps[] = [
    { label: '首页', path: Blog_C.PATH.HOMEPAGE },
    { label: 'Blog', path: Blog_C.PATH.BLOG },
    { label: '更新日志', path: Blog_C.PATH.UPDATE_LOG },
    { label: '关于', path: Blog_C.PATH.ABOUT },
  ];

  const genNav = (nav: navProps) => {
    const { label, path, children } = nav;
    if (children) {
      return (
        <Menu.SubMenu>
          {children.map((child: navProps) => {
            return genNav(child);
          })}
        </Menu.SubMenu>
      );
    }
    return (
      <Menu.Item key={`${path}`}>
        <Link to={`${path}`}>{label}</Link>
      </Menu.Item>
    );
  };

  return (
    <nav className={styles['nav-header']}>
      <div className={styles['nav-header-logo']}>Scarecrow</div>
      {/* component先定义一层，其他以后再说 */}
      <Menu
        className={styles['nav-header-component']}
        mode="horizontal"
        defaultSelectedKeys={[`${curPath}`]}
      >
        {navConfig.map((nav: navProps) => {
          return genNav(nav);
        })}
      </Menu>
      <div className={styles['nav-header-extra']}>github</div>
    </nav>
  );
}

export default Header;

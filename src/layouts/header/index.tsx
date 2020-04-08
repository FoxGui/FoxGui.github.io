import Blog_C from '@/constants';
import RoutesUtils from '@/utils/routes';
import { Menu } from 'antd';
import classNames from 'classnames';
import React from 'react';
import { Link } from 'umi';
import styles from './index.less';

interface HeaderProps {
  className?: string;
  visible: boolean;
}

interface navProps {
  label: string;
  path?: string; // 父菜单无path，不可点击
  children?: navProps[];
}

function Header(props: HeaderProps) {
  const curPath = RoutesUtils.getPathname();
  const notRootPath = RoutesUtils.isNotRoot();

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
    <nav className={classNames(styles['nav-header'], { [styles.visible]: props.visible })}>
      <Link to={Blog_C.PATH.ROOT} className={styles['nav-header-logo']}>
        Scarecrow
      </Link>
      {/* component先定义一层，其他以后再说 */}
      <Menu
        className={styles['nav-header-component']}
        mode="horizontal"
        defaultSelectedKeys={[notRootPath ? curPath : Blog_C.PATH.HOMEPAGE]}
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

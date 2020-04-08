import Blog_C from '@/constants';
import { useLocation } from 'umi';

export default class RoutesUtils {
  static getPathname = () => {
    const location = useLocation();
    return location.pathname;
  };

  static isNotRoot = () => {
    return RoutesUtils.getPathname() !== Blog_C.PATH.ROOT;
  };
}

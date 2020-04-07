import { defineConfig } from 'umi';
const path = require('path');

export default defineConfig({
  routes: [
    { path: '/', component: '@/pages/enter'},
    {
      component: '@/layouts/index',
      routes: [
        { path: '/homepage', component: '@/pages/homepage' },
      ],
    },
  ],
  dva: {},
  antd: {},
  chainWebpack(config) {
    config.module
      .rule('lint')
      .test(/\.(j|t)sx?$/)
      .pre()
      .include.add(path.resolve(__dirname, './src'))
      .end()
      .use('eslint')
      .loader('eslint-loader')
      .options({
        cache: true,
      });
  },
});

import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// 定义路由组件
const TestChart = require('components/testchart.vue');
const Post = require('components/post.vue');

// 定义路由
const routes = [
  { path: '/', redirect: '/testchart' },
  { path: '/testchart', component: TestChart },
  { path: '/post', component: Post},
];

// 创建 router 实例
const router = new VueRouter({
  routes
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
});

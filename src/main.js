import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import Element from 'element-ui';

import VueMoment from 'vue-moment';

Vue.use(VueMoment);
Vue.use(VueRouter);
Vue.use(Element);

// 定义路由组件
const Click = require('components/goodsclick.vue');
const Status = require('components/status.vue');
const Pay = require('components/pay.vue');
const Ship = require('components/ship.vue');
const UsersStatistic = require('components/users_statistic.vue');
// 定义路由
const routes = [
  { path: '/', redirect: '/goodsclick' },
  { path: '/status', component: Status},
  { path: '/goodsclick', component: Click },
  { path: '/pay', component: Pay},
  { path: '/ship', component: Ship},
  { path: '/users_statistic', component: UsersStatistic}
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

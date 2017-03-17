import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

const MainData = function(resolve) {
  return require(['../pages/main/data.vue'], resolve);
};

const MainIndex = function(resolve) {
  return require(['../pages/main/index.vue'], resolve);
};

const MainManage = function(resolve) {
  return require(['../pages/main/manage.vue'], resolve);
};

const MainComments = function(resolve) {
  return require(['../pages/main/comments.vue'], resolve);
};

const Ground = function(resolve) {
	return require(['../pages/ground/ground.vue'], resolve);
}

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/main/data',
      component: MainData,
			name: 'main-data'
    }, {
			path: '/main/index',
      component: MainIndex,
			name: 'main-index'
		}, {
			path: '/main/manage',
      component: MainManage,
			name: 'main-manage'
		}, {
			path: '/main/comments',
      component: MainComments,
			name: 'main-comments'
		}, {
			path: '/ground',
      component: Ground,
			name: 'ground'
		}
  ]
})

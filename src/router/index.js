import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/pages/Home'
import Login from '../components/pages/Login'
import Register from '../components/pages/Register'
import List from '../components/pages/List'
import Shopcar from '../components/pages/Shopcar'
import Mine from '../components/pages/Mine'
import Detail from '../components/pages/Detail'
import Error from '../components/pages/Error'

Vue.use(Router)

export default new Router({
	
	routes: [
	  {
	  	path: '/',
	  	component: Home,
	  	redirect: '/home'
	  },
	  {
		  path: '/home',
		  component: Home,
		  name: 'home'  
	  },
	  {
		 path: '/login',
		 component: Login,
		 name: 'login'  
	  },
	  {
	  path: '/register',
	  component: Register,
	  name: 'register'  
	  },
		{
		path: '/list',
		component: List,
		name: 'list'  
		},
	  {
	  path: '/shopcar',
	  component: Shopcar,
	  name: 'shopcar'  
	  },
	  {
	  path: '/mine',
	  component: Mine,
	  name: 'mine'  
	  },
	  {
	  path: '/detail',
	  component: Detail,
	  name: 'detail'  
	  },
	  {
	  	path: '/error',
	  	component: Error,
	  	name: 'error'
	  },
	  //错误路由的指示	一定要放在最下面
	  {
	  	path: '**',
	  	redirect: '/error'	//路由的重定向
	  },
  ]
  // mode: 'history'//使用history模式，需要后台支持，要和后台说一声
})

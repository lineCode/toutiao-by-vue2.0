import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home.vue'

//把Router 作为 Vue插件
Vue.use(Router)

// 定义路由
const routes = [
	{
		path: '/home/:type',
		name: 'home',
		component: Home
	},
	{
		path: '*',
		redirect: '/home/__all__'
	}
]


//创建router 对象
const router = new Router({
	//变量名和属性名一样 简写
	routes
})
console.log(router)
export default router
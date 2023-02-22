import { createRouter, createWebHashHistory, createWebHistory } from "vue-router"
// 1. 定义路由组件.
// 路由懒加载,按需加载
const Home = () => import("../views/Home.vue")
const About =() => import("../views/About.vue")


// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
	// 配置路由重定向，redirect指定的路由必须已被声明,支持多种声明方式
	{
		path:'/',
		redirect:"/home"
	},
	{
		path:'/home',
		component: Home
	}
	,
	{
		path:'/about',
		component: About
	}
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
	// 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
	history: createWebHashHistory(),
	routes, // `routes: routes` 的缩写
})
// 全局路由守卫,拦截所有路由请求,to目标路由，from来源路由，next拦截路由判断是否放行
router.beforeEach((to, from, next) => {
	console.log(to, from)
	next()
})

export default router
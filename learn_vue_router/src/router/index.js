import { createRouter, createWebHashHistory, createWebHistory } from "vue-router"
// 1. 定义路由组件.
// 也可以从其他文件导入
// 静态加载路由
// import Home from "../views/Home.vue"
import About from "../views/About.vue"
import User from "../views/User.vue"
import NotFound from "../views/NotFound.vue"
import News from "../views/News.vue"
import Parent from "../views/Parent.vue"
import Child1 from "../views/Child1.vue"
import Child2 from "../views/Child2.vue"
import Page from "../views/Page.vue"
import ShopTop from "../views/shop/ShopTop.vue"
import ShopMain from "../views/shop/ShopMain.vue"
import ShopFoot from "../views/shop/ShopFoot.vue"
// 路由懒加载,按需加载
const Home = () => import("../views/Home.vue")


// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
	// 配置路由重定向，redirect指定的路由必须已被声明,支持多种声明方式
	{
		path: '/',
		// redirect: '/home'
		// redirect: {
		// 	name: 'home'
		// }
		redirect: (to) => {
			console.log('to=>', to)
			return {
				name: 'home'
			}
		}
	},
	{
		name: 'home',
		path: '/home',
		// 别名
		alias: ["/index"],
		component: Home
	},
	{
		path: '/about',
		component: About,
		// 路由自定义守卫,每路守卫
		beforeEnter: (to, from, next) => {
			console.log(to, from)
			next()
		}
	},
	// 动态路由：路径参数 :param通过:传递动态参数
	{
		name: 'user',
		path: '/user/:id',
		component: User,
		props: true
	},
	// 正则匹配动态路由参数规则
	{
		// path: '/news/:id(\\d+)',
		// 多个参数
		path: '/news/:id(\\d+)+',
		component: News
	},
	// 嵌套路由的子路由定义
	{
		path: '/parent',
		component: Parent,
		children: [
			{
				path: 'child1',
				component: Child1
			},
			{
				path: 'child2',
				component: Child2
			},
		]
	},
	// 通过js跳转路由
	{
		path: '/page',
		component: Page
	},
	// 命名视图，在一个路由中生命多个组件
	{
		path: '/shop/:id',
		components: {
			default: ShopMain,
			ShopMain,
			ShopTop,
			ShopFoot
		},
		props: {
			ShopMain: true,
			ShopTop: false,
			ShopFoot: false
		}
	},
	// 使用正则表示匹配所有路由,处理404页面
	{
		path: '/:path(.*)',
		component: NotFound,
	},
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
	// 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
	// history: createWebHashHistory(),
	// 历史记录模式
	history: createWebHistory(),
	routes, // `routes: routes` 的缩写
})
// 全局路由守卫,拦截所有路由请求,to目标路由，from来源路由，next拦截路由判断是否放行
router.beforeEach((to, from, next) => {
	console.log(to, from)
	next()
})

export default router
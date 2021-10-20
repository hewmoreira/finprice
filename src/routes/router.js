import { createWebHistory, createRouter } from 'vue-router';
import Home from '../pages/home/home.vue'
import PrecoMedio from '../pages/precoMedio/PrecoMedio.vue';
import About from '../pages/about/About'
import Policy from '../pages/policy/Policy.vue'
import Post1 from '../posts/about-CEI.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/calculadora-preco-medio',
		name: 'calculadora-preco-medio',
		component: PrecoMedio,
	},
	{
		path: '/about',
		name: 'about',
		component: About,
	},
	{
		path: '/policy',
		name: 'policy',
		component: Policy,
	},
	{
		path: '/o-que-e-cei',
		name: 'o-que-e-cei',
		component: Post1,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
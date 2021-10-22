import { createWebHistory, createRouter } from 'vue-router';

// Import from Pages
import Home from '../pages/home/home.vue'
import PrecoMedio from '../pages/precoMedio/PrecoMedio.vue';
import About from '../pages/about/About'
import Policy from '../pages/policy/Policy.vue'

// Import from Posts
import About_CEI from '../posts/about_CEI.vue'
import About_Benchmark from '../posts/about_Benchmark.vue'
import About_ETF from '../posts/about_ETF.vue'

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
		path: '/posts/o-que-e-cei',
		name: 'o-que-e-cei',
		component: About_CEI,
	},
	{
		path: '/posts/benchmark-saiba-quais-sao-os-indices-de-referencias',
		name: 'benchmark-saiba-quais-sao-os-indices-de-referencias',
		component: About_Benchmark,
	},
	{
		path: '/posts/o-que-sao-etfs',
		name: 'o-que-sao-etfs',
		component: About_ETF,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
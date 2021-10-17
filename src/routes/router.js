import { createWebHistory, createRouter } from 'vue-router';
import PrecoMedio from '../pages/precoMedio/PrecoMedio.vue';
import About from '../pages/about/About'
import Policy from '../pages/policy/Policy.vue'

const routes = [
	{
		path: '/',
		name: 'PrecoMedio',
		component: PrecoMedio,
	},
	{
		path: '/about',
		name: 'About',
		component: About,
	},
	{
		path: '/policy',
		name: 'Policy',
		component: Policy,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
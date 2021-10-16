import { createWebHistory, createRouter } from 'vue-router';
import PrecoMedio from '../pages/precoMedio/PrecoMedio.vue';
import About from '../pages/about/About'

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
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
import { createWebHistory, createRouter } from 'vue-router';
import PrecoMedio from '../pages/precoMedio/PrecoMedio.vue';

const routes = [
	{
		path: '/',
		name: 'PrecoMedio',
		component: PrecoMedio,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
import Vue from 'vue'
import Router from 'vue-router'
import dajia from '@/components/pages/dajia'
import CarouselImgs from '@/components/pages/CarouselImgs'

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		name: 'dajia',
		component: dajia
	}, {
		path: '/1-1-1',
		name: 'CarouselImgs',
		component: CarouselImgs
	}]
})